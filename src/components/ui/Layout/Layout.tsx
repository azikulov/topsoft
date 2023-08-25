import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Layout.module.scss';
// import { useSelector } from '@/hooks/useSelector';
import { useActions } from '@/hooks/useActions';
// import { getProducts } from '@/api';
import { LayoutModal } from './LayoutModal';
import { localProducts as products } from '@/data/localProducts';

export function Layout({ children, hidden }: { children: React.ReactNode; hidden?: boolean }) {
  const { saveProducts } = useActions();
  // const products = useSelector((state) => state.products);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    // if (!products.length)
    //   if (products)
    // getProducts().then((products) => {
    saveProducts(products);
    // });
    // }, [saveProducts, products.length]);
  }, [saveProducts]);

  return hidden ? (
    <>{children}</>
  ) : (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles['header__wrapper']}>
          <div className={styles['header__logo']}>
            <Link to='/'>Topsoft</Link>
          </div>

          <nav className={styles['header__nav']}>
            <Link to={'/catalog'}>Каталог</Link>
            <Link to={'/about-company'}>О компании</Link>
            <Link to={'/rates'}>Отзывы</Link>
            <Link to={'/answers'}>Ответы на вопросы</Link>
          </nav>

          <div className={styles['header__feedback']}>
            <Link className={styles['header__feedback-phone']} to='tel:+7 999 999-99-99'>
              +7 999 999-99-99
            </Link>

            <div className={styles['header__feedback-right']}>
              <Link className={styles['header__feedback-social']} to='https://wa.me/'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <rect
                    x='0.5'
                    y='0.5'
                    width='39'
                    height='39'
                    rx='5.56061'
                    fill='#E3E4FF'
                    stroke='#E3E4FF'
                  />
                  <path
                    d='M20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30C18.2328 30.0028 16.4967 29.5352 14.97 28.645L10.004 30L11.356 25.032C10.4651 23.5049 9.99706 21.768 10 20C10 14.477 14.477 10 20 10ZM16.592 15.3L16.392 15.308C16.2625 15.3159 16.136 15.3499 16.02 15.408C15.9115 15.4694 15.8125 15.5462 15.726 15.636C15.606 15.749 15.538 15.847 15.465 15.942C15.0951 16.4229 14.896 17.0133 14.899 17.62C14.901 18.11 15.029 18.587 15.229 19.033C15.638 19.935 16.311 20.89 17.199 21.775C17.413 21.988 17.623 22.202 17.849 22.401C18.9524 23.3725 20.2673 24.073 21.689 24.447L22.257 24.534C22.442 24.544 22.627 24.53 22.813 24.521C23.1042 24.506 23.3886 24.4271 23.646 24.29C23.777 24.2225 23.9048 24.1491 24.029 24.07C24.029 24.07 24.072 24.042 24.154 23.98C24.289 23.88 24.372 23.809 24.484 23.692C24.567 23.606 24.639 23.505 24.694 23.39C24.772 23.227 24.85 22.916 24.882 22.657C24.906 22.459 24.899 22.351 24.896 22.284C24.892 22.177 24.803 22.066 24.706 22.019L24.124 21.758C24.124 21.758 23.254 21.379 22.722 21.137C22.6663 21.1127 22.6067 21.0988 22.546 21.096C22.4776 21.089 22.4085 21.0967 22.3433 21.1186C22.2781 21.1405 22.2183 21.1761 22.168 21.223C22.163 21.221 22.096 21.278 21.373 22.154C21.3315 22.2098 21.2743 22.2519 21.2088 22.275C21.1433 22.2982 21.0723 22.3013 21.005 22.284C20.9399 22.2665 20.876 22.2445 20.814 22.218C20.69 22.166 20.647 22.146 20.562 22.11C19.9881 21.8595 19.4567 21.5211 18.987 21.107C18.861 20.997 18.744 20.877 18.624 20.761C18.2306 20.3842 17.8877 19.958 17.604 19.493L17.545 19.398C17.5026 19.3342 17.4684 19.2653 17.443 19.193C17.405 19.046 17.504 18.928 17.504 18.928C17.504 18.928 17.747 18.662 17.86 18.518C17.97 18.378 18.063 18.242 18.123 18.145C18.241 17.955 18.278 17.76 18.216 17.609C17.936 16.925 17.646 16.244 17.348 15.568C17.289 15.434 17.114 15.338 16.955 15.319C16.901 15.313 16.847 15.307 16.793 15.303C16.6587 15.2963 16.5241 15.2977 16.39 15.307L16.591 15.299L16.592 15.3Z'
                    fill='#8282DD'
                  />
                </svg>
              </Link>
              <Link className={styles['header__feedback-social']} to='https://t.me/'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <rect
                    x='0.5'
                    y='0.5'
                    width='39'
                    height='39'
                    rx='5.56061'
                    fill='#E3E4FF'
                    stroke='#E3E4FF'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M27.9283 11.5459C28.1742 11.442 28.4434 11.4062 28.7078 11.4421C28.9722 11.4781 29.2221 11.5845 29.4316 11.7502C29.6411 11.916 29.8025 12.1351 29.899 12.3846C29.9955 12.6342 30.0235 12.9052 29.9802 13.1693L27.7234 26.9046C27.5044 28.2295 26.0556 28.9893 24.8446 28.3293C23.8316 27.7772 22.327 26.9265 20.9737 26.0389C20.297 25.5946 18.2243 24.1719 18.479 23.1595C18.6979 22.2939 22.1807 19.041 24.1709 17.1071C24.952 16.3473 24.5958 15.909 23.6734 16.6079C21.3817 18.3431 17.7048 20.9819 16.4888 21.7248C15.4161 22.3797 14.8569 22.4916 14.1882 22.3797C12.9682 22.1761 11.8368 21.8606 10.9134 21.4762C9.66554 20.957 9.72624 19.2357 10.9124 18.7345L27.9283 11.5459Z'
                    fill='#8282DD'
                  />
                </svg>
              </Link>

              <button
                className={styles['header__feedback-button']}
                onClick={() => setIsModalOpen((prevState) => !prevState)}
              >
                Заказать звонок
              </button>
            </div>
          </div>

          <button onClick={handleToggleMenu} className={styles['header__button']}>
            {isMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M17.6777 1.78039L15.8973 0L8.83883 7.05844L1.78039 0L0 1.78039L7.05844 8.83883L0 15.8973L1.78039 17.6777L8.83883 10.6192L15.8973 17.6777L17.6777 15.8973L10.6192 8.83883L17.6777 1.78039Z'
                  fill='#8282DD'
                />
              </svg>
            ) : (
              <svg
                width='22'
                height='15'
                viewBox='0 0 22 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 15V12.5H22V15H0ZM0 8.75V6.25H22V8.75H0ZM0 2.5V0H22V2.5H0Z'
                  fill='#8282DD'
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles['header-menu']}>
            <nav className={styles['header-menu__nav']}>
              <Link to={'/catalog'}>Каталог</Link>
              <Link to={'/about-company'}>О компании</Link>
              <Link to={'/rates'}>Отзывы</Link>
              <Link to={'/answers'}>Ответы на вопросы</Link>
            </nav>

            <div className={styles['header-menu__footer']}>
              <div className={styles['header-menu__footer-social']}>
                <Link to='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                  >
                    <rect
                      x='0.5'
                      y='0.5'
                      width='39'
                      height='39'
                      rx='5.56061'
                      fill='#E3E4FF'
                      stroke='#CFCFFF'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M27.9283 11.5459C28.1742 11.442 28.4434 11.4062 28.7078 11.4421C28.9722 11.4781 29.2221 11.5845 29.4316 11.7502C29.6411 11.916 29.8025 12.1351 29.899 12.3846C29.9955 12.6342 30.0235 12.9052 29.9802 13.1693L27.7234 26.9046C27.5044 28.2295 26.0556 28.9893 24.8446 28.3293C23.8316 27.7772 22.327 26.9265 20.9737 26.0389C20.297 25.5946 18.2243 24.1719 18.479 23.1595C18.6979 22.2939 22.1807 19.041 24.1709 17.1071C24.952 16.3473 24.5958 15.909 23.6734 16.6079C21.3817 18.3431 17.7048 20.9819 16.4888 21.7248C15.4161 22.3797 14.8569 22.4916 14.1882 22.3797C12.9682 22.1761 11.8368 21.8606 10.9134 21.4762C9.66554 20.957 9.72624 19.2357 10.9124 18.7345L27.9283 11.5459Z'
                      fill='#8282DD'
                    />
                  </svg>
                </Link>

                <Link to='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                  >
                    <rect
                      x='0.5'
                      y='0.5'
                      width='39'
                      height='39'
                      rx='5.56061'
                      fill='#E3E4FF'
                      stroke='#CFCFFF'
                    />
                    <path
                      d='M20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30C18.2328 30.0028 16.4967 29.5352 14.97 28.645L10.004 30L11.356 25.032C10.4651 23.5049 9.99706 21.768 10 20C10 14.477 14.477 10 20 10ZM16.592 15.3L16.392 15.308C16.2625 15.3159 16.136 15.3499 16.02 15.408C15.9115 15.4694 15.8125 15.5462 15.726 15.636C15.606 15.749 15.538 15.847 15.465 15.942C15.0951 16.4229 14.896 17.0133 14.899 17.62C14.901 18.11 15.029 18.587 15.229 19.033C15.638 19.935 16.311 20.89 17.199 21.775C17.413 21.988 17.623 22.202 17.849 22.401C18.9524 23.3725 20.2673 24.073 21.689 24.447L22.257 24.534C22.442 24.544 22.627 24.53 22.813 24.521C23.1042 24.506 23.3886 24.4271 23.646 24.29C23.777 24.2225 23.9048 24.1491 24.029 24.07C24.029 24.07 24.072 24.042 24.154 23.98C24.289 23.88 24.372 23.809 24.484 23.692C24.567 23.606 24.639 23.505 24.694 23.39C24.772 23.227 24.85 22.916 24.882 22.657C24.906 22.459 24.899 22.351 24.896 22.284C24.892 22.177 24.803 22.066 24.706 22.019L24.124 21.758C24.124 21.758 23.254 21.379 22.722 21.137C22.6663 21.1127 22.6067 21.0988 22.546 21.096C22.4776 21.089 22.4085 21.0967 22.3433 21.1186C22.2781 21.1405 22.2183 21.1761 22.168 21.223C22.163 21.221 22.096 21.278 21.373 22.154C21.3315 22.2098 21.2743 22.2519 21.2088 22.275C21.1433 22.2982 21.0723 22.3013 21.005 22.284C20.9399 22.2665 20.876 22.2445 20.814 22.218C20.69 22.166 20.647 22.146 20.562 22.11C19.9881 21.8595 19.4567 21.5211 18.987 21.107C18.861 20.997 18.744 20.877 18.624 20.761C18.2306 20.3842 17.8877 19.958 17.604 19.493L17.545 19.398C17.5026 19.3342 17.4684 19.2653 17.443 19.193C17.405 19.046 17.504 18.928 17.504 18.928C17.504 18.928 17.747 18.662 17.86 18.518C17.97 18.378 18.063 18.242 18.123 18.145C18.241 17.955 18.278 17.76 18.216 17.609C17.936 16.925 17.646 16.244 17.348 15.568C17.289 15.434 17.114 15.338 16.955 15.319C16.901 15.313 16.847 15.307 16.793 15.303C16.6587 15.2963 16.5241 15.2977 16.39 15.307L16.591 15.299L16.592 15.3Z'
                      fill='#8282DD'
                    />
                  </svg>
                </Link>
              </div>

              <div className={styles['header-menu__footer-phone']}>
                <Link to='tel:+7 (800) 101-08-76'>+7 (800) 101-08-76</Link>
              </div>

              <p className={styles['header-menu__footer-copyright']}>© TopSoft, 2023</p>
            </div>
          </div>
        )}
      </header>

      <LayoutModal
        hidden={!isModalOpen}
        onClose={() => setIsModalOpen((prevState) => !prevState)}
      />

      <main className={styles.main}>
        {children}

        <footer className={styles.footer}>
          <div className={styles['footer__wrapper']}>
            <div className={styles['footer__left']}>
              <div>
                <div className={styles['footer__logo']}>
                  <Link to='/'>Topsoft</Link>
                </div>

                <p className={styles['footer__copyright']}>© TopSoft, 2023</p>
              </div>

              <div className={styles['footer__links']}>
                <Link className={styles['footer__links-link']} to='/'>
                  Политика конфиденциальности
                </Link>

                <Link className={styles['footer__links-link']} to='/'>
                  Публичная оферта
                </Link>
              </div>
            </div>

            <div className={styles['footer__right']}>
              <div className={styles['footer__col']}>
                <p className={styles['footer__col-title']}>Каталог</p>

                <Link to='/catalog?nav=microsoft-windows' className={styles['footer__col-link']}>
                  Microsoft Windows
                </Link>
                <Link to='/catalog?nav=microsoft-office-365' className={styles['footer__col-link']}>
                  Microsoft Office 365
                </Link>
                <Link to='/catalog?nav=office-for-windows' className={styles['footer__col-link']}>
                  Office для Windows
                </Link>
                <Link to='/catalog?nav=office-for-macos' className={styles['footer__col-link']}>
                  Office для MacOS
                </Link>
              </div>

              <div className={styles['footer__col']}>
                <p className={styles['footer__col-title']}>О компании</p>

                <Link to='/about-company' className={styles['footer__col-link']}>
                  О магазине
                </Link>

                <Link to='/rates' className={styles['footer__col-link']}>
                  Отзывы
                </Link>

                <Link to='/about-company?scroll-to=help' className={styles['footer__col-link']}>
                  Помощь и поддержка
                </Link>
              </div>

              <div className={styles['footer__col']}>
                <p className={styles['footer__col-title']}>Информация</p>

                <Link
                  to='/about-company?scroll-to=payment-and-delivery'
                  className={styles['footer__col-link']}
                >
                  Оплата и доставка
                </Link>
                <Link to='/answers' className={styles['footer__col-link']}>
                  Ответы на вопросы
                </Link>
                <Link to='/exchange' className={styles['footer__col-link']}>
                  Обмен и возврат
                </Link>
                <Link to='/instructions' className={styles['footer__col-link']}>
                  Инструкции
                </Link>
              </div>

              <div className={styles['footer__col']}>
                <p className={styles['footer__col-title']}>Контакты</p>

                <Link to='tel:+7 999 999-99-99' className={styles['footer__col-link']}>
                  +7 999 999-99-99
                </Link>
                <Link to='mailto:admin@topsoft.pro' className={styles['footer__col-link']}>
                  admin@topsoft.pro
                </Link>

                <div className={styles['footer__col-social']}>
                  <Link to='/'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='39'
                        height='39'
                        rx='5.56061'
                        fill='#E3E4FF'
                        stroke='#CFCFFF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M27.9283 11.546C28.1742 11.4421 28.4434 11.4063 28.7078 11.4423C28.9722 11.4782 29.2221 11.5846 29.4316 11.7504C29.6411 11.9161 29.8025 12.1352 29.899 12.3847C29.9955 12.6343 30.0235 12.9053 29.9802 13.1694L27.7234 26.9047C27.5044 28.2296 26.0556 28.9894 24.8446 28.3294C23.8316 27.7773 22.327 26.9267 20.9737 26.0391C20.297 25.5948 18.2243 24.172 18.479 23.1596C18.6979 22.294 22.1807 19.0411 24.1709 17.1072C24.952 16.3474 24.5958 15.9091 23.6734 16.608C21.3817 18.3432 17.7048 20.9821 16.4888 21.7249C15.4161 22.3799 14.8569 22.4917 14.1882 22.3799C12.9682 22.1762 11.8368 21.8607 10.9134 21.4763C9.66554 20.9571 9.72624 19.2358 10.9124 18.7346L27.9283 11.546Z'
                        fill='#8282DD'
                      />
                    </svg>
                  </Link>

                  <Link to='/'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='39'
                        height='39'
                        rx='5.56061'
                        fill='#E3E4FF'
                        stroke='#CFCFFF'
                      />
                      <path
                        d='M20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30C18.2328 30.0028 16.4967 29.5352 14.97 28.645L10.004 30L11.356 25.032C10.4651 23.5049 9.99706 21.768 10 20C10 14.477 14.477 10 20 10ZM16.592 15.3L16.392 15.308C16.2625 15.3159 16.136 15.3499 16.02 15.408C15.9115 15.4694 15.8125 15.5462 15.726 15.636C15.606 15.749 15.538 15.847 15.465 15.942C15.0951 16.4229 14.896 17.0133 14.899 17.62C14.901 18.11 15.029 18.587 15.229 19.033C15.638 19.935 16.311 20.89 17.199 21.775C17.413 21.988 17.623 22.202 17.849 22.401C18.9524 23.3725 20.2673 24.073 21.689 24.447L22.257 24.534C22.442 24.544 22.627 24.53 22.813 24.521C23.1042 24.506 23.3886 24.4271 23.646 24.29C23.777 24.2225 23.9048 24.1491 24.029 24.07C24.029 24.07 24.072 24.042 24.154 23.98C24.289 23.88 24.372 23.809 24.484 23.692C24.567 23.606 24.639 23.505 24.694 23.39C24.772 23.227 24.85 22.916 24.882 22.657C24.906 22.459 24.899 22.351 24.896 22.284C24.892 22.177 24.803 22.066 24.706 22.019L24.124 21.758C24.124 21.758 23.254 21.379 22.722 21.137C22.6663 21.1127 22.6067 21.0988 22.546 21.096C22.4776 21.089 22.4085 21.0967 22.3433 21.1186C22.2781 21.1405 22.2183 21.1761 22.168 21.223C22.163 21.221 22.096 21.278 21.373 22.154C21.3315 22.2098 21.2743 22.2519 21.2088 22.275C21.1433 22.2982 21.0723 22.3013 21.005 22.284C20.9399 22.2665 20.876 22.2445 20.814 22.218C20.69 22.166 20.647 22.146 20.562 22.11C19.9881 21.8595 19.4567 21.5211 18.987 21.107C18.861 20.997 18.744 20.877 18.624 20.761C18.2306 20.3842 17.8877 19.958 17.604 19.493L17.545 19.398C17.5026 19.3342 17.4684 19.2653 17.443 19.193C17.405 19.046 17.504 18.928 17.504 18.928C17.504 18.928 17.747 18.662 17.86 18.518C17.97 18.378 18.063 18.242 18.123 18.145C18.241 17.955 18.278 17.76 18.216 17.609C17.936 16.925 17.646 16.244 17.348 15.568C17.289 15.434 17.114 15.338 16.955 15.319C16.901 15.313 16.847 15.307 16.793 15.303C16.6587 15.2963 16.5241 15.2977 16.39 15.307L16.591 15.299L16.592 15.3Z'
                        fill='#8282DD'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
