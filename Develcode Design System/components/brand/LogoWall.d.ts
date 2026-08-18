/**
 * Client logo grid. On the blue register logos are knocked out to white; on light backgrounds
 * they run in their own colour.
 */
export interface LogoWallProps {
  logos?: Array<string | { src: string; alt?: string }>;
  columns?: number;
  /** 'asIs' (default) renders the supplied artwork untouched — the client PNGs are already
   * knocked out to white. 'knockout' forces any coloured logo to white. */
  tone?: 'asIs' | 'knockout';
  gap?: string;
  style?: React.CSSProperties;
}
export declare function LogoWall(props: LogoWallProps): JSX.Element;
