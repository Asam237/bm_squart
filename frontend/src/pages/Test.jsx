import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { compteurDoubleState, compteurState } from "../atoms/comteur";

export const Test = () => {
  const [n, setN] = useRecoilState(compteurState);
  const m = useRecoilValue(compteurDoubleState);
  return (
    <div>
      <p>{n}</p>
      <p>{m}</p>
      <button onClick={() => setN(n + 1)}>valider</button>
    </div>
  );
};
