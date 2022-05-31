import { useGlobalModalContext, MODAL_TYPES } from '../../context/ModalContext';
import styles from './styles.module.scss';

const Sidebar = () => {
  const { showModal } = useGlobalModalContext();

  const onModalShow = () => {
    showModal(MODAL_TYPES.BANK_ACCOUNT);
  };

  return (
    <div className={styles.sidebar}>
      <h4>Balance : 0 </h4>
      <span>Список счетов</span>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button onClick={onModalShow}>Добавить счет</button>
    </div>
  );
};

export { Sidebar };
