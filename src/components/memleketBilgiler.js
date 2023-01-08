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
const CtInfo = (props) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = props;
  return (
    <SCInfoCont>
      <SCAltBaslık>Memleket Bilgileri</SCAltBaslık>
      <ul>
        <li>Dünya İsmi:{name}</li>
        <li>Kendi Eksen Periodu:{rotation_period}</li>
        <li>Yıldız Etrafında Periodu:{orbital_period}</li>
        <li>Çap:{diameter}</li>
        <li>İklim:{climate}</li>
        <li>Yer çekimi:{gravity}</li>
        <li>Yüzey tipi:{terrain}</li>
        <li>Su Yüzeyi:{surface_water}</li>
        <li>Nüfus:{population}</li>
      </ul>
    </SCInfoCont>
  );
};
export default CtInfo;
