import { Link } from 'react-router-dom';

import { DynamicImage } from '@/components/ui/DynamicImage';
import styles from './Advantages.module.scss';
import { getImagePath } from '@/utils/getImagePath';

export function Advantages() {
  return (
    <div className={styles['advantages']}>
      <h1 className={styles['advantages__title']}>Почему выбирают нас</h1>

      <div className={styles['advantages__cards']}>
        <div className={styles['advantages__card']}>
          <div className={styles['advantages__card-left']}>
            <h1 className={styles['advantages__card-title']}>
              Широкий <br />
              ассортимент
            </h1>

            <p className={styles['advantages__card-subtitle']}>
              В нашем магазине можете найти оригинальные коды и ключи активации для операционных
              систем, офисных продуктов и других товаров
            </p>

            <Link to={'/catalog'} className={styles['advantages__card-link']}>
              Перейти в каталог →
            </Link>
          </div>

          <div className={styles['advantages__card-image']}>
            <img src={getImagePath('assets/images/advantages/composition-1.png')} alt='' />
          </div>
        </div>

        <div className={styles['advantages__card']}>
          <div className={styles['advantages__card-left']}>
            <h1 className={styles['advantages__card-title']}>
              Официальные
              <br /> поставщики
            </h1>

            <p className={styles['advantages__card-subtitle']}>
              Поставляем ПО только от официальных дистрибьютеров. Программы предназначены для
              активации на территории России
            </p>

            <div className={styles['advantages__card-partner']}>
              <img src={getImagePath('assets/images/advantages/microsoft-partner.png')} alt='' />
            </div>
          </div>

          <div className={styles['advantages__card-image-2']}>
            <DynamicImage
              src={[
                getImagePath('assets/images/advantages/composition-2.png'),
                getImagePath('assets/images/advantages/composition-3.png'),
              ]}
              alt=''
            />
          </div>
        </div>

        <div className={styles['advantages__banner']}>
          <h1 className={styles['advantages__banner-title']}>
            Наши ключи <br />
            на маркетплейсе
          </h1>

          <p className={styles['advantages__banner-description']}>
            Вы также можете найти наши товары <br />
            на СберМегаМаркете. <br />
            Однако, приобретая ПО на нашем <br />
            сайте, вы получаете прямой доступ <br />к лучшим ценам и поддержке
          </p>

          <Link to={'#'} className={styles['advantages__banner-link']}>
            Перейти на сайт →
          </Link>

          <div className={styles['advantages__banner-rating']}>
            <p>Рейтинг магазина</p>

            <div>
              <span>
                {Array(5)
                  .fill('')
                  .map((_, key) => (
                    <svg
                      key={key}
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='15'
                      viewBox='0 0 16 15'
                      fill='none'
                    >
                      <path
                        d='M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z'
                        fill='#FD9738'
                      />
                    </svg>
                  ))}
              </span>
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
