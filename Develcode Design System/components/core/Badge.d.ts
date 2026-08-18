/**
 * Small status / category pill.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'blue' | 'solid' | 'neutral' | 'dark' | 'success' | 'warning' | 'danger';
  uppercase?: boolean;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
