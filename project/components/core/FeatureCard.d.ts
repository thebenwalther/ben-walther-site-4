import * as React from 'react';

export interface FeatureCardProps {
  /** Glyph or node for the rounded gold-tinted icon tile. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}

/**
 * Outcome / benefit card — gold-tinted icon tile, title, supporting copy.
 */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
