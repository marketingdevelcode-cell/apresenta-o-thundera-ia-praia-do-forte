/**
 * Native select with the brand's blue chevron.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
  hint?: React.ReactNode;
  tone?: 'light' | 'dark';
}
export declare function Select(props: SelectProps): JSX.Element;
