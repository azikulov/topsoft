import styles from './Help.module.scss';

export function Help() {
  return (
    <div className={styles['help']}>
      <div id='help' className={styles['help__wrapper']}>
        <div className={styles['help__content']}>
          <h1 className={styles['help__title']}>
            Возникли трудности с покупкой или установкой ключа?
          </h1>

          <p className={styles['help__description']}>
            Напишите свой вопрос в чат — наши специалисты ответят <br />
            на любые ваши вопросы и помогут решить проблему
          </p>

          <button className={styles['help__button']}>Написать в поддержку</button>
        </div>

        <div className={styles['help__image']}>
          <img src={'/assets/images/about-company/composition-1.webp'} alt='' />
        </div>
      </div>
    </div>
  );
}
