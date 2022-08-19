import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [parImpar, setParImpar] = useState("Impar");

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita!!!";
      }
    },
    [fatorial]
  );

  useEffect(
    function () {
      setParImpar((number % 2 === 0 ? "Par" : "Impar"));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />

      <div className="center">
        <span className="text"> Fatorial: </span>
        <span className="text red">
          {fatorial === -1 ? "Não existe" : fatorial}
        </span>
      </div>
      <input
        type="number"
        className="input"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="O digitado será armazenado em name "
      />
  

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">Status:</span>
        <span className="text red">{parImpar}</span>
      </div>
    </div>
  );
};

export default UseEffect;
