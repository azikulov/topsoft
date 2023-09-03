import { useCackleWidget } from '@/hooks/useCackleWidget';
import styles from './Rates.module.scss';

export function Rates() {
  useCackleWidget();

  return (
    <div className={styles['rates']}>
      <h1 id='rates' className={styles['rates__title']}>
        Отзывы
      </h1>

      <div className={styles['rates__content']}>
        <p className={styles['rates__content-title']}>С других сервисов</p>

        <div className={styles['rates__content-buttons']}>
          <button type='button' className={styles['rates__content-button']}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
            >
              <g clipPath='url(#clip0_1100_2240)'>
                <mask
                  id='mask0_1100_2240'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='20'
                  height='21'
                >
                  <path d='M20 0.5H0V20.5H20V0.5Z' fill='white' />
                </mask>
                <g mask='url(#mask0_1100_2240)'>
                  <path
                    d='M19.9485 8.14341H12.3309L9.97794 0.5L7.61765 8.14341L0 8.13566L6.16912 12.8643L3.80882 20.5L9.97794 15.7791L16.1397 20.5L13.7868 12.8643L19.9485 8.14341Z'
                    fill='#00B67A'
                  />
                  <path
                    d='M14.3163 14.5929L13.7869 12.8643L9.97803 15.779L14.3163 14.5929Z'
                    fill='#005128'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0_1100_2240'>
                  <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
                </clipPath>
              </defs>
            </svg>

            <span>Tustpilot</span>
          </button>

          <button type='button' className={styles['rates__content-button']}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
            >
              <path
                d='M1.69995 10.5001C1.69995 5.89758 5.42995 2.16675 10.0332 2.16675C14.6349 2.16675 18.3666 5.89758 18.3666 10.5001C18.3666 15.1026 14.6349 18.8334 10.0332 18.8334C5.42995 18.8334 1.69995 15.1026 1.69995 10.5001Z'
                fill='#FC3F1D'
              />
              <path
                d='M11.1 6.88838H10.33C8.91837 6.88838 8.17587 7.60338 8.17587 8.65755C8.17587 9.84922 8.6892 10.4075 9.74337 11.1234L10.6142 11.71L8.1117 15.4492H6.2417L8.48753 12.1042C7.19587 11.1784 6.47087 10.2792 6.47087 8.75838C6.47087 6.85172 7.80003 5.55005 10.3208 5.55005H12.8233V15.44H11.1V6.88838Z'
                fill='white'
              />
            </svg>

            <span>Яндекс</span>
          </button>
        </div>

        <div id='mc-review'></div>
      </div>
    </div>
  );
}
