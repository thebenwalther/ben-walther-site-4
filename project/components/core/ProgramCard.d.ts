import * as React from 'react';

export interface ProgramCardProps {
  /** Small uppercase eyebrow, e.g. "Three months". */
  tag?: React.ReactNode;
  name: React.ReactNode;
  /** Price / cadence line, e.g. "$240 / session, every other week". */
  price?: React.ReactNode;
  description?: React.ReactNode;
  ctaLabel?: React.ReactNode;
  ctaHref?: string;
  /** Floating pill, e.g. "Most popular". */
  badge?: React.ReactNode;
  /** Dark forest treatment for the highlighted tier. */
  featured?: boolean;
  onCta?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * A coaching package / pricing tier card. Compose three in a row;
 * mark the middle one `featured` for the dark, badged treatment.
 *
 * @startingPoint section="Core" subtitle="Pricing / coaching package tier card" viewport="420x420"
 */
export function ProgramCard(props: ProgramCardProps): JSX.Element;
