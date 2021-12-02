import React, { Suspense } from "react";
import { TestDetail } from "../../components/testDetail/TestDetail.component";
import { TestList } from "../../components/testList/TestList.component";

export const Test = () => {
  return (
    <div className="flex">
      <div className="w-3/4">
        <TestList />
      </div>
      <div className="w-1/4">
        <Suspense fallback="chargement...">
          <TestDetail />
        </Suspense>
      </div>
    </div>
  );
};
