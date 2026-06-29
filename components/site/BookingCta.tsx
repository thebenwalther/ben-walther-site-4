"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui";
import { BookingModal } from "./BookingModal";

export interface BookingCtaProps {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Personalizes the modal heading, e.g. "Apply for 1:1 Coaching". */
  context?: string;
}

/**
 * Self-contained "Book a call" trigger — a secondary CTA wherever it
 * appears. Owns its own modal state so it can be dropped in anywhere
 * without a shared global context.
 */
export function BookingCta({ children, context, ...buttonProps }: BookingCtaProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button {...buttonProps} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <BookingModal open={open} onClose={() => setOpen(false)} context={context} />
    </>
  );
}
