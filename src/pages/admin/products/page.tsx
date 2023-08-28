import { Link } from 'react-router-dom';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { useSelector } from '@/hooks/useSelector';

export default function AdminProducts() {
  const products = useSelector((state) => state.products);
  const activationKeys = useSelector((state) => state.keys);

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

        {
          <table className={styles['dashboard__table']}>
            <thead>
              <tr>
                <th>Продукт</th>
                <th>Категория</th>
                <th>Новая цена</th>
                <th>Старая цена</th>
                <th>Осталось/Ключи</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item, key) => (
                  <tr key={key}>
                    <td>
                      <Link
                        className={styles['dashboard__table-button-view']}
                        to={'/admin/products/' + item.id}
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.newPrice}</td>
                    <td>{item.oldPrice}</td>
                    <td>
                      {
                        activationKeys.filter(
                          (activationKey) =>
                            activationKey.title.toLowerCase().trim() ===
                              item.title.toLowerCase().trim() &&
                            activationKey.status.toLowerCase().trim() ===
                              'Не продан'.toLowerCase().trim()
                        ).length
                      }
                      /
                      {
                        activationKeys.filter(
                          (activationKey) =>
                            activationKey.title.toLowerCase().trim() ===
                            item.title.toLowerCase().trim()
                        ).length
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        }
      </div>
    </Layout>
  );
}
