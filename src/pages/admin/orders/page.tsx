import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { Order } from '@/types';
import { getOrders } from '@/api';
import { useForm } from 'react-hook-form';
import { useSelector } from '@/hooks/useSelector';

export default function AdminOrders() {
  const products = useSelector((state) => state.products);
  const { register: registerFilter, handleSubmit: handleFilterSubmit } =
    useForm<Omit<Order, 'id'>>();

  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [isLoadedWindow, setIsLoadedWindow] = useState<boolean>(false);

  function filterItems(list: Order[], filters: Omit<Order, 'id'>) {
    return list.filter((item) => {
      return (
        (!filters.title || item.title.includes(filters.title)) &&
        (!filters.email || item.email === filters.email) &&
        (!filters.key || item.key === filters.key) &&
        (!filters.time || item.time === filters.time)
      );
    });
  }

  function handleFilterKeys(data: Omit<Order, 'id'>) {
    const filtered = filterItems(orders, data);
    setFilteredOrders(filtered);
  }

  useEffect(() => {
    getOrders().then((response) => {
      if (response) {
        setOrders(response);
        setFilteredOrders(response);
      }
      setIsLoadedWindow(true);
    });
  }, []);

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
          <>
            <form
              onSubmit={handleFilterSubmit(handleFilterKeys)}
              className={styles['dashboard__form']}
            >
              <select {...registerFilter('title')}>
                <option defaultChecked value=''>
                  Выберите название товара
                </option>

                {Array.isArray(products) &&
                  products.map((product, key) => (
                    <option key={key} value={product.title}>
                      {product.title}
                    </option>
                  ))}
              </select>

              <input type='text' placeholder='Ключ' {...registerFilter('key')} />
              <input type='text' placeholder='Почта' {...registerFilter('email')} />
              <input type='text' placeholder='Время' {...registerFilter('time')} />

              <button type='submit'>Поиск</button>
            </form>

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
                {filteredOrders.length ? (
                  filteredOrders.map((item, key) => (
                    <tr key={key}>
                      <td>{item.title}</td>
                      <td style={item.trashKey ? { color: 'red', fontWeight: 700 } : {}}>
                        {item.key}
                      </td>
                      <td>{item.email}</td>
                      <td>{item.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <p className={styles['dashboard__loading']}>список пустой</p>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Layout>
  );
}
