/**
 * Slide / section title with optional supporting line. Emphasis inside the title is set in
 * bold italic (<em>) — the brand's way of stressing the moving part of a sentence.
 */
export interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tone?: 'light' | 'dark';
  size?: 'display' | 'h1' | 'h2';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
