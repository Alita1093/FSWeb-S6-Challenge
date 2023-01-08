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

const SsInfo = (props) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
  } = props;
  return (
    <SCInfoCont>
      <SCAltBaslık>Uzay Gemisi Bilgileri</SCAltBaslık>
      <ul>
        <li>{name}</li>
        <li>{model}</li>
        <li>{manufacturer}</li>
        <li>{cost_in_credits}</li>
        <li>{length}</li>
        <li>{max_atmosphering_speed}</li>
        <li>{crew}</li>
        <li>{passengers}</li>
        <li>{cargo_capacity}</li>
        <li>{consumables}</li>
        <li>{hyperdrive_rating}</li>
        <li>{MGLT}</li>
        <li>{starship_class}</li>
      </ul>
    </SCInfoCont>
  );
};
export default SsInfo;
