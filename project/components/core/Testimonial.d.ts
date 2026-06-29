import * as React from 'react';

export interface TestimonialProps {
  quote: React.ReactNode;
  name: React.ReactNode;
  role?: React.ReactNode;
  /** Avatar initials, e.g. "SK". */
  initials?: string;
  /** Filled gold stars, 1–5. */
  rating?: number;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}

/**
 * Client testimonial card — gold star rating, quote, and an
 * initials avatar with name + role.
 *
 * @startingPoint section="Core" subtitle="Star-rated testimonial card with avatar" viewport="700x260"
 */
export function Testimonial(props: TestimonialProps): JSX.Element;
