import React from "react";
import { useRecoilValue } from "recoil";
import { currentUser } from "../../atoms/user";

export const UserDetail = () => {
  const user = useRecoilValue(currentUser);
  if (user === null) {
    return null;
  }
  return (
    <div>
      <h1>Detail de l utilisateur</h1>
      <p>Nom: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
