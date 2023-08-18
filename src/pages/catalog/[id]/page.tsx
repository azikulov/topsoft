import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { Layout } from '@/components/ui/Layout';
import { Collapse } from '@/components/ui/Collapse';
import { Loading } from '@/components/shared/Loading';
import { Help } from '@/components/shared/Help';
import { Rates } from '@/components/shared/Rates';
import { useProductsStore } from '@/store';
import styles from './page.module.scss';
import type { Product } from '@/types';
import type { CurrentTab } from './types';

export default function CatalogID() {
  const params = useParams();
  const { products } = useProductsStore();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<CurrentTab>('description');
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [isLoadedWindow, setIsLoadedWindow] = useState<boolean>(false);

  function handleToggleModal() {
    setIsOpenModal((prevState) => !prevState);
  }

  function handleSelectTab(tab: 'description' | 'how to buy' | 'system requirements') {
    setCurrentTab(tab);
  }

  function handleScrollToRates() {
    const rates = document.getElementById('rates');
    if (rates?.scrollIntoView) rates.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    setIsLoadedWindow(false);
    setCurrentProduct(products?.filter((product) => product.id === Number(params.id))[0]);
    setIsLoadedWindow(true);
  }, [params.id, products]);

  return (
    <Layout>
      {isLoadedWindow && currentProduct ? (
        <>
          <div className={styles['breadcrumb']}>
            <p className={styles['breadcrumb__navigation']}>
              <Link to='/'>Главная → </Link>
              <Link to='/catalog'>Каталог → {currentProduct.category} → </Link>
              <span>{currentProduct.title}</span>
            </p>
          </div>

          <div className={styles['product']}>
            <div className={styles['product__image']}>
              <img src={currentProduct.image} alt='' />
            </div>

            <div className={styles['product__content']}>
              <h1 className={styles['product__content-title']}>{currentProduct.title}</h1>

              <div onClick={handleScrollToRates} className={styles['product__content-rates']}>
                <div>
                  {Array(5)
                    .fill('')
                    .map((_, key) => (
                      <svg
                        key={key}
                        xmlns='http://www.w3.org/2000/svg'
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M8.5 14.237L12.6224 16.8458C13.3773 17.324 14.3011 16.6172 14.1025 15.7233L13.0098 10.8174L16.6554 7.51216C17.3209 6.90932 16.9633 5.76599 16.0891 5.69324L11.2913 5.26709L9.41388 0.631427C9.07614 -0.210476 7.92386 -0.210476 7.58612 0.631427L5.7087 5.25669L0.910854 5.68284C0.0367115 5.7556 -0.320892 6.89892 0.344648 7.50177L3.99022 10.807L2.89754 15.7129C2.69887 16.6068 3.62268 17.3136 4.37762 16.8355L8.5 14.237Z'
                          fill='#FFC700'
                        />
                      </svg>
                    ))}
                </div>

                <span>353 отзыва</span>
              </div>

              <form className={styles['product__form']}>
                {currentProduct.supportVersion && (
                  <>
                    <div className={styles['product__form-switchs']}>
                      <div className={styles['product__form-switch']}>
                        <input
                          defaultChecked
                          type='radio'
                          name='radio'
                          id='without-binding'
                          hidden
                        />
                        <label htmlFor='without-binding'>Без привязки</label>
                      </div>

                      <div className={styles['product__form-switch']}>
                        <input type='radio' name='radio' id='with-binding' hidden />
                        <label htmlFor='with-binding'>С привязкой</label>
                      </div>
                    </div>

                    <button
                      type='button'
                      onClick={handleToggleModal}
                      className={styles['product__form-link']}
                    >
                      В чем разница?
                    </button>
                  </>
                )}

                <h1
                  style={currentProduct.supportVersion ? {} : { marginTop: 0 }}
                  className={styles['product__form-price']}
                >
                  <p>{currentProduct.oldPrice || '1 390 ₽'}</p>

                  <div>
                    <p>{currentProduct.newPrice || '1 190 ₽'}</p>

                    <span>{currentProduct.discount || '— 10%'}</span>
                  </div>
                </h1>

                <div className={styles['product__field']}>
                  <p className={styles['product__field-title']}>
                    После оплаты код придёт на указанную почту
                  </p>
                  <input type='email' placeholder='example@mail.ru' />
                </div>

                <button className={styles['product__button']}>Купить</button>
              </form>

              <div className={styles['product__information']}>
                <div className={styles['product__information-row']}>
                  <span>Тип поставки</span>
                  <div></div>
                  <span>ESD (Электронный ключ)</span>
                </div>

                <div className={styles['product__information-row']}>
                  <span>Язык интерфейса</span>
                  <div></div>
                  <span>Русский</span>
                </div>

                <div className={styles['product__information-row']}>
                  <span>Срок действия</span>
                  <div></div>
                  <span>Бессрочно</span>
                </div>

                <div className={styles['product__information-row']}>
                  <span>Разрядность</span>
                  <div></div>
                  <span>х32 / х64</span>
                </div>

                <div className={styles['product__information-row']}>
                  <span>Дистрибутив</span>
                  <div></div>
                  <Link to={'/#'}>Скачать и Установить</Link>
                </div>

                <div className={styles['product__information-row']}>
                  <span>Инструкция</span>
                  <div></div>
                  <Link to={'/instructions'}>Читать</Link>
                </div>
              </div>
            </div>

            <div className={styles['product__cards']}>
              <div className={styles['product__card']}>
                <div className={styles['product__card-image']}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                  >
                    <rect width='25' height='25' rx='4' fill='#33C481' />
                    <circle cx='12.5' cy='12.5' r='8.5' fill='white' />
                    <path
                      d='M8 11L12.2667 15L20.5 5.5'
                      stroke='#F4524A'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <p className={styles['product__card-title']}>
                  Официальный <br />
                  поставщик
                </p>
              </div>

              <div className={styles['product__card']}>
                <div className={styles['product__card-image']}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                  >
                    <rect width='25' height='25' rx='4' fill='#28A8EA' />
                    <path
                      d='M22.8947 13.8731C22.8908 14.5903 22.8867 15.6312 22.8889 16.4696C22.8906 17.0855 22.392 17.593 21.7761 17.593H6.5427C5.63541 17.593 4.8999 16.8575 4.8999 15.9502V8.34277C4.8999 7.43547 5.63541 6.69997 6.5427 6.69997H14.7539C15.5357 6.69997 16.1695 7.33376 16.1695 8.11558C16.1695 8.37669 16.382 8.58816 16.6431 8.58739C17.0844 8.5861 17.4499 8.58494 17.7425 8.58428C18.32 8.58297 18.8472 8.84082 19.21 9.29014L21.1968 11.7508C21.2584 11.8271 21.33 11.8948 21.4096 11.952L22.2099 12.5273C22.6426 12.8385 22.8975 13.3401 22.8947 13.8731Z'
                      fill='white'
                    />
                    <path
                      d='M16.3164 11.4159L16.3164 9.85002C16.3164 9.60149 16.5178 9.40001 16.7664 9.40001H17.5128C17.7889 9.40001 18.0497 9.52676 18.2204 9.74385L19.5449 11.429C19.6841 11.6061 19.5579 11.8658 19.3326 11.8658H16.7664C16.5179 11.8658 16.3164 11.6644 16.3164 11.4159Z'
                      fill='#ED6C47'
                    />
                    <ellipse cx='8.5002' cy='17.5' rx='1.8' ry='1.8' fill='#ED6C47' />
                    <ellipse cx='17.5002' cy='17.5' rx='1.8' ry='1.8' fill='#ED6C47' />
                    <path
                      d='M2 13.6H6.68018'
                      stroke='#ED6C47'
                      strokeWidth='1.08'
                      strokeLinecap='round'
                    />
                    <path
                      d='M2.8999 11.7999H7.58008'
                      stroke='#ED6C47'
                      strokeWidth='1.08'
                      strokeLinecap='round'
                    />
                    <path
                      d='M3.7998 10H8.47998'
                      stroke='#ED6C47'
                      strokeWidth='1.08'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <p className={styles['product__card-title']}>
                  Моментальная <br />
                  доставка
                </p>
              </div>

              <div className={styles['product__card']}>
                <div className={styles['product__card-image']}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                  >
                    <rect width='25' height='25' rx='4' fill='#CA64EA' />
                    <path
                      d='M4.74235 9.70036L3.5227 17.7493C3.24764 19.5645 4.65292 21.1987 6.48884 21.1987H18.5112C20.3471 21.1987 21.7524 19.5645 21.4773 17.7493L20.2577 9.70036C20.1095 8.72266 19.2691 8 18.2802 8H6.71977C5.73091 8 4.8905 8.72266 4.74235 9.70036Z'
                      fill='white'
                    />
                    <path
                      d='M8.8501 6.2C8.8501 6.2 10.4267 3 12.2501 3C13.2869 3 14.2439 4.03459 14.8766 4.92723C15.4439 5.72747 15.6501 6.71015 15.6501 7.69105V13.5'
                      stroke='#33C481'
                      strokeWidth='1.2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <p className={styles['product__card-title']}>
                  Продаем на <br />
                  СберМегаМаркете
                </p>
              </div>

              <div className={styles['product__card']}>
                <div className={styles['product__card-image']}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                  >
                    <rect width='25' height='25' rx='4' fill='#8282DD' />
                    <path
                      d='M9.2225 20.992L13.45 18.1987H19C20.6569 18.1987 22 16.8556 22 15.1987V8C22 6.34315 20.6569 5 19 5H6C4.34315 5 3 6.34315 3 8V15.1987C3 16.8556 4.34315 18.1987 6 18.1987H7.75V20.2088C7.74993 20.3791 7.7964 20.5462 7.88447 20.6924C7.97253 20.8385 8.09888 20.9582 8.25003 21.0386C8.40119 21.119 8.57149 21.1571 8.74275 21.1489C8.91402 21.1407 9.07983 21.0865 9.2225 20.992Z'
                      fill='white'
                    />
                    <circle cx='8.7002' cy='12' r='1' fill='#F4524A' />
                    <circle cx='12.7002' cy='12' r='1' fill='#F4524A' />
                    <circle cx='16.7002' cy='12' r='1' fill='#F4524A' />
                  </svg>
                </div>
                <p className={styles['product__card-title']}>
                  Бессрочная <br />
                  поддержка
                </p>
              </div>
            </div>

            <div className={styles['product__tabs']}>
              <div className={styles['product__buttons']}>
                <button
                  className={cn(
                    styles['product__buttons-button'],
                    currentTab === 'description' && styles.active
                  )}
                  onClick={() => handleSelectTab('description')}
                >
                  Описание
                </button>
                <button
                  className={cn(
                    styles['product__buttons-button'],
                    currentTab === 'how to buy' && styles.active
                  )}
                  onClick={() => handleSelectTab('how to buy')}
                >
                  Как купить
                </button>
                <button
                  className={cn(
                    styles['product__buttons-button'],
                    currentTab === 'system requirements' && styles.active
                  )}
                  onClick={() => handleSelectTab('system requirements')}
                >
                  Системные требования
                </button>
              </div>

              <div className={styles['tabs-content']}>
                {
                  {
                    description: (
                      <p
                        className={styles['tabs-content__description']}
                        dangerouslySetInnerHTML={{
                          __html: currentProduct.description,
                        }}
                      ></p>
                    ),
                    'how to buy': (
                      <div className={styles['tabs-content__cards']}>
                        <div className={styles['tabs-content__card']}>
                          <h1 className={styles['tabs-content__card-count']}>1</h1>
                          <p className={styles['tabs-content__card-title']}>
                            Оставьте адрес электронной почты и нажмите кнопку «Купить»
                          </p>
                        </div>

                        <div className={styles['tabs-content__card']}>
                          <h1 className={styles['tabs-content__card-count']}>2</h1>
                          <p className={styles['tabs-content__card-title']}>
                            Выберите удобный способ оплаты
                          </p>
                        </div>

                        <div className={styles['tabs-content__card']}>
                          <h1 className={styles['tabs-content__card-count']}>3</h1>
                          <p className={styles['tabs-content__card-title']}>
                            После оплаты на почту придёт чек и код ключа отдельным письмом
                          </p>
                        </div>

                        <div className={styles['tabs-content__card']}>
                          <h1 className={styles['tabs-content__card-count']}>4</h1>
                          <p className={styles['tabs-content__card-title']}>
                            Введите полученный ключ в приложении дистрибутиве, который можно скачать
                            по ссылке
                          </p>
                        </div>
                      </div>
                    ),
                    'system requirements': (
                      <div className={styles['tabs-content__information']}>
                        <div className={styles['tabs-content__information-row']}>
                          <span>Процессор</span>
                          <div></div>
                          <p>1 ГГц или с 2 или более ядрами на совместимом 64-битном процессоре</p>
                        </div>

                        <div className={styles['tabs-content__information-row']}>
                          <span>ОЗУ</span>
                          <div></div>
                          <p>4 гигабайта (ГБ) или больше</p>
                        </div>

                        <div className={styles['tabs-content__information-row']}>
                          <span>Свободное место на жёстком диске</span>
                          <div></div>
                          <p>требуется доступное хранилище объёмом 64 ГБ* или более</p>
                        </div>

                        <div className={styles['tabs-content__information-row']}>
                          <span>Графический процессор</span>
                          <div></div>
                          <p>
                            совместимость с DirectX 12 или более поздней версией и драйвер WDDM 2.0
                          </p>
                        </div>
                      </div>
                    ),
                  }[currentTab]
                }
              </div>
            </div>
          </div>

          {isOpenModal && (
            <div className={styles['modal']}>
              <div onClick={handleToggleModal} className={styles['modal__bg']}></div>

              <div className={styles['modal__wrapper']}>
                <div className={styles['modal__content']}>
                  <button onClick={handleToggleModal} className={styles['modal__close-btn']}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                    >
                      <path
                        d='M28.6777 12.7804L26.8973 11L19.8388 18.0584L12.7804 11L11 12.7804L18.0584 19.8388L11 26.8973L12.7804 28.6777L19.8388 21.6192L26.8973 28.6777L28.6777 26.8973L21.6192 19.8388L28.6777 12.7804Z'
                        fill='#8282DD'
                      />
                    </svg>
                  </button>

                  <div>
                    <h1 className={styles['modal__content-title']}>Без привязки</h1>
                    <p className={styles['modal__content-description']}>
                      Тип ключа, при котором можно будет использовать только один раз. Активация
                      бессрочная, однако после переустановки операционной системы (Windows или
                      MacOS) или при покупке нового оборудования ключ будет недоступен.
                    </p>
                  </div>
                  <div>
                    <h1 className={styles['modal__content-title']}>С привязкой</h1>
                    <p className={styles['modal__content-description']}>
                      При покупки такого программного обеспечения ключ будет привязан к вашему
                      аккаунту Майкрософт. <br />
                      <br />
                      Это значит, что программу Office можно будет использовать и после
                      переустановки Windows или MacOS — надо лишь авторизоваться в своем аккаунте и
                      ключ автоматически активируется.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={styles['answers']}>
            <h1 className={styles['answers__title']}>Ответы на вопросы</h1>
            <p className={styles['answers__subtitle']}>
              Собрали в одном месте ответы на часто задаваемые <br />
              вопросы покупателей
            </p>

            <Collapse questions={currentProduct.questionAnswer} />
          </div>

          <Rates />

          <div className={styles['best-offers']}>
            <h1 className={styles['best-offers__title']}>Лучшие предложения</h1>

            <div className={styles['best-offers__cards']}>
              {currentProduct.recommendations?.map((recommendationProduct, key) => (
                <Link
                  to={'/catalog/' + recommendationProduct.id}
                  key={key}
                  className={styles['best-offers__card']}
                >
                  <div className={styles['best-offers__card-image']}>
                    <img src={recommendationProduct.image} alt='' />
                  </div>

                  <h1 className={styles['best-offers__card-title']}>
                    {recommendationProduct.title}
                  </h1>
                  <p className={styles['best-offers__card-description']}>
                    {recommendationProduct.subtitle}
                  </p>

                  <p className={styles['best-offers__card-price']}>1 890 ₽</p>

                  <button type='button' className={styles['best-offers__card-button']}>
                    Подробнее
                  </button>
                </Link>
              ))}
            </div>

            <Link to={'/catalog'} className={styles['best-offers__link']}>
              Посмотреть все →
            </Link>
          </div>

          <Help />
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
