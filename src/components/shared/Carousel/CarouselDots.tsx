import cn from 'classnames';
import type { DotProps } from 'react-multi-carousel';
import styles from './Carousel.module.scss';

export function CarouselDots({ onClick, active }: DotProps) {
  return (
    <button
      className={cn(styles['carousel-dots__item'], active && styles['active'])}
      onClick={onClick}
    ></button>
  );
}
