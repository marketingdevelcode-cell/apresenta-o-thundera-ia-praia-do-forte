/**
 * Blue proof tile: big number over a two-line label ("+80% / NPS de Satisfação").
 */
export interface MetricTileProps {
  /** The number, written the way the brand writes it: '12', '+80%', '+500'. */
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: 'blue' | 'dark' | 'light';
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function MetricTile(props: MetricTileProps): JSX.Element;
