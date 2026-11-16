/**
 * Muted tints for the Contact page icon circles. Each pairs a pale background
 * with a darker icon colour. Small icon circles only, never buttons or large
 * surfaces.
 */
export const contactAccents = {
  blue: { bg: "#E9EFF5", fg: "#4F6883" },
  slate: { bg: "#E9ECF5", fg: "#4E5F88" },
  amber: { bg: "#FAF1DF", fg: "#94681C" },
  green: { bg: "#E6F1EA", fg: "#3F7355" },
} as const;

export type ContactAccent = keyof typeof contactAccents;
