import './ClothIcon.css';

const ClothIcon = ({clothName}) => {
  return (
    <div className="cloth-wrapper">
      <img
        src={`clothes-icons/${clothName}.png`}
        alt={clothName}
        className="cloth-icon floating"
      />
      <span className="clothes-name">{clothName}</span>
    </div>
  );
};

export default ClothIcon;
