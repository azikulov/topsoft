import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { useSelector } from '@/hooks/useSelector';
import { useActions } from '@/hooks/useActions';
import { updateProduct } from '@/api';
import type { Product } from '@/types';

export default function AdminProductsID() {
  const params = useParams();
  const navigate = useNavigate();

  const { saveProducts } = useActions();
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState<Product>({} as Product);
  const [formState, setFormState] = useState({
    isLoading: false,
    success: false,
    error: false,
  });

  async function handleUpdateProduct(id: number) {
    setFormState((prevState) => ({ ...prevState, isLoading: true }));

    const updatedValue: Partial<Product> = {
      title: product.title,
      newPrice: product.newPrice,
      oldPrice: product.oldPrice,
      discount: product.discount,
    };

    try {
      const response = await updateProduct(id, updatedValue);
      const updatedProducts = [...products];

      if (response) {
        updatedProducts.forEach((product, index) => {
          if (product.id !== response.updatedProduct.id) return;

          updatedProducts[index] = response.updatedProduct;
          saveProducts(updatedProducts);
        });
      }

      setFormState((prevState) => ({ ...prevState, success: true }));
    } catch {
      setFormState((prevState) => ({ ...prevState, error: true }));
    } finally {
      setFormState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }

  useEffect(() => {
    setProduct(products.filter((item) => item.id === Number(params.id))[0]);
  }, [params.id, products]);

  return (
    <Layout hidden>
      <div className={styles['dashboard']}>
        <div className={styles['dashboard__header']}>
          <h1 className={styles['dashboard__title']}>
            Админ панель <Link to='/admin/keys'>| Ключи</Link>{' '}
            <Link to='/admin/products'>| Продукты</Link>
          </h1>
        </div>

        {!product && (
          <h1 className={styles['dashboard__loading']}>
            Получаю данные этого продукта с Базы данных
          </h1>
        )}

        {product && (
          <div className={styles['dashboard__form']}>
            <input
              type='text'
              onChange={(e) => setProduct((prevState) => ({ ...prevState, title: e.target.value }))}
              placeholder='Название товара'
              defaultValue={product.title}
            />
            <input
              type='text'
              onChange={(e) =>
                setProduct((prevState) => ({ ...prevState, newPrice: e.target.value }))
              }
              placeholder='Новая цена'
              defaultValue={product.newPrice}
            />

            <input
              type='text'
              onChange={(e) =>
                setProduct((prevState) => ({ ...prevState, oldPrice: e.target.value }))
              }
              placeholder='Старая цена'
              defaultValue={product.oldPrice}
            />

            <input
              type='text'
              onChange={(e) =>
                setProduct((prevState) => ({ ...prevState, discount: e.target.value }))
              }
              placeholder='Скидка'
              defaultValue={product.discount}
            />

            <button onClick={() => handleUpdateProduct(product.id)}>Сохранить изменения</button>
            <button onClick={() => navigate(-1)}>Назад</button>

            {formState.isLoading && (
              <h1 className={styles['dashboard__loading']}>Отправляю данные в Базу данных</h1>
            )}
            {formState.error && (
              <h1 className={styles['dashboard__error']}>
                Произошла ошибка, перезагрузите страницу и попробуйте отправить запрос заново!
              </h1>
            )}
            {formState.success && (
              <h1 className={styles['dashboard__success']}>Данные успешно отправлены</h1>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
