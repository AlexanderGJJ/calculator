import { useContext } from 'react';
import { BottomMenu } from '@app/components/BottomMenu';
import { AuthContext } from '@app/context';

import { Sidebar } from '@app/components/Sidebar';

import { Input } from '@app/components/Input';
import styles from './styles.module.scss';

const Main = () => {
  const { logout } = useContext(AuthContext);
  const onLogOut = () => logout();

  return (
    <main className={styles.main}>
      <Sidebar />

      <button onClick={onLogOut}>log out!</button>

      <div>
        <Input />

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
