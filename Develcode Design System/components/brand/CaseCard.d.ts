/**
 * Client case study card: client eyebrow, project title pill, challenge paragraph, result pills.
 */
export interface CaseCardProps {
  /** Client or segment name, rendered as an uppercase blue eyebrow. */
  client: React.ReactNode;
  /** Optional client logo URL (white/mono PNG). */
  clientLogo?: string;
  title: React.ReactNode;
  challengeLabel?: string;
  challenge?: React.ReactNode;
  resultsLabel?: string;
  results?: Array<{ label: React.ReactNode; value: React.ReactNode }>;
  style?: React.CSSProperties;
}
export declare function CaseCard(props: CaseCardProps): JSX.Element;
