import React from "react";
import { COLORS } from "../../assets/themes/globals.themes";
import { LANGUAGES } from "../../constants/languages";
import { useHistory } from "react-router-dom";

export const Header = (props: any) => {
  const history = useHistory();
  return (
    <header
      className="site__header py-4 px-4 sticky top-0 z-50"
      style={{ background: `${COLORS.primaryColor}` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="site__header__logo">
            <a
              style={styles.header__link}
              href="#"
              className="site__header__logo-link border-gray-300 text-gray-200 px-4 py-2 rounded-full font-bold text-sm uppercase hover:text-gray-300 hover:bg-blue-900"
            >
              {props.name}
              <span>&#178;</span>
            </a>
          </div>
          <div className="site__header__nav flex flex-col md:flex-row items-start md:items-center pt-4 md:pt-0">
            {LANGUAGES.home.myNav.map((i: any) => (
              <li className="md:mt-0 hidden md:mr-4 md:inline-block">
                <a
                  style={{ fontFamily: " 'Poppins', sans-serif" }}
                  className="uppercase hover:underline font-bold text-sm text-gray-200"
                  href={i.link}
                >
                  {i.name}
                </a>
              </li>
            ))}
            <li
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="hidden  mt-3 md:mt-0 md:mr-4 md:inline-block"
            >
              <button
                className="uppercase hover:bg-blue-900 hover:text-gray-300 border-gray-300 bg-blue-300 border-2 rounded-sm text-gray-700 px-4 py-2 text-sm font-extrabold"
                onClick={(e: any) => null}
              >
                ANGLAIS
              </button>
            </li>
          </div>
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
