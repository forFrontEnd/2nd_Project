import Card from "../shared/Card";
import "./Left.css";
import TodayDate from "./components/TodayDate";

const Left = () => {
  return (
    <div className="left-container">
      <div>
        <TodayDate />
      </div>
      <div>
        <Card width="20vw" height="70vh" />
      </div>
    </div>
  );
};

export default Left;
