import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Akıs from "./components/KarakterAkış";
import { response } from "msw";
import MemleketAkıs from "./components/memleketAkis";
import GemiAkıs from "./components/uzayGemisiAkış";

const SCheader = styled.h1`
  color: #00000;
  text-shadow: 1px 1px 5px #fff;
`;
const SCapp = styled.div`
  text-align: center;
`;
const SCcont = styled.div`
  display: flex;
  justify-content: space-around;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [veri, setVeri] = useState([]);
  const [sayi, setSayi] = useState(4);
  const [mem, setMem] = useState([]);
  const [gem, setGem] = useState([]);
  const [deger, setDeger] = useState(0);
  const [adet, setAdet] = useState(0);

  function Arttir() {
    setSayi(sayi + 1);
  }
  function Azalt() {
    setSayi(sayi - 1);
  }
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + sayi)
      .then((response) => {
        setVeri(response.data);
      })
      .catch((error) => console.log(error));
  }, [sayi]);

  console.log(veri.starships);

  useEffect(() => {
    if (veri.length > 0) {
      axios
        .get(veri.homeworld[adet])
        .then((response) => {
          setMem(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [adet, veri]);
  useEffect(() => {
    if (veri.length > 0) {
      axios
        .get(veri.starships[deger])
        .then((response) => {
          setGem(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [deger, veri]);

  return (
    <SCapp>
      <SCheader>Karakterler</SCheader>
      <SCcont>
        <Akıs karakterInfo={veri} />
        <MemleketAkıs memleketInfo={mem} />
        <GemiAkıs gemiInfo={gem} />
      </SCcont>
    </SCapp>
  );
};

export default App;
