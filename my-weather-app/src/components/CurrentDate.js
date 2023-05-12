import {WEEK} from '../shared/constants';

import './CurrentDate.css';

const CurrentDate = () => {
  const current = new Date();

  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const day = WEEK[current.getDay()];
  const date = current.getDate();

  const today = `${year}/${month}/${date} ${day}`;

  return <div className="today-container">{today}</div>;
};

export default CurrentDate;
