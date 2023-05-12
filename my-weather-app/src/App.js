import React, {useState, useEffect} from 'react';

import {useRecoilState, useRecoilValue} from 'recoil';

import CurrentWeather from './screens/CurrentWeather';
import Loading from './screens/Loading';

import {SearchDoneState, isOpenState} from './recoil/state';

import './App.css';
import Modal from '../src/components/Modal';

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
      {loading ? <Loading /> : null}
      {!loading ? (
        <>
          <button className="header-container" onClick={openModal}>
            Search City
          </button>
          {isOpen ? <Modal /> : <></>}
          <div className="main-container">
            {SearchDone ? <CurrentWeather /> : null}{' '}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
