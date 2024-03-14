import Logo from "../../assets/logo.png";
import {IoMdMenu} from "react-icons/io";
import Link from "../common/Link";
import Button from "../common/Button";
// eslint-disable-next-line
import {HiOutlineUserCircle} from "react-icons/hi2";
import {IoCloseOutline} from "react-icons/io5";
import {useEffect, useRef, useState} from "react";
import {EventProps, RefProps} from "../../types/Props";

const Header = () => {
  const [close, setClose] = useState(true);
  const mobileMenuRef = useRef<RefProps>(null);

  const ShowSideMenu = () => {
    setClose(false);
  };
  const CloseSideMenu = () => {
    setClose(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: EventProps) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        CloseSideMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <>
      <div
        id="nav"
        className="z-50 backdrop-blur-md h-20 px-3 md:px-24 fixed top-0 w-full overflow-hidden flex flex-row justify-between items-center"
      >
        <Link
          to="/"
          className="relative opacity-80 cursor-pointer h-4/5 overflow-hidden flex justify-center items-center"
        >
          <img
            src={Logo}
            alt="logo"
            id="logo"
            className="max-h-20 aspect-square h-full invert"
          />
          <label
            id="logo-text"
            className="pointer-events-none absolute text-xs text-primarywhite mt-3 backdrop-blur-sm "
          >
            Coffee Cups
          </label>
        </Link>
        <ul className="hidden md:flex flex-row justify-center items-center h-4/5">
          <Link
            to="/"
            className="h-full flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer px-3"
          >
            <label className="whitespace-nowrap pointer-events-none">
              Home
            </label>
          </Link>
          <Link
            to="/product"
            className="h-full flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer px-3"
          >
            <label className="whitespace-nowrap pointer-events-none">
              Coffee
            </label>
          </Link>
          <Link
            to="/blog"
            className="h-full flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer px-3"
          >
            <label className="whitespace-nowrap pointer-events-none">
              Blog
            </label>
          </Link>
          <Link
            to="/about"
            className="h-full flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer px-3"
          >
            <label className="whitespace-nowrap pointer-events-none">
              About
            </label>
          </Link>
          <Link
            to="/contact"
            className="h-full flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer px-3"
          >
            <label className="whitespace-nowrap pointer-events-none">
              Contact
            </label>
          </Link>
        </ul>
        <div className="flex flex-row justify-center items-center h-3/5 gap-1">
          <Link
            to="/sign-in"
            className="px-5 bg-primarygreen rounded-full flex flex-row justify-center items-center tracking-tight"
            variant="default"
            mode="fill"
          >
            <label className="whitespace-nowrap pointer-events-none">
              Sign in
            </label>
          </Link>
          <Link
            to="/sign-up"
            className="px-5 bg-primarygreen rounded-full flex flex-row justify-center items-center tracking-tight"
            variant="default"
            mode="fill"
          >
            <label className="whitespace-nowrap pointer-events-none">
              Sign up
            </label>
          </Link>
          {/* authencation to show  */}
          {/* <Link
            to="/profile"
            variant="icon"
            mode="fill"
            className={`mx-1 bg-transparent rounded-full bg-opacity-30 text-primarywhite flex justify-center items-center text-4xl hover:bg-blackshadow transition-all`}
          >
            <HiOutlineUserCircle />
          </Link> */}
          <Button
            variant="icon"
            mode="fill"
            className="md:hidden ml-1 bg-transparent rounded-full bg-opacity-30 text-primarywhite flex justify-center items-center text-3xl hover:bg-blackshadow transition-all"
            onClick={() => ShowSideMenu()}
          >
            <IoMdMenu />
          </Button>
        </div>
      </div>
      {/**
       * menu side
       *
       * */}

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${
          close === true ? "hidden" : "md:hidden fixed"
        } top-3 right-1 z-50 rounded-xl flex flex-col justify-start items-end px-8 py-5 w-full max-h-fit max-w-96 h-fit backdrop-blur-md bg-blackshadow`}
      >
        <Button
          variant="icon"
          mode="fill"
          className="ml-1 bg-transparent rounded-full bg-opacity-30 text-primarywhite flex justify-center items-center text-3xl hover:bg-blackshadow transition-all"
          onClick={() => CloseSideMenu()}
        >
          <IoCloseOutline />
        </Button>
        <ul className="flex flex-col justify-start items-start h-fit w-full">
          <Link
            to="/"
            className="h-12 max-h-12 flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer w-full"
          >
            <label className="whitespace-nowrap pointer-events-none w-full text-left ">
              Home
            </label>
          </Link>
          <Link
            to="/product"
            className="h-12 max-h-12 flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer w-full"
          >
            <label className="whitespace-nowrap pointer-events-none w-full text-left ">
              Coffee
            </label>
          </Link>
          <Link
            to="/blog"
            className="h-12 max-h-12 flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer w-full"
          >
            <label className="whitespace-nowrap pointer-events-none w-full text-left ">
              Blog
            </label>
          </Link>
          <Link
            to="/about"
            className="h-12 max-h-12 flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer w-full"
          >
            <label className="whitespace-nowrap pointer-events-none w-full text-left ">
              About
            </label>
          </Link>
          <Link
            to="/contact"
            className="h-12 max-h-12 flex flex-row justify-center items-center tracking-tight text-lg cursor-pointer w-full"
          >
            <label className="whitespace-nowrap pointer-events-none w-full text-left ">
              Contact
            </label>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
