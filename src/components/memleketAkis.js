import React from "react";
import CtInfo from "./memleketBilgiler";

const MemleketAkıs = (props) => {
  const { memleketInfo } = props;
  return (
    <CtInfo
      name={memleketInfo.name}
      rotation_period={memleketInfo.rotation_period}
      orbital_period={memleketInfo.orbital_period}
      diameter={memleketInfo.diameter}
      climate={memleketInfo.climate}
      gravity={memleketInfo.gravity}
      terrain={memleketInfo.terrain}
      surface_water={memleketInfo.surface_water}
      population={memleketInfo.population}
    />
  );
};
export default MemleketAkıs;
