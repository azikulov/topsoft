import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { useActions } from '@/hooks/useActions';
import { useSelector } from '@/hooks/useSelector';
import { createKey, deleteKey, getKeys } from '@/api';
import type { Key } from '@/types';

export default function AdminKeys() {
  const products = useSelector((state) => state.products);
  const keys = useSelector((state) => state.keys);

  const { saveKeys } = useActions();
  const { register, handleSubmit, reset } = useForm();
  const { register: registerFilter, handleSubmit: handleFilterSubmit } = useForm<Omit<Key, 'id'>>();

  const [filteredActivationKeys, setFilteredActivationKeys] = useState<Key[]>([]);
  const [pageState, setPageState] = useState({
    // isLoading: true,
    isLoading: false,
    isError: false,
  });
  const [formState, setFormState] = useState({
    isLoading: false,
  });
  const [keyItemState, setKeyItemState] = useState({
    isDeleting: false,
  });

  async function handleDeleteKey(id: number) {
    setKeyItemState((state) => ({ ...state, isDeleting: true }));

    setTimeout(async () => {
      const response = await deleteKey(id);

      if (response?.message === 'The key successfully deleted!') {
        if (response.keys) {
          saveKeys(response.keys);
          setFilteredActivationKeys(response.keys);
        }
        setKeyItemState((state) => ({ ...state, isDeleting: false }));
      }
    }, 1000);
  }

  async function handleCreateKey(data: Partial<Key>) {
    setFormState((prevState) => ({ ...prevState, isLoading: true }));

    // Если в форме нет данных, то останавливаем создание ключа в БД
    if (!data) return;

    const keys: string[] | undefined = data.content?.trim().split('\n');
    const newFormData: Key[] = [];

    // Если ключей нет, останавливаем создание ключа в БД
    if (!keys) return;

    keys.forEach((item) => {
      newFormData.push({ ...data, content: item, status: 'Не продан' } as Key);
    });

    // Делаем запрос в API на создание ключа в БД
    // console.log(newFormData);
    const response = await createKey(newFormData);

    if (response && response.keys) {
      saveKeys(response.keys);
      setFilteredActivationKeys(response.keys);
      reset({ title: '', content: '', status: 'Не продан' });
    }
    setFormState((prevState) => ({ ...prevState, isLoading: false }));
  }

  function handleFilterKeys(data: Omit<Omit<Key, 'id'>, 'status'>) {
    const filteredKeys = [];

    if (data.title && data.content) {
      const filtered = keys.filter(
        (item) =>
          item.title.trim().toLowerCase() === data.title.trim().toLowerCase() &&
          item.content.trim().toLowerCase() === data.content.trim().toLowerCase()
      );

      return setFilteredActivationKeys(filtered);
    }

    if (data.title) {
      const filtered = keys.filter(
        (item) => item.title.trim().toLowerCase() === data.title.trim().toLowerCase()
      );

      filteredKeys.push(...filtered);

      console.log('Filter Title');
    }

    if (data.content) {
      const filtered = keys.filter(
        (item) => item.content.trim().toLowerCase() === data.content.trim().toLowerCase()
      );

      filteredKeys.push(...filtered);

      console.log('Filter Content');
    }

    if (!data.title && !data.content) {
      filteredKeys.push(...keys);
      console.log('Filter All');
    }

    setFilteredActivationKeys([...new Set(filteredKeys)]);
  }

  useEffect(() => {
    // Запрос на получение ключей из БД
    getKeys()
      .then((keys) => {
        if (keys) {
          setFilteredActivationKeys(keys);
          return saveKeys(keys);
        }
        // Если ключей нет, то выводим ошибку
        setPageState((prevState) => ({ ...prevState, isError: true }));
      })
      .finally(() => {
        setPageState((prevState) => ({ ...prevState, isLoading: false }));
      });
  }, [saveKeys]);

  return (
    <Layout hidden>
      <div className={styles['dashboard']}>
        <div className={styles['dashboard__header']}>
          <h1 className={styles['dashboard__title']}>
            Админ панель <Link to='/admin/keys'>| Ключи</Link>{' '}
            <Link to='/admin/products'>| Продукты</Link>
          </h1>
        </div>

        {pageState.isLoading && (
          <h1 className={styles['dashboard__loading']}>Получаю список продуктов с Базы данных</h1>
        )}

        {pageState.isError && (
          <h1 className={styles['dashboard__loading']}>
            Произошла ошибка, перезагрузите страницу!
          </h1>
        )}

        {!pageState.isLoading && !pageState.isError && (
          <>
            <form onSubmit={handleSubmit(handleCreateKey)} className={styles['dashboard__form']}>
              <select {...register('title', { required: true })}>
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

              <textarea placeholder='Ключ' {...register('content', { required: true })} />

              {formState.isLoading ? (
                <button type='button' disabled>
                  Добавление...
                </button>
              ) : (
                <button type='submit'>Добавить ключ</button>
              )}
            </form>

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

              <textarea placeholder='Ключ' {...registerFilter('content')} />

              <button type='submit'>Поиск</button>
            </form>

            <table className={styles['dashboard__table']}>
              <thead>
                <tr>
                  <th>Продукт</th>
                  <th>Ключ</th>
                  <th>Статус</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredActivationKeys.length ? (
                  filteredActivationKeys.map((item, key) => (
                    <tr key={key}>
                      <td>{item.title}</td>
                      <td>{item.content}</td>
                      <td>{item.status}</td>
                      <td>
                        {keyItemState.isDeleting ? (
                          <button disabled className={styles['dashboard__table-button-deleting']}>
                            Удаление...
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDeleteKey(item.id)}
                            className={styles['dashboard__table-button-delete']}
                          >
                            Удалить
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <p className={styles['dashboard__loading']}>Список пустой</p>
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
