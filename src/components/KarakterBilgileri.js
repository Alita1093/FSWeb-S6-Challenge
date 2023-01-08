import React from "react";
import styled from "styled-components";
const SCInfoCont = styled.div`
  width: 367px;
  background: rgba(64, 64, 64, 0.2);
  text-align: left;
  color: white;
  line-height: 2.5;
`;
const SCAltBaslık = styled.h3`
  text-align: center;
  color: black;
`;
const ChInfo = (props) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    starships,
  } = props;
  return (
    <SCInfoCont>
      <SCAltBaslık>Karater Bilgileri</SCAltBaslık>
      <ul>
        <li>İsim:{name}</li>
        <li>Boy:{height}</li>
        <li>Kilo:{mass}</li>
        <li>Saç Rengi:{hair_color}</li>
        <li>Ten Rengi:{skin_color}</li>
        <li>Göz Rengi:{eye_color}</li>
        <li>Doğum Yılı:{birth_year}</li>
        <li>Cinsiyet:{gender}</li>
        <li>Memleket:{homeworld}</li>
        <li>Araçlar:{starships}</li>
      </ul>
    </SCInfoCont>
  );
};

export default ChInfo;
