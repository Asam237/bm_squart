import React from "react";
import userPicture from "../../assets/img/user.png";
import { LANGUAGES } from "../../constants/languages";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { nameState, userState } from "../../atoms/name";

const HeaderDashboard = () => {
  const history = useHistory();
  const name =
    localStorage.getItem("name") +
    ""?.replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, "");
  const user = useRecoilValue(userState);
  console.log("Name:::", name);
  console.log("Full Name:::", user);
  return (
    <header className="site__header p-4 sticky z-50 bg-white">
      <div className="flex justify-between items-center">
        <div className="site__header-firstElement flex justify-center items-center">
          <a
            style={styles.header__link}
            onClick={() => history.push("/")}
            className="site__header__logo-link border-gray-600 text-gray-600 px-4 py-2 rounded-full font-bold text-sm uppercase hover:text-gray-300 hover:bg-blue-900 cursor-pointer"
          >
            BM
            <span>&#178;</span>
          </a>
          <p
            onClick={() => history.push("/")}
            style={{ fontFamily: " 'Poppins', sans-serif" }}
            className="site__header-title hover:underline font-bold text-sm text-gray-600 cursor-pointer ml-4"
          >
            Dashboard
          </p>
        </div>
        <div className="site__header-content flex justify-center items-center">
          <img src={userPicture} alt="" className="w-8 h-8 mr-4" />
          <p
            className="text-sm font-medium"
            style={{ fontFamily: " 'Poppins', sans-serif" }}
          >
            {name}
          </p>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header__link: {
    fontFamily: " 'Poppins', sans-serif",
    borderWidth: "2px",
  },
};

export default HeaderDashboard;
