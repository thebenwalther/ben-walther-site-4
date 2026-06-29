import * as React from 'react';

export interface StatBlockProps {
  /** The numeral, e.g. "400", "1.2", "4.9". */
  value: React.ReactNode;
  /** Trailing unit rendered in gold, e.g. "+", "%", "M", "yrs", "★". */
  unit?: string;
  label?: React.ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/**
 * Big proof numeral with a caption. The trailing unit is gold.
 */
export function StatBlock(props: StatBlockProps): JSX.Element;
