import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { useActions } from '@/hooks/useActions';
import { useSelector } from '@/hooks/useSelector';
import { createTrashKey, deleteTrashKey, getTrashKeys } from '@/api';
import type { Key } from '@/types';

export default function AdminTashKeys() {
  const products = useSelector((state) => state.products);
  const [trashKeys, setTrashKeys] = useState<Key[]>([]);

  const { saveKeys } = useActions();
  const { register, handleSubmit, reset } = useForm();

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
      const response = await deleteTrashKey(id);

      if (response?.message === 'The trash key successfully deleted!') {
        if (response.trashKeys) {
          setTrashKeys(response.trashKeys);
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
    const response = await createTrashKey(newFormData);

    if (response && response.trashKeys) {
      setTrashKeys(response.trashKeys);
      reset({ title: '', content: '', status: 'Не продан' });
    }
    setFormState((prevState) => ({ ...prevState, isLoading: false }));
  }

  useEffect(() => {
    // Запрос на получение ключей из БД
    getTrashKeys()
      .then((keys) => {
        if (keys) return setTrashKeys(keys);
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
            <Link to='/admin/trash-keys'>| Мусорные ключи</Link>
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
                {trashKeys.length ? (
                  trashKeys.map((item, key) => (
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
