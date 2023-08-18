import { Link } from 'react-router-dom';

import { Layout } from '@/components/ui/Layout';
import { Help } from '@/components/shared/Help';
import styles from './page.module.scss';

export default function Exchange() {
  return (
    <Layout>
      <div className={styles['breadcrumb']}>
        <p className={styles['breadcrumb__navigation']}>
          <Link to='/'>Главная →</Link> Обмен и возврат
        </p>
      </div>

      <div className={styles['exchange-and-refund']}>
        <h1 className={styles['exchange-and-refund__title']}>Обмен и возврат</h1>

        <div className={styles['exchange-and-refund__cards']}>
          <div className={styles['exchange-and-refund__card']}>
            <h1 className={styles['exchange-and-refund__card-title']}>Правила</h1>

            <p className={styles['exchange-and-refund__card-description']}>
              В соответствии с российским законодательством покупатель имеет право вернуть любой
              товар в течение 14 календарных дней без объяснения причин. Однако этот принцип
              распространяется только на физические товары. <br />
              <br />В соответствии с Постановлением Правительства РФ «Об утверждении Правил продажи
              товаров дистанционным способом», цифровые лицензии, включая электронные ключи для
              программного обеспечения, не подлежат возврату или обмену. Это связано с тем, что
              такой товар имеет индивидуально-определённые свойства и может быть использован
              исключительно покупателем.
            </p>
          </div>

          <div className={styles['exchange-and-refund__card']}>
            <h1 className={styles['exchange-and-refund__card-title']}>Помощь и поддержка</h1>

            <p className={styles['exchange-and-refund__card-description']}>
              При оформлении заказа мы настоятельно рекомендуем проявлять максимальную
              внимательность. Если вы испытываете сомнения в выборе продукта, не стесняйтесь
              обращаться к нашей службе поддержки. Мы с удовольствием поможем вам выбрать подходящий
              продукт. <br />
              <br />
              Если у вас возникли проблемы или вопросы, вы всегда можете обратиться к нашим
              специалистам. Они предоставят вам бесплатную консультацию и помогут быстро разрешить
              любую проблему. Для более эффективного решения проблемы, пожалуйста, подготовьте
              скриншоты экрана, отображающие ошибку программного обеспечения или системы.
            </p>
          </div>
        </div>
      </div>

      <Help />

      <div className={styles['address']}>
        <h1 className={styles['address__title']}>Физические адрес</h1>

        <div className={styles['address__wrapper']}>
          <div className={styles['address__content']}>
            <div className={styles['address__info']}>
              <h2 className={styles['address__info-title']}>Адрес компании</h2>
              <p className={styles['address__info-content']}>г. Москва, ул ....</p>
            </div>

            <div className={styles['address__info']}>
              <h2 className={styles['address__info-title']}>Режим работы офиса</h2>
              <p className={styles['address__info-content']}>Пн-Пт, 9:00 - 18:00</p>
            </div>

            <div className={styles['address__info']}>
              <h2 className={styles['address__info-title']}>Примечание</h2>
              <p className={styles['address__info-content']}>
                Доступ в БЦ по пропускам, заранее уточняйте время визита по телефону
              </p>
            </div>

            <div className={styles['address__bottom']}>
              <p>ИНН 78634857372</p>
              <p>ОГРНИП 23489823487892</p>
            </div>
          </div>

          <div className={styles['address__map']}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.1261140528136!2d37.40900469475532!3d55.7332634064457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ee71e5395d9%3A0xfbea3ea829e60c22!2z0JLQvtC10L3QvdGL0Lkg0LrQvtC80LjRgdGB0LDRgNC40LDRgiDQmtGD0L3RhtC10LLRgdC60L7Qs9C-INGA0LDQudC-0L3QsCDQl9Cw0L_QsNC00L3QvtCz0L4g0LDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdC-0LPQviDQvtC60YDRg9Cz0LAg0LPQvtGA0L7QtNCwINCc0L7RgdC60LLRiw!5e0!3m2!1sru!2skz!4v1691490076076!5m2!1sru!2skz'
              width='600'
              height='450'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
