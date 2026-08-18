/**
 * Circular icon-only control. Always pass `label` for accessibility.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'onDark';
  /** Diameter in px. Minimum 40 for touch. */
  size?: number;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
