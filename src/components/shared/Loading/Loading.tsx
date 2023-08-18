import styles from './page.module.scss';

export function Loading() {
  return (
    <div className={styles['loading']}>
      <h1 className={styles['loading__title']}>topsoft</h1>
    </div>
  );
}
