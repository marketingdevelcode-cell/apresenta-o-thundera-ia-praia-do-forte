/**
 * Neutral container. On dark pages prefer GlowCard for the deck's halo treatment.
 */
export interface CardProps {
  children?: React.ReactNode;
  tone?: 'light' | 'dark';
  padding?: string;
  /** Adds hover lift for clickable cards. */
  interactive?: boolean;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
