import { useEffect, useState } from 'react';
import type { DynamicImageProps } from './types';

export function DynamicImage({ src, ...rest }: DynamicImageProps) {
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

  return <img src={mediaQuery ? src[0] : src[1]} {...rest} />;
}
