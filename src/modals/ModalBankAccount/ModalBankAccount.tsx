import React from 'react';
import { useGlobalModalContext } from '../../context/ModalContext';

const ModalBankAccount = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  // const { title, confirmBtn } = modalProps || {};

  const handleModalToggle = () => {
    hideModal();
  };

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <button onClick={handleModalToggle}>
        {/* {confirmBtn || 'Confirm button'} */}
        confirm
      </button>
      ,<button onClick={handleModalToggle}>Cancel</button>
    </div>
  );
};

export { ModalBankAccount };
