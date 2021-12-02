import React from "react";
import { useRecoilValue } from "recoil";
import { currentTest } from "../../atoms/test";

export const TestDetail = () => {
  const test = useRecoilValue(currentTest);
  if (test == null) {
    return null;
  }
  return <div></div>;
};
