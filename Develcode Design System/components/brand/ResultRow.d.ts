/**
 * Pill row pairing a result name with its value — the "Resultados Obtidos" list inside case cards.
 */
export interface ResultRowProps {
  label: React.ReactNode;
  value: React.ReactNode;
  tone?: 'dark' | 'light';
  style?: React.CSSProperties;
}
export declare function ResultRow(props: ResultRowProps): JSX.Element;
