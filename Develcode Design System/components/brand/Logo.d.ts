/**
 * Develcode logo lockups. Always use a supplied bitmap — never redraw the mark.
 */
export interface LogoProps {
  /** Which lockup to render. Default 'horizontal-black'. */
  variant?: 'horizontal-black' | 'horizontal-white' | 'mark-blue' | 'mark-white' | 'mark-tile' | 'lockup-2026';
  /** Rendered height in px (or any CSS length). Minimum 24px for the horizontal lockup. */
  height?: number | string;
  /** Path prefix where the logo files live. Default '/assets/logos'. */
  assetsBase?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
