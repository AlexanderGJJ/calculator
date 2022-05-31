import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { BottomMenu } from '../../components/BottomMenu';

import styles from './styles.module.scss';
import { Sidebar } from '../../components/Sidebar';

const Main = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  console.log(isAuth, 'isAuth');

  // if (!isAuth) {
  //   navigate('/login');
  // }

  return (
    <main className={styles.main}>
      дизайн как рабочая тетрадь в клетку :)
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
      <nav></nav>
    </main>
  );
};

export { Main };
