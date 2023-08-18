'use client';

import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';

import { Loading } from '@/components/shared/Loading';
import { Layout } from '@/components/ui/Layout';
import { useProductsStore } from '@/store';
import styles from './page.module.scss';
import type { Product } from '@/types';

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const { products } = useProductsStore();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [isLoadedWindow, setIsLoadedWindow] = useState<boolean>(false);

  useEffect(() => {
    function filterProducts() {
      if (!products.length) return;

      if (searchParams.get('nav') === 'microsoft-office-365') {
        setFilteredProducts(products.filter((item) => item.title.includes('Office 365')));
        return setIsLoadedWindow(true);
      }

      if (searchParams.get('nav') === 'microsoft-windows') {
        setFilteredProducts(
          products.filter((item) => item.category.trim().includes('Microsoft Windows'))
        );
        return setIsLoadedWindow(true);
      }

      if (searchParams.get('nav') === 'office-for-macos') {
        setFilteredProducts(
          products.filter(
            (item) =>
              item.category.split(', ')[0].trim().includes('Office для MacOS') ||
              item.category.split(', ')[1]?.trim().includes('Office для MacOS')
          )
        );
        return setIsLoadedWindow(true);
      }

      if (searchParams.get('nav') === 'office-for-windows') {
        setFilteredProducts(
          products.filter(
            (item) =>
              item.category.split(', ')[0].trim().includes('Office для Windows') ||
              item.category.split(', ')[1]?.trim().includes('Office для Windows')
          )
        );
        return setIsLoadedWindow(true);
      }

      setFilteredProducts(products);
      return setIsLoadedWindow(true);
    }

    filterProducts();
  }, [searchParams, products]);

  return (
    <Layout>
      {isLoadedWindow && filteredProducts ? (
        <div className={styles['main']}>
          <div className={styles['sidebar']}>
            <p className={styles['sidebar__breadcrumb']}>
              <Link to='/'>Главная →</Link> Каталог
            </p>

            <nav className={styles['sidebar__nav']}>
              <Link
                className={cn(
                  styles['sidebar__nav-link'],
                  !searchParams.get('nav') && styles['active']
                )}
                to='/catalog'
              >
                Все товары
              </Link>

              <Link
                className={cn(
                  styles['sidebar__nav-link'],
                  searchParams.get('nav') === 'microsoft-office-365' && styles['active']
                )}
                to='/catalog?nav=microsoft-office-365'
              >
                Office 365
              </Link>

              <Link
                className={cn(
                  styles['sidebar__nav-link'],
                  searchParams.get('nav') === 'microsoft-windows' && styles['active']
                )}
                to='/catalog?nav=microsoft-windows'
              >
                Microsoft Windows
              </Link>

              <Link
                className={cn(
                  styles['sidebar__nav-link'],
                  searchParams.get('nav') === 'office-for-macos' && styles['active']
                )}
                to='/catalog?nav=office-for-macos'
              >
                Office для MacOS
              </Link>

              <Link
                className={cn(
                  styles['sidebar__nav-link'],
                  searchParams.get('nav') === 'office-for-windows' && styles['active']
                )}
                to='/catalog?nav=office-for-windows'
              >
                Office для Windows
              </Link>
            </nav>
          </div>

          <div className={styles['content']}>
            <div className={styles['content__cards']}>
              {filteredProducts.map((product, key) => (
                <Link key={key} to={'/catalog/' + product.id} className={styles['content__card']}>
                  <div className={styles['content__card-image']}>
                    <img src={product.image} loading='lazy' alt='' />
                  </div>

                  <h1 className={styles['content__card-price']}>{product.newPrice}</h1>
                  <p className={styles['content__card-title']}>{product.title}</p>

                  <p className={styles['content__card-link']}>Подробнее</p>
                </Link>
              ))}
            </div>

            {searchParams.get('nav') === 'microsoft-windows' ? (
              <p className={styles['content__description']}>
                При установке операционной системы на свой компьютер, особое значение имеет
                приобретение лицензионной OS Windows. Это позволяет обеспечить стабильную работу ПК
                и надежную защиту от вирусов, а также предотвратить утечку или потерю важной
                информации. Если вы хотите приобрести и активировать лицензию, следуйте простым
                шагам ниже:
                <br />
                <br />
                Выберите подходящий вариант для вашего компьютера. <br />
                Оформите покупку, произведите оплату. После этого мы моментально доставим Ваш ключ
                активации на почту. <br />
                Откройте меню «Пуск» на вашем компьютере, затем перейдите в раздел «Параметры».{' '}
                <br />В «Параметрах» найдите раздел «Обновление и безопасность» и выберите вкладку
                «Активация». <br />
                Нажмите на кнопку «Изменить ключ продукта», чтобы продолжить процесс активации.{' '}
                <br />
                Введите новый ключ, который вы получили после покупки лицензии, и следуйте
                инструкциям на экране для завершения активации. <br />
                После выполнения этих простых шагов ваш ПК будет готов к использованию с
                лицензионным программным обеспечением Windows. Отныне вы сможете наслаждаться
                безопасной и надежной работой вашего компьютера, осознавая, что ваши данные защищены
                и выполнение задач будет точным и эффективным.
              </p>
            ) : searchParams.get('nav') === 'microsoft-office-365' ? (
              <p className={styles['content__description']}>
                Office 365 – современное решение для офисных задач, привлекшее внимание
                пользователями по всему миру. Основное отличие этого пакета – возможность работы в
                облаке и гибкая система оплаты подписки. Этот набор программ подходит для любой
                компании, а для того, чтобы воспользоваться всеми преимуществами, необходим ключ
                активации microsoft office 365. <br /> <br />
                Преимущества пакета Microsoft Office 365 <br />
                Программы, входящие в состав Microsoft Office 365 хорошо знакомы пользователям своим
                удобством и функционалом. <br /> <br />
                В состав Microsoft Office 365 входят следующие программы: <br /> <br />
                Web Apps для работы с документами в облачном хранилище <br />
                Word для работы с документами <br />
                Excel для профессиональной работы с таблицами <br />
                PowerPoint для создания презентаций <br />
                Exchange Online – почтовый клиент с уникальной защитой от спама и вредоносного ПО, а
                также с удобным органайзером <br />
                SharePoint Online – многофункциональный инструмент для создания и поддержки
                корпоративного сайта <br />
                Lync Online – корпоративный мессенджер для обмена сообщениями, голосовыми и
                видеозвонками с высоким уровнем защиты <br />
                SkyDrive – решение для обмена данными внутри компании. <br />
                <br />
                Облачное решение Microsoft Office 365 обеспечивает стабильную работу и позволяет
                работать за пределами офиса. Разработчики Microsoft уделяют большое внимание защите
                данных, поэтому работая с этим пакетом, можно быть уверенным, что важная
                корпоративная информация хранится в надежном месте.
                <br />
                <br />
                Купить ключ активации Office 365 в интернет-магазине Topsoft <br />
                Если вам требуется быстро приобрести ключ активации Office 365 для персонального
                компьютера, интернет-магазин Topsoft предлагает удобное решение. Отличительные черты
                магазина Topsoft – моментальная доставка лицензионных ключей, гарантия качества и
                доступные цены.
              </p>
            ) : searchParams.get('nav') === 'office-for-macos' ? (
              <p className={styles['content__description']}>
                На нашем сайте вы можете приобрести ключ активации Office для своего устройства Mac,
                который позволит вам полноценно использовать офисный пакет Microsoft Office. Наши
                ключи активации являются оригинальными и гарантируют полноценную работу программного
                обеспечения без каких-либо ограничений. Вы сможете использовать все функции и
                возможности Microsoft Office для создания документов, таблиц, презентаций и многое
                другое.
                <br />
                <br />
                Мы обеспечиваем наших клиентов только качественными и надежными продуктами.
                <br />
                <br />
                Покупая ключ активации в нашем интернет-магазине, вы получаете не только
                качественный продукт, но и моментальную доставку. Мы стремимся обеспечить наших
                клиентов высоким уровнем сервиса, поэтому всегда готовы ответить на ваши вопросы и
                предложить помощь в выборе оптимальной версии Microsoft Office для ваших
                потребностей.
                <br />
                <br />
                Не откладывайте покупку ключа активации Microsoft Office для macOS на потом и
                обновите свое рабочее пространство с помощью лучшего офисного пакета для Mac уже
                сегодня.
              </p>
            ) : searchParams.get('nav') === 'office-for-windows' ? (
              <p className={styles['content__description']}>
                Microsoft Office - самый востребованный пакет офисных программ, разработанный
                компанией Майкрософт. Он включает в себя необходимые приложения, которые необходимы
                для работы с текстами, планирования, расчетов и создания презентаций. В состав
                пакета входят программы Word, Excel, PowerPoint и другие.
                <br />
                <br />
                Если вы хотите приобрести и активировать лицензию на полноценную работу с Microsoft
                Office, то вам необходимо приобрести пакет ПО с лицензионным ключом для активации. В
                нашем интернет-магазине представлен полный спектр программного обеспечения Microsoft
                Office. Покупка оформляется онлайн, после оплаты вы получаете ключ для активации.
                Дальше вам нужно выполнить следующие шаги:
                <br />
                <br />
                Скачайте соответствующий пакет Microsoft Office с нашего сайта <br />
                Установите пакет на ваш компьютер <br />
                Запустите любое приложение из пакета
                <br />
                В появившемся окне введите ключ активации, который вы получили после оплаты.
                <br />
                Следуя этой инструкции, вы сможете успешно активировать вашу лицензию Microsoft
                Office и начать полноценную работу с приложениями этого пакета. Необходимый пакет
                Microsoft Office с лицензионным ключом для активации доступен для приобретения в
                нашем каталоге.
              </p>
            ) : (
              <p className={styles['content__description']}>
                Если вы ищете надежный и удобный способ приобрести ключи активации Microsoft Office
                и Microsoft Windows, вы попали по адресу! Наш интернет-магазин предлагает широкий
                ассортимент лицензионных ключей, чтобы удовлетворить все ваши потребности в
                использовании этих популярных программ. <br />
                <br />
                Мы являемся официальным партнером Microsoft, поэтому наша продукция полностью
                легальна и гарантирует вам безопасность и надежность. Вы сможете быстро и легко
                активировать свой продукт, получив ключ, который будет работать ограничений. <br />
                <br />
                Вы сможете выбрать соответствующую версию Microsoft Office или Microsoft Windows и
                приобрести ключ всего за несколько простых шагов. Мы предлагаем конкурентоспособные
                цены и гарантируем мгновенную доставку ключа на вашу электронную почту.
                <br />
                <br />
                Инвестируйте в свое производительное и безопасное рабочее пространство уже сегодня!
              </p>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
