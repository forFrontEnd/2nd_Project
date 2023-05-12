import { useRecoilValue } from "recoil";

import Search from "../Search/Search";

import { isOpenState } from "../../../recoil/state";

import "./Modal.css";

const Modal = () => {
  const isOpen = useRecoilValue(isOpenState);

  if (!isOpen) return null;

  return <Search />;
};

export default Modal;
