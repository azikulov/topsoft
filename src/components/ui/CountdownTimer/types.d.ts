import type { HTMLAttributes } from 'react';

export interface CountdownTimerProps extends HTMLAttributes<HTMLParagraphElement> {
  targetDate?: Date;
}
