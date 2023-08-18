import styles from './Carousel.module.scss';
import type { ArrowProps } from 'react-multi-carousel';

export function CarouselRightArrow({ onClick }: ArrowProps) {
  return (
    <button className={styles['carousel-right-arrow']} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
      >
        <circle cx='20' cy='20' r='19.5' fill='white' stroke='#EFEFEF' />
        <path d='M17.333 27L23.333 20.5L17.333 14' stroke='#0B0B0B' strokeWidth='3' />
      </svg>
    </button>
  );
}
