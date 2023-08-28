import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { Order } from '@/types';
import { getOrders } from '@/api';

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoadedWindow, setIsLoadedWindow] = useState<boolean>(false);

  useEffect(() => {
    getOrders().then((response) => {
      if (response) setOrders(response);
      setIsLoadedWindow(true);
    });
  }, [orders]);

  return (
    <Layout hidden>
      <div className={styles['dashboard']}>
        <div className={styles['dashboard__header']}>
          <h1 className={styles['dashboard__title']}>
            Админ панель <Link to='/admin/keys'>| Ключи</Link>{' '}
            <Link to='/admin/products'>| Продукты </Link>
            <Link to='/admin/trash-keys'>| Мусорные ключи </Link>
            <Link to='/admin/orders'>| Заказы</Link>
          </h1>
        </div>

        {!isLoadedWindow && <p className={styles['dashboard__loading']}>Загрузка данных</p>}

        {isLoadedWindow && (
          <table className={styles['dashboard__table']}>
            <thead>
              <tr>
                <th>Продукт</th>
                <th>Ключ</th>
                <th>Почта</th>
                <th>Время</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((item, key) => (
                  <tr key={key}>
                    <td>{item.title}</td>
                    <td>{item.key}</td>
                    <td>{item.email}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}
