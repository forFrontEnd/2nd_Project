import React, { useState, useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import Main from "./screens/Main/Main";
import Loading from "./screens/Loading/Loading";

import { SearchDoneState, isOpenState } from "./recoil/state";

import Modal from "./components/Search/Modal/Modal";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const SearchDone = useRecoilValue(SearchDoneState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      {!loading && (
        <>
          <button className="header-container" onClick={openModal}>
            Search City
          </button>
          {isOpen ? <Modal /> : <></>}
          <div className="main-container">{SearchDone ? <Main /> : null} </div>
        </>
      )}
    </div>
  );
};

export default App;
