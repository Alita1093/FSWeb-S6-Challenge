import React from "react";
import ChInfo from "./KarakterBilgileri";

const Akıs = (props) => {
  const { karakterInfo } = props;

  return (
    <ChInfo
      name={karakterInfo.name}
      height={karakterInfo.height}
      mass={karakterInfo.mass}
      hair_color={karakterInfo.hair_color}
      skin_color={karakterInfo.skin_color}
      eye_color={karakterInfo.eye_color}
      birth_year={karakterInfo.birth_year}
      gender={karakterInfo.gender}
      // homeworld={karakterInfo.homeworld}
      // starships={karakterInfo.starships}
    />
  );
};
export default Akıs;
