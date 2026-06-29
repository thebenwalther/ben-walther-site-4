import * as React from 'react';

export interface KickerProps {
  children?: React.ReactNode;
  /** `plain` gold uppercase, `on-dark` soft gold for dark sections, `pill` tinted capsule. */
  tone?: 'plain' | 'on-dark' | 'pill';
  /** Prefix a small ✦ spark glyph. */
  spark?: boolean;
  style?: React.CSSProperties;
}

/**
 * Small uppercase eyebrow label that introduces a section heading.
 */
export function Kicker(props: KickerProps): JSX.Element;
