import React from 'react';
import './Modal.css';
import SearchBar from './SearchBar';
import {useRecoilValue} from 'recoil';
import {isOpenState} from '../recoil/state';

const Modal = () => {
  const isOpen = useRecoilValue(isOpenState);

  if (!isOpen) return null;

  return (
    <>
      <SearchBar />
    </>
  );
};

export default Modal;
