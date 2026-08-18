/**
 * Text field with label, hint and error line. 8px radius — inputs are the one place the brand
 * does not use pill geometry.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  tone?: 'light' | 'dark';
}
export declare function Input(props: InputProps): JSX.Element;
