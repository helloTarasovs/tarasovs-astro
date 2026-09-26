// NY Dispensary Visibility Index: profiles + region data -> ranked rows and live statistics.
// Regions come from src/data/dispensary-regions.json (taken from the live WordPress cards).
import { getCollection } from 'astro:content';
import regions from '../data/dispensary-regions.json';

export const REGION_LABELS: Record<string, string> = {
  manhattan: 'Manhattan',
  brooklyn: 'Brooklyn',
  queens: 'Queens',
  bronx: 'Bronx',
  'staten-island': 'Staten Island',
  'long-island': 'Long Island',
  'hudson-valley': 'Hudson Valley',
  'capital-region': 'Capital Region',
  'mohawk-valley': 'Mohawk Valley',
  'central-new-york': 'Central New York',
  'southern-tier': 'Southern Tier',
  'finger-lakes': 'Finger Lakes',
  'western-new-york': 'Western New York',
  'north-country': 'North Country',
};

export const BANDS = [
  { id: 'strong', label: 'Strong', min: 70 },
  { id: 'limited', label: 'Limited', min: 40 },
  { id: 'low', label: 'Low', min: 10 },
  { id: 'almost-invisible', label: 'Almost invisible', min: 0 },
] as const;
export type BandId = (typeof BANDS)[number]['id'];

/** Same thresholds as the live Index (on the rounded score). */
export const bandFor = (score: number) => BANDS.find((b) => Math.round(score) >= b.min)!;

export interface DispensaryRow {
  slug: string;
  name: string;
  city?: string;
  location: string; // "Harlem, New York · Manhattan"
  region: string;
  regionLabel: string;
  area: 'nyc' | 'upstate';
  score: number | null; // exact composite, null = Pending
  rounded: number | null;
  band: (typeof BANDS)[number] | null;
  mentions: number | null;
  prompts: number | null;
  measured: Date | null;
  rank: number | null;
  url: string;
}

export async function dispensaryRows(): Promise<DispensaryRow[]> {
  const profiles = await getCollection('profiles');
  const rows: DispensaryRow[] = profiles.map((p) => {
    const d = p.data as any;
    const r = (regions as Record<string, { region: string; area: string; location: string }>)[d.slug];
    if (!r) throw new Error(`No region for dispensary profile ${d.slug} (src/data/dispensary-regions.json)`);
    const ready = !d.needsData && d.ai_score != null && Number(d.ai_valid_prompts) === 10;
    const score = ready ? Number(d.ai_score) : null;
    return {
      slug: d.slug,
      name: d.name,
      city: d.city,
      location: r.location,
      region: r.region,
      regionLabel: REGION_LABELS[r.region] ?? r.region,
      area: r.area as 'nyc' | 'upstate',
      score,
      rounded: score == null ? null : Math.round(score),
      band: score == null ? null : bandFor(score),
      mentions: d.ai_mentions != null ? Number(d.ai_mentions) : null,
      prompts: d.ai_valid_prompts != null ? Number(d.ai_valid_prompts) : null,
      measured: d.ai_scanned_at ? new Date(d.ai_scanned_at.replace(' ', 'T') + 'Z') : null,
      rank: null,
      url: `/dispensary-visibility/${d.slug}/`,
    };
  });
  // Statewide order: composite score, ties alphabetical; Pending profiles last and unranked.
  rows.sort((a, b) => (b.score ?? -1) - (a.score ?? -1) || a.name.localeCompare(b.name));
  let n = 0;
  for (const r of rows) if (r.score != null) r.rank = ++n;
  return rows;
}

const pct = (part: number, total: number) => (total ? Math.round((part / total) * 1000) / 10 : 0);
const median = (xs: number[]) => {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

export function indexStats(rows: DispensaryRow[]) {
  const ready = rows.filter((r) => r.score != null);
  const scores = ready.map((r) => r.score!);
  const lastUpdated = rows.reduce<Date | null>((max, r) => (r.measured && (!max || r.measured > max) ? r.measured : max), null);
  return {
    count: ready.length,
    pending: rows.length - ready.length,
    invisiblePct: pct(ready.filter((r) => r.mentions === 0).length, ready.length),
    invisible: ready.filter((r) => r.mentions === 0).length,
    average: Math.round((scores.reduce((a, b) => a + b, 0) / (scores.length || 1)) * 10) / 10,
    strongPct: pct(ready.filter((r) => r.rounded! >= 70).length, ready.length),
    highest: Math.round(Math.max(...scores)),
    lastUpdated,
  };
}

export function regionStats(rows: DispensaryRow[]) {
  const ready = rows.filter((r) => r.score != null);
  return Object.entries(REGION_LABELS)
    .map(([id, label]) => {
      const rs = ready.filter((r) => r.region === id);
      return {
        id,
        label,
        area: rs[0]?.area,
        count: rs.length,
        median: Math.round(median(rs.map((r) => r.score!))),
        strongPct: pct(rs.filter((r) => r.rounded! >= 70).length, rs.length),
        invisible: rs.filter((r) => r.mentions === 0).length,
      };
    })
    .filter((r) => r.count > 0);
}
