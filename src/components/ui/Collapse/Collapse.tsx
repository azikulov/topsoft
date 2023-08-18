import { useState } from 'react';
import cn from 'classnames';

import styles from './Collapse.module.scss';
import type { CollapseProps } from './types';

export function Collapse({ questions }: CollapseProps) {
  const [currentOpen, setCurrentOpen] = useState<string | null>(null);

  function handleOpenCollapse(value: string | null) {
    setCurrentOpen(value === currentOpen ? null : value);
  }

  return (
    <div className={styles['collapse']}>
      {questions?.map(({ question, answer }, key) => (
        <div key={key} className={styles['collapse__card']}>
          <div
            onClick={() => handleOpenCollapse(question)}
            className={styles['collapse__card-header']}
          >
            <h1 className={styles['collapse__card-title']}>{question}</h1>

            <div
              className={cn(
                styles['collapse__card-icon'],
                currentOpen === question && styles['collapse__card-icon_rotated']
              )}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M9 18L15 12L9 6'
                  stroke='#757575'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>

          <div
            className={cn(
              styles['collapse__card-content'],
              currentOpen === question && styles['collapse__card-content_open']
            )}
          >
            <p dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      ))}
    </div>
  );
}
