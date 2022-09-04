import React from 'react';

import { BottomMenu } from '../../components/BottomMenu';

import styles from './styles.module.scss';
import { Sidebar } from '../../components/Sidebar';

const Main = () => (
  <main className={styles.main}>
    <Sidebar />
    <div>
      <ul>
        <li>Обзор</li>
        <li>Транкзанкции</li>
        <li>Отчеты</li>
        <li>Настройки!</li>
      </ul>
      <div>main control</div>
      <BottomMenu />
    </div>
    <nav />
  </main>
);

export { Main };
