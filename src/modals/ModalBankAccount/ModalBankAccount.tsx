import { Modal } from 'semantic-ui-react';
import { useGlobalModalContext } from '../../context/ModalContext';

const ModalBankAccount = () => {
  const { hideModal } = useGlobalModalContext();

  return (
    <Modal open>
      <Modal.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Modal.Content>

      <button type="button" onClick={hideModal}>
        ok
      </button>
      <button type="button" onClick={hideModal}>
        Cancel
      </button>
    </Modal>
  );
};

export { ModalBankAccount };
