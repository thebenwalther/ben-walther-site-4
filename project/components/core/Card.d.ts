import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  surface?: 'white' | 'cream' | 'dark';
  pad?: 'sm' | 'md' | 'lg';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/**
 * Generic surface primitive — the base other cards specialise.
 */
export function Card(props: CardProps): JSX.Element;
