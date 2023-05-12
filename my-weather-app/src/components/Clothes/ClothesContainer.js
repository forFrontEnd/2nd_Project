import { useRecoilValue } from "recoil";

import Clothes from "./Clothes/Clothes";

import TodayDate from "../TodayDate/TodayDate";

import { imageUrlState } from "../../recoil/state";

const ClothesContainer = () => {
  const imageUrl = useRecoilValue(imageUrlState);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    opacity: 0.8,
  };

  return (
    <div className="clothes-container" style={style}>
      <TodayDate />
      <Clothes />
    </div>
  );
};

export default ClothesContainer;
