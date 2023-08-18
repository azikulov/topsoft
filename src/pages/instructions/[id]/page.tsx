'use client';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Layout } from '@/components/ui/Layout';
import styles from './page.module.scss';
import { instructions } from '@/data/instructions';
import type { Instruction } from '@/types';

export default function InstructionsID() {
  const params = useParams();

  const [currentInstruction, setCurrentInstruction] = useState<Instruction>();

  useEffect(() => {
    setCurrentInstruction(instructions.filter((item) => item.id === Number(params.id))[0]);
  }, [params.id]);

  return (
    <Layout>
      {currentInstruction && (
        <>
          <div className={styles['breadcrumb']}>
            <p className={styles['breadcrumb__navigation']}>
              <Link to='/'>Главная →</Link> <Link to='/instructions'>Инструкции →</Link>{' '}
              {currentInstruction.title}
            </p>
          </div>

          <main className={styles['instruction']}>
            <h1 className={styles['instruction__title']}>{currentInstruction.title}</h1>

            <div className={styles['instruction__content']}>{currentInstruction.content}</div>
          </main>
        </>
      )}
    </Layout>
  );
}
