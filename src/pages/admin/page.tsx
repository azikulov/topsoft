import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';

type Form = {
  username: string;
  password: string;
};

export default function Admin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Form>();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  function handleLogin(data: Form) {
    if (data.username === 'vladis6u' && data.password === '1kjb3kb5h3n3jkn5') {
      localStorage.setItem('topsoft', JSON.stringify({ isAuth: true }));
      window.location.reload();
    }
  }

  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem('topsoft') as string)?.isAuth || false);

    if (isAuth) {
      navigate('/admin/keys');
    }
  }, [navigate, isAuth]);

  return (
    <Layout hidden>
      <form onSubmit={handleSubmit(handleLogin)} className={styles['login']}>
        <h1 className={styles['login__title']}>Админ панель</h1>

        <input
          type='text'
          placeholder='Имя пользователя'
          className={styles['login__input']}
          {...register('username', { required: true })}
        />

        <input
          type='password'
          placeholder='Пароль'
          className={styles['login__input']}
          {...register('password', { required: true })}
        />

        <button type='submit' className={styles['login__button']}>
          Войти
        </button>
      </form>
    </Layout>
  );
}
