import React from "react";
import SsInfo from "./uzayGemisi";

const GemiAkıs = (props) => {
  const { gemiInfo } = props;
  return (
    <SsInfo
      name={gemiInfo.name}
      model={gemiInfo.model}
      manufacturer={gemiInfo.manufacturer}
      cost_in_credits={gemiInfo.cost_in_credits}
      length={gemiInfo.length}
      max_atmosphering_speed={gemiInfo.max_atmosphering_speed}
      crew={gemiInfo.crew}
      passengers={gemiInfo.passengers}
      cargo_capacity={gemiInfo.cargo_capacity}
      consumables={gemiInfo.consumables}
      hyperdrive_rating={gemiInfo.hyperdrive_rating}
      MGLT={gemiInfo.MGLT}
      starship_class={gemiInfo.starship_class}
    />
  );
};
export default GemiAkıs;
