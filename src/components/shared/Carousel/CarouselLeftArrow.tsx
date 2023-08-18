import styles from './Carousel.module.scss';
import type { ArrowProps } from 'react-multi-carousel';

export function CarouselLeftArrow({ onClick }: ArrowProps) {
  return (
    <button className={styles['carousel-left-arrow']} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
      >
        <circle
          cx='20'
          cy='20'
          r='19.5'
          transform='rotate(-180 20 20)'
          fill='white'
          stroke='#EFEFEF'
        />
        <path d='M22.667 13L16.667 19.5L22.667 26' stroke='#0B0B0B' strokeWidth='3' />
      </svg>
    </button>
  );
}
