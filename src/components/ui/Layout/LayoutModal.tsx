import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PatternFormat } from 'react-number-format';

import styles from './Layout.module.scss';
import type { LayoutModalProps } from './types';
import { Controller, useForm } from 'react-hook-form';
import { sendMail } from '@/api';
import { adminEmail } from '@/config';

export function LayoutModal({ hidden, onClose }: LayoutModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; phone: string }>();

  const [modalState, setIsModalState] = useState<'form' | 'success'>('form');

  async function handleFormSubmit(data: { name: string; phone: string }) {
    // Логика отправки данных на почту

    const response = await sendMail({
      to: adminEmail,
      html: `<p>Phone ${data.phone}</p><p>Name: ${data.name}</p>`,
      subject: ' ',
      text: ' ',
    });

    if (response?.message !== 'An error has occurred!') {
      return setIsModalState('success');
    }
  }

  if (hidden) return;

  return (
    <div className={styles['modal']}>
      <div onClick={onClose} className={styles['modal__space']} />

      <div className={styles['modal__wrapper']}>
        <button onClick={onClose} className={styles['modal__close-button']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
          >
            <path
              d='M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z'
              fill='#8A8A8A'
            />
          </svg>
        </button>

        {
          {
            form: (
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h1 className={styles['modal__title']}>Оставить заявку</h1>
                <p className={styles['modal__subtitle']}>
                  Заполните форму ниже и наш специалист свяжется с вами в течение рабочего дня
                </p>

                <label className={styles['modal__field']}>
                  <p className={styles['modal__field-title']}>Имя</p>
                  <input
                    type='text'
                    placeholder='Введите ваше имя'
                    className={styles['modal__field-input']}
                    {...register('name', { required: true })}
                  />

                  {errors.name?.type === 'required' && (
                    <p className={styles['modal__field-error']}>Обязательное поле</p>
                  )}
                </label>

                <label className={styles['modal__field']}>
                  <p className={styles['modal__field-title']}>Телефон</p>

                  <Controller
                    control={control}
                    name='phone'
                    rules={{ required: true }}
                    render={({ field: { onChange, name, value } }) => (
                      <PatternFormat
                        format='+7 (###) ###-##-##'
                        placeholder='+7 (999) 999-99-99'
                        className={styles['modal__field-input']}
                        onChange={onChange}
                        name={name}
                        value={value}
                      />
                    )}
                  />

                  {errors.phone?.type === 'required' && (
                    <p className={styles['modal__field-error']}>Обязательное поле</p>
                  )}
                </label>

                <label className={styles['modal__checkbox']}>
                  <input type='checkbox' className={styles['modal__checkbox-input']} required />
                  <p className={styles['modal__checkbox-title']}>
                    Соглашаюсь с <Link to='#'>политикой конфиденциальности</Link>
                  </p>
                </label>

                <button type='submit' className={styles['modal__submit']}>
                  Заказать звонок
                </button>
              </form>
            ),
            success: (
              <>
                <h1 className={styles['modal__title']}>Спасибо за заявку</h1>
                <p className={styles['modal__subtitle']}>
                  Мы перезвоним вам в течение рабочего дня, а пока можете посмотреть каталог товаров
                  и выбрать необходимые программы
                </p>
                <Link className={styles['modal__button']} to='/catalog'>
                  Перейти в каталог
                </Link>
              </>
            ),
          }[modalState]
        }
      </div>
    </div>
  );
}
