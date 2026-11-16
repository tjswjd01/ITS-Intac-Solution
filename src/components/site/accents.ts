/**
 * Site-wide accent tints for icon tiles, chips and category visuals.
 * Each pairs a pale tile background with a darker icon colour (all fg
 * colours pass 4.5:1 on their bg). Used on small tiles only, never on
 * buttons or large surfaces. Roles:
 *   dusty — technology, engineering, equipment
 *   teal  — quality, verification, process
 *   slate — operations, management, logistics
 *   coral — people, talent, the one highlight
 */
export const accents = {
  dusty: { bg: "#E9EFF5", fg: "#4F6883" },
  teal: { bg: "#E4F0EE", fg: "#3F6F68" },
  slate: { bg: "#E9ECF5", fg: "#4E5F88" },
  coral: { bg: "#FBECE8", fg: "#A94E3F" },
} as const;

export type AccentName = keyof typeof accents;

/** Cycle through the four accents for a list of items. */
export const accentAt = (index: number): AccentName =>
  (["dusty", "teal", "slate", "coral"] as const)[index % 4];
