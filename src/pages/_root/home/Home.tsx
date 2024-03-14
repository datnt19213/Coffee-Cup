import React from "react";
import Background from "../../../assets/bachground2.jpg";
import Cup from "../../../assets/coffee_cup.png";
import {VscLinkExternal} from "react-icons/vsc";
import Link from "../../../components/common/Link";
import About from "../../../components/about/About";
import Product from "../../../components/product/Product";
import Media from "../../../components/media/Media";

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative w-full flex flex-col items-start justify-center">
        <div className="relative w-full">
          <div className="w-full md:w-auto h-auto md:h-dvh overflow-hidden brightness-50">
            <img
              src={Background}
              alt="background"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute top-0 scale-50 -right-36 bottom-0 brightness-90">
            <img
              src={Cup}
              alt="coffee_cup"
              className="backdrop-brightness-100"
            />
          </div>
        </div>
        <div className="absolute w-full flex flex-col items-center md:items-start md:w-1/2 md:ml-36 px-3 gap-5 pt-12 pb-3">
          <div className="w-full flex flex-col justify-center items-center md:items-start gap-3">
            <p className="font-thin text-primarywhite">
              Quality Coffee Fuels Passion
            </p>
            <label className="text-2xl md:text-3xl font-bold text-primarywhite uppercase leading-tight">
              Start Your Day With A Coffee Cup
            </label>
            <p className="hidden md:flex text-primarywhite">
              Welcome to Coffee Cup, where every cup tells a story and every sip
              is an adventure into the rich and aromatic world of coffee.
            </p>
          </div>
          <Link
            to="/product"
            variant="default"
            mode="fill"
            className="bg-primarywhite gap-3 font-medium px-3 py-1 md:p-3 max-w-fit flex justify-center items-center"
          >
            <label className="pointer-events-none uppercase tracking-tight text-primarydark">
              Order Now
            </label>
            <VscLinkExternal className="text-primarydark" />
          </Link>
        </div>
      </div>
      {/**
       * about
       */}
      <div className="w-full px-8 md:px-20 py-32 md:py-24 flex flex-col justify-start items-center">
        <About />
        <Product />
        <Media />
      </div>
    </div>
  );
};

export default Home;
