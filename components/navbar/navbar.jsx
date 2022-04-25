import Link from "next/link";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../atom/theme.js";
import { changeTheme } from "../../helpers/change-theme.js";
import { authenticatedAtom } from "../../atom/authenticatedAtom.js";
import { FiSun, FiMoon } from "react-icons/fi";
import NavbarLogo from "../../assets/navbar-logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useRecoilState(themeAtom);
  const isAuthenticated = useRecoilValue(authenticatedAtom);

  const handleClick = () => {
    setActive(!active);
  };

  const onChangeThemeClick = () => {
    changeTheme(theme, setTheme);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-tertiary-light dark:bg-secondary-dark p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src={NavbarLogo.src} alt="Bro please check your internet" width={"30%"} height={"30%"} />
            <span className="text-xl text-primary-orange font-bold uppercase tracking-wide font-manrope ml-2">
              FUEL
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-primary-orange ml-auto hover:text-primary-orange outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <button
              className="lg:flex lg:w-auto w-full px-3 py-2 hover:text-primary-orange hover:dark:text-primary-orange text-dark-font dark:text-primary-light font-bold items-center justify-center  hover:ease-in hover:transition-all font-fira-code border-2 border-primary-dark dark:border-primary-light hover:dark:border-primary-orange hover:border-primary-orange rounded-lg bg-secondary-light dark:bg-black flex"
              onClick={onChangeThemeClick}
            >
              {theme === "light" ? (
                <>
                  <FiMoon size={20} className="mr-2" />
                  Dark
                </>
              ) : (
                <>
                  <FiSun size={20} className="mr-2" />
                  Light
                </>
              )}
            </button>
            {isAuthenticated && (
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-dark-font dark:text-primary-light font-bold items-center justify-center hover:text-primary-orange hover:dark:text-primary-orange hover:ease-in hover:transition-all font-fira-code">
                  Orders
                </a>
              </Link>
            )}

            {isAuthenticated && (
              <Link href="/profile">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-dark-font dark:text-primary-light  font-bold items-center justify-center hover:text-primary-orange hover:dark:text-primary-orange hover:ease-in hover:transition-all font-fira-code">
                  Profile
                </a>
              </Link>
            )}

            {!isAuthenticated && (
              <Link href="/login">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-dark-font dark:text-primary-light font-bold items-center justify-center hover:text-primary-orange hover:dark:text-primary-orange hover:ease-in hover:transition-all font-fira-code">
                  Login
                </a>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
