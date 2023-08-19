import { useEffect, useState } from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CarouselLeftArrow } from './CarouselLeftArrow';
import { CarouselRightArrow } from './CarouselRightArrow';
import { CarouselDots } from './CarouselDots';
import styles from './Carousel.module.scss';
import { CarouselProps } from './types';

const responsive = {
  desktop: {
    breakpoint: { max: 9999, min: 969 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 968, min: 0 },
    items: 1,
  },
};

export function Carousel({ children }: CarouselProps) {
  const [mediaQuery, setMediaQuery] = useState({
    matches: true,
  });

  function updateMediaQuery() {
    setMediaQuery((prevState) => ({
      ...prevState,
      matches: window.innerWidth > 968 ? true : false,
    }));
  }

  useEffect(() => {
    updateMediaQuery();

    window.addEventListener('resize', updateMediaQuery);

    return () => {
      window.removeEventListener('resize', updateMediaQuery);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <MultiCarousel
        customRightArrow={<CarouselRightArrow />}
        customLeftArrow={<CarouselLeftArrow />}
        responsive={responsive}
        arrows={mediaQuery.matches}
        showDots={!mediaQuery.matches}
        dotListClass={styles['carousel-dots']}
        className={styles['multi-carousel']}
        customDot={<CarouselDots />}
        autoPlaySpeed={7000}
        infinite
        autoPlay
        ssr
      >
        {children}
      </MultiCarousel>
    </div>
  );
}
