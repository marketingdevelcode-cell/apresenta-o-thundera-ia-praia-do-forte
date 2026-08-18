/**
 * Pill button in the Develcode blue register.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary' filled blue (default) · 'secondary' blue outline · 'ghost' · 'onDark' glowing outline · 'inverse' white on blue. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'onDark' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
