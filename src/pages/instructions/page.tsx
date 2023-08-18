import { Link } from 'react-router-dom';

import { Layout } from '@/components/ui/Layout';
import { Help } from '@/components/shared/Help';
import styles from './page.module.scss';
import { instructions } from '@/data/instructions';

export default function Instructions() {
  return (
    <Layout>
      <div className={styles['breadcrumb']}>
        <p className={styles['breadcrumb__navigation']}>
          <Link to='/'>Главная →</Link> Инструкции
        </p>
      </div>

      <div className={styles['instructions']}>
        <h1 className={styles['instructions__title']}>Инструкции</h1>
        <p className={styles['instructions__subtitle']}>
          Статьи и инструкции по работе с ключами <br />и операционной системой Winfows
        </p>

        <div className={styles['instructions__cards']}>
          {instructions.map((instruction, key) => (
            <Link
              key={key}
              to={'/instructions/' + instruction.id}
              className={styles['instructions__card']}
            >
              <div className={styles['instructions__card-image']}>
                <img src={instruction.image} alt='' />
              </div>
              {/* <p className={styles['instructions__card-date']}>22 июня 2023</p> */}
              <h1 className={styles['instructions__card-title']}>{instruction.title}</h1>
            </Link>
          ))}
        </div>
      </div>

      <Help />
    </Layout>
  );
}
