/**
 * The signature Develcode label: a pill with a circled ↘ glyph. Used for section eyebrows,
 * capability names and callout leads. One per idea — never stack more than five in a column.
 */
export interface ArrowLabelProps {
  children?: React.ReactNode;
  /** 'onDark' (default) glowing blue outline, 'onLight' blue-on-white, 'solid' filled blue. */
  tone?: 'onDark' | 'onLight' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  /** Hide the circled arrow for a plain pill. Default true. */
  showArrow?: boolean;
  /** Stretch to the full width of the container — how capability boxes are built. Default false. */
  full?: boolean;
  style?: React.CSSProperties;
}
export declare function ArrowLabel(props: ArrowLabelProps): JSX.Element;
