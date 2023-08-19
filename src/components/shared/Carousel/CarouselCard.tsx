import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Carousel.module.scss';
import type { CarouselCardProps } from './types';

export function CarouselCard({ image, href }: CarouselCardProps) {
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
    <Link to={href} className={styles['carousel__card']}>
      <div className={styles['carousel__card-empty']}></div>

      <img src={mediaQuery.matches ? image[0] : image[1]} alt='' />
    </Link>
  );
}
