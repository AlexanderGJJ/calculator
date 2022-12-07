import React, { useContext } from 'react';
import { BottomMenu } from '../../components/BottomMenu';
import { AuthContext } from '../../context';

import { Sidebar } from '../../components/Sidebar';
import styles from './styles.module.scss';

const Main = () => {
  const { logout } = useContext(AuthContext);
  const onLogOut = () => logout();

  return (
    <main className={styles.main}>
      <Sidebar />
      <button onClick={onLogOut}>log out!</button>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
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
};

export { Main };
