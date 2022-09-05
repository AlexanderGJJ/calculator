import React, { useState, createContext, useContext } from 'react';
// import { createPortal } from 'react-dom';

import { ModalBankAccount } from '../../modals/ModalBankAccount';

export const MODAL_TYPES = {
  BANK_ACCOUNT: 'BANK_ACCOUNT',
};

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.BANK_ACCOUNT]: ModalBankAccount,
};

type ContextType = {
  showModal: (modalType: string, modalProps?: Object) => void;
  hideModal: () => void;
  store: {
    modalType: string;
    modalProps?: {};
  };
};

const initalState: ContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: {
    modalType: '',
    modalProps: {},
  },
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC = ({ children }) => {
  const [store, setStore] = useState({
    modalType: '',
    modalProps: {},
  });
  const { modalType, modalProps } = store || {};

  const showModal = (modalType: string, modalProps: Object = {}) => {
    setStore({
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      modalType: '',
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    console.log('!!!renderComponent!', modalType); // Почему ты рендеришься при инициализации?
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
