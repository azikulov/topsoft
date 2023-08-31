import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Carousel, CarouselCard } from '@/components/shared/Carousel';
import { Advantages } from '@/components/shared/Advantages';
import { Rates } from '@/components/shared/Rates';
import { Layout } from '@/components/ui/Layout';
import { Collapse } from '@/components/ui/Collapse';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import styles from './page.module.scss';
import { useSelector } from '@/hooks/useSelector';
import type { Product } from '@/types';
import { addDays } from 'date-fns';

export default function Home() {
  const discountProducts = useSelector((state) => state.discountProducts);

  const [isLoadedWindow, setIsLoadedWindow] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (discountProducts.length) {
      setProducts(discountProducts);
      setIsLoadedWindow(true);
    }
  }, [discountProducts]);

  return (
    <Layout hidden={!isLoadedWindow}>
      <>
        <Carousel>
          <CarouselCard
            href='/catalog/16'
            image={['/assets/images/banner-1.webp', '/assets/images/mobile-banner-1.webp']}
          />
          <CarouselCard
            href='/catalog/4'
            image={['/assets/images/banner-2.webp', '/assets/images/mobile-banner-2.webp']}
          />
        </Carousel>

        <div className={styles['software-categories']}>
          <h1 className={styles['software-categories__title']}>Категории софта</h1>

          <div className={styles['software-categories__cards']}>
            <div className={styles['software-categories__card']}>
              <div className={styles['software-categories__card-icon']}>
                <img src={'/assets/images/software-categories/Windows.png'} alt='' />
              </div>

              <p className={styles['software-categories__card-title']}>Microsoft Windows</p>
              <p className={styles['software-categories__card-description']}>
                Бессрочная активация системы
              </p>

              <Link
                to='/catalog?nav=microsoft-windows'
                className={styles['software-categories__card-link']}
              >
                Подробнее →
              </Link>
            </div>

            <div className={styles['software-categories__card']}>
              <div className={styles['software-categories__card-icon']}>
                <img src={'/assets/images/software-categories/Office.png'} alt='' />
              </div>

              <p className={styles['software-categories__card-title']}>Microsoft Office 365</p>
              <p className={styles['software-categories__card-description']}>
                Офисные пакеты распространяемые по подписке
              </p>

              <Link
                to='/catalog?nav=microsoft-office-365'
                className={styles['software-categories__card-link']}
              >
                Подробнее →
              </Link>
            </div>

            <div className={styles['software-categories__card']}>
              <div className={styles['software-categories__card-icon']}>
                <img src={'/assets/images/software-categories/Office.png'} alt='' />
                <img src={'/assets/images/software-categories/Windows.png'} alt='' />
              </div>

              <p className={styles['software-categories__card-title']}>Office для Windows</p>
              <p className={styles['software-categories__card-description']}>
                Бессрочные офисные пакеты
              </p>

              <Link
                to='/catalog?nav=office-for-windows'
                className={styles['software-categories__card-link']}
              >
                Подробнее →
              </Link>
            </div>

            <div className={styles['software-categories__card']}>
              <div className={styles['software-categories__card-icon']}>
                <img src={'/assets/images/software-categories/Office.png'} alt='' />
                <img src={'/assets/images/software-categories/Apple.png'} alt='' />
              </div>

              <p className={styles['software-categories__card-title']}>Office для MacOS</p>
              <p className={styles['software-categories__card-description']}>
                Бессрочные офисные пакеты
              </p>

              <Link
                to='/catalog?nav=office-for-macos'
                className={styles['software-categories__card-link']}
              >
                Подробнее →
              </Link>
            </div>
          </div>
        </div>

        {products.length && (
          <div className={styles['products']}>
            <h1 className={styles['products__title']}>Товары дня</h1>
            <p className={styles['products__subtitle']}>Скидка на специальные товары</p>

            <div className={styles['products__cards']}>
              <div className={styles['products__card']}>
                <div className={styles['products__card-image']}>
                  <Link to={'/catalog/' + products[0].id}>
                    <img src={products[0].image} alt='' />
                  </Link>
                </div>

                <div className={styles['products__card-content']}>
                  <h1 className={styles['products__card-title']}>
                    <Link to={'/catalog/' + products[0].id}>{products[0].title}</Link>
                  </h1>

                  <CountdownTimer
                    className={styles['products__card-timer']}
                    targetDate={
                      products[0].date ? new Date(products[0].date) : addDays(new Date(), 4)
                    }
                  />

                  <div className={styles['products__card-price']}>
                    <p className={styles['products__card-price_new']}>{products[0].newPrice}</p>

                    <div>
                      <p className={styles['products__card-price_initial']}>
                        {products[0].oldPrice}
                      </p>
                      <span>{products[0].discount}</span>
                    </div>
                  </div>

                  <Link
                    to={'/catalog/' + products[0].id}
                    className={styles['products__card-button']}
                  >
                    Подробнее
                  </Link>
                </div>
              </div>

              <div className={styles['products__card']}>
                <div className={styles['products__card-image']}>
                  <Link to={'/catalog/' + products[1].id}>
                    <img src={products[1].image} alt='' />
                  </Link>
                </div>

                <div className={styles['products__card-content']}>
                  <h1 className={styles['products__card-title']}>
                    <Link to={'/catalog/' + products[1].id}>{products[1].title}</Link>
                  </h1>

                  <CountdownTimer
                    className={styles['products__card-timer']}
                    targetDate={
                      products[1].date ? new Date(products[1].date) : addDays(new Date(), 4)
                    }
                  />

                  <div className={styles['products__card-price']}>
                    <p className={styles['products__card-price_new']}>{products[1].newPrice}</p>

                    <div>
                      <p className={styles['products__card-price_initial']}>
                        {products[1].oldPrice}
                      </p>
                      <span>{products[1].discount}</span>
                    </div>
                  </div>

                  <Link
                    to={'/catalog/' + products[1].id}
                    className={styles['products__card-button']}
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles['best-offers']}>
          <h1 className={styles['best-offers__title']}>Лучшие предложения</h1>

          <div className={styles['best-offers__cards']}>
            <Link to='/catalog/5' className={styles['best-offers__card']}>
              <div className={styles['best-offers__card-image']}>
                <img src={'/assets/images/products/Обложка-Windows-11-Home.webp'} alt='' />
              </div>

              <h1 className={styles['best-offers__card-title']}>Windows 11 Home</h1>
              <p className={styles['best-offers__card-description']}>
                Популярная операционная система, впитавшая в себя самое лучшее
              </p>
              <p className={styles['best-offers__card-price']}>1 890 ₽</p>

              <button className={styles['best-offers__card-button']}>Подробнее</button>
            </Link>

            <Link to='/catalog/12' className={styles['best-offers__card']}>
              <div className={styles['best-offers__card-image']}>
                <img
                  src={
                    '/assets/images/products/Обложка-Office-2019-Professional-Plus-(Windows).webp'
                  }
                  alt=''
                />
              </div>

              <h1 className={styles['best-offers__card-title']}>
                Microsoft Office 2019 Professional Plus
              </h1>
              <p className={styles['best-offers__card-description']}>
                Офисный пакет приложений для работы с различными типами документов
              </p>
              <p className={styles['best-offers__card-price']}>1 890 ₽</p>

              <button className={styles['best-offers__card-button']}>Подробнее</button>
            </Link>

            <Link to='/catalog/3' className={styles['best-offers__card']}>
              <div className={styles['best-offers__card-image']}>
                <img src={'/assets/images/products/Обложка-Windows-10-Home.webp'} alt='' />
              </div>

              <h1 className={styles['best-offers__card-title']}>Windows 10 Home</h1>
              <p className={styles['best-offers__card-description']}>
                Популярная операционная система, впитавшая в себя самое лучшее
              </p>
              <p className={styles['best-offers__card-price']}>1 890 ₽</p>

              <button className={styles['best-offers__card-button']}>Подробнее</button>
            </Link>

            <Link to='/catalog/9' className={styles['best-offers__card']}>
              <div className={styles['best-offers__card-image']}>
                <img
                  src={
                    '/assets/images/products/Обложка-Office-2016-Professional-Plus-(Windows).webp'
                  }
                  alt=''
                />
              </div>

              <h1 className={styles['best-offers__card-title']}>
                Microsoft Office 2016 Professional Plus
              </h1>
              <p className={styles['best-offers__card-description']}>
                Офисный пакет приложений для работы с различными типами документов
              </p>
              <p className={styles['best-offers__card-price']}>1 890 ₽</p>

              <button className={styles['best-offers__card-button']}>Подробнее</button>
            </Link>
          </div>

          <Link to={'/catalog'} className={styles['best-offers__link']}>
            Посмотреть все →
          </Link>
        </div>

        <Advantages />

        <Rates />

        <div className={styles['answers']}>
          <h1 className={styles['answers__title']}>Ответы на вопросы</h1>
          <p className={styles['answers__subtitle']}>
            Собрали в одном месте ответы на часто задаваемые <br />
            вопросы покупателей
          </p>

          <Collapse
            questions={[
              {
                question: 'Активация работает в условиях санкций? ',
                answer: 'Да, активация работает в штатном режиме ',
              },
              {
                question: 'Если я оплачу сейчас, когда вы отправите мне ключ? ',
                answer:
                  'Вы получите свой заказ в автоматическом режиме в течение 1 минуты после оплаты в любое время суток. ',
              },
              {
                question: 'У вас есть право на распространение данных лицензий? ',
                answer:
                  'Да, конечно. Мы являемся партнером официального дистрибьютора Microsoft в России. Все ключи поступают от надежных поставщиков и активируются через официальные сервера активации Microsoft. ',
              },
              {
                question: 'Какая гарантия на ключ? Он не заблокируется через месяц? ',
                answer:
                  'Все реализуемые нами ключи проходят валидацию на серверах Microsoft и имеют пожизненную гарантию от производителя. Мы в свою очередь предоставляем консультации в течении 1 года после покупки ключа. После истечения 1 года, консультацию можно получить на официальном сайте Microsoft согласно лицензионному соглашению ',
              },
              {
                question: 'Я хочу узнать больше и не нашел здесь ответа на свой вопрос ',
                answer:
                  'Больше вопросов и ответов на них вы сможете найти в разделе <a to="/answers">"Вопрос-ответ"</a> или написать нам в онлайн чат. ',
              },
            ]}
          />
        </div>
      </>
    </Layout>
  );
}
