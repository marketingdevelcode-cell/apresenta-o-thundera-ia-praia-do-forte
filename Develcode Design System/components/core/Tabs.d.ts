/**
 * Segmented pill tabs. Controlled via `value`/`onChange`, or uncontrolled.
 */
export interface TabsProps {
  tabs?: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
