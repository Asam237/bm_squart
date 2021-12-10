import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { testState } from "../../atoms/test";

export const TestList = () => {
  const [myTest, setMyTest] = useState<any[]>();
  useEffect(() => {
    fetch(
      "https://dashboard.mystore.lamater.net/api/2021-05/companies/430/collections"
    )
      .then((r) => r.json())
      .then((r) => setMyTest(r.data));
  });

  const setTestState = useSetRecoilState(testState);

  const handleClick = (test: any) =>
    setTestState((s) => ({ ...s, currentTest: test }));

  if (myTest === null) {
    return null;
  }
  return (
    <ul>
      {myTest?.map((i: any) => (
        <p onClick={() => handleClick(i.id)} key={i.id}>
          {i.name}
        </p>
      ))}
    </ul>
  );
};
