import { Link } from 'react-router-dom';

import { Carousel, CarouselCard } from '@/components/shared/Carousel';
import { Advantages } from '@/components/shared/Advantages';
import { Rates } from '@/components/shared/Rates';
import { Layout } from '@/components/ui/Layout';
import { Collapse } from '@/components/ui/Collapse';
import styles from './page.module.scss';

// Images
import Banner1 from '../../public/assets/images/banner-1.webp';
import Banner2 from '../../public/assets/images/banner-2.webp';
import MobileBanner1 from '../../public/assets/images/mobile-banner-1.webp';
import MobileBanner2 from '../../public/assets/images/mobile-banner-2.webp';

export default function Home() {
  return (
    <Layout>
      <Carousel>
        <CarouselCard href='/catalog/16' image={[Banner1, MobileBanner1]} />
        <CarouselCard href='/catalog/4' image={[Banner2, MobileBanner2]} />
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
      <div className={styles['products']}>
        <h1 className={styles['products__title']}>Товары дня</h1>
        <p className={styles['products__subtitle']}>Скидка на специальные товары</p>

        <div className={styles['products__cards']}>
          <div className={styles['products__card']}>
            <div className={styles['products__card-image']}>
              <Link to='/catalog/15'>
                <img
                  src={
                    '/assets/images/products/Обложка-Office-2021-Professional-Plus-(Windows).webp'
                  }
                  alt=''
                />
              </Link>
            </div>

            <div className={styles['products__card-content']}>
              <h1 className={styles['products__card-title']}>
                <Link to='/catalog/15'>
                  Office 2021 <br />
                  Professional Plus
                </Link>
              </h1>
              <p className={styles['products__card-timer']}>00: 01: 24: 14</p>

              <div className={styles['products__card-price']}>
                <p className={styles['products__card-price_new']}>1 790 ₽</p>

                <div>
                  <p className={styles['products__card-price_initial']}>1 990 ₽</p>
                  <span>— 10%</span>
                </div>
              </div>

              <Link to='/catalog/15' className={styles['products__card-button']}>
                Подробнее
              </Link>
            </div>
          </div>

          <div className={styles['products__card']}>
            <div className={styles['products__card-image']}>
              <Link to='/catalog/6'>
                <img src={'/assets/images/products/Обложка-Windows-11-Pro.webp'} alt='' />
              </Link>
            </div>

            <div className={styles['products__card-content']}>
              <h1 className={styles['products__card-title']}>
                <Link to='/catalog/6'>
                  Windows 11 Pro <br />
                  (профессиональная)
                </Link>
              </h1>
              <p className={styles['products__card-timer']}>00: 01: 24: 14</p>

              <div className={styles['products__card-price']}>
                <p className={styles['products__card-price_new']}>1 690 ₽</p>

                <div>
                  <p className={styles['products__card-price_initial']}>1 790 ₽</p>
                  <span>— 10%</span>
                </div>
              </div>

              <Link to='/catalog/6' className={styles['products__card-button']}>
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                src={'/assets/images/products/Обложка-Office-2019-Professional-Plus-(Windows).webp'}
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
                src={'/assets/images/products/Обложка-Office-2016-Professional-Plus-(Windows).webp'}
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
    </Layout>
  );
}
