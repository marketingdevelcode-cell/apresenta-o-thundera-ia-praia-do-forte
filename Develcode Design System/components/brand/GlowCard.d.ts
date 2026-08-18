/**
 * Near-black card lifted by a pale halo (or blue glow) — the deck's default container on dark pages.
 */
export interface GlowCardProps {
  children?: React.ReactNode;
  /** 'dark' (default) near-black, 'light' white paper card. */
  tone?: 'dark' | 'light';
  /** Lift treatment: 'halo' (pale white glow, default), 'blue', 'shadow', 'none'. */
  glow?: 'halo' | 'blue' | 'shadow' | 'none';
  /** Oversized watermark numeral behind the content (1, 2, 3 …). */
  ghostNumber?: number | string;
  padding?: string;
  style?: React.CSSProperties;
}
export declare function GlowCard(props: GlowCardProps): JSX.Element;
