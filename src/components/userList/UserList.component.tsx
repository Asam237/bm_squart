import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../atoms/Auth";
import { currentUser } from "../../atoms/user";

export const UserList = () => {
  const [user, setUser] = useState<any[]>();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((r) => setUser(r));
  });

  const setUserState = useSetRecoilState(userState);

  const handleClick = (user: any) => {
    return setUserState((s) => ({ ...s, currentUser: user }));
  };

  if (user == null) {
    return null;
  }

  return (
    <ul>
      {user.map((i: any) => (
        <p onClick={() => handleClick(i.id)} key={i.id}>
          {i.name}
        </p>
      ))}
    </ul>
  );
};
