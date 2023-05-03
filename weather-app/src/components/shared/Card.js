import "./Card.css";

const Card = (props) => {
  return (
    <div
      className="card-container"
      style={{ width: props.width, height: props.height }}
    ></div>
  );
};

export default Card;
