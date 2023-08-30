import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

import { CountdownTimerProps } from './types';

export function CountdownTimer({ targetDate, ...rest }: CountdownTimerProps) {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const diffInSeconds = differenceInSeconds(targetDate, now);
      setRemainingTime(diffInSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  return (
    <p {...rest}>
      {days}:{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </p>
  );
}
