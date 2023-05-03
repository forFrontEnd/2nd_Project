import Card from "../shared/Card";
import "./Center.css";

const Center = () => {
  return (
    <div>
      <div>
        <Card width="40vw" height="5vh" />
      </div>
      <div>
        <Card width="40vw" height="30vh" />
      </div>
      <div>
        <Card width="40vw" height="calc(40vh - 12px)" />
      </div>
    </div>
  );
};

export default Center;
