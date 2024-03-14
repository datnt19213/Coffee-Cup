import {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/footer/Footer";
import {IoIosArrowDropupCircle} from "react-icons/io";

const RootLayout = () => {
  const [offset, setOffset] = useState(false);
  const [position, setPosition] = useState(window.scrollY);
  const nav = document.getElementById("nav");

  const GotoTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const offsetVertical = () => {
    setPosition(() => window.scrollY);
    if (position > 300) {
      setOffset(() => true);
      nav?.classList.add("bg-blackshadow");
      nav?.classList.add("bg-opacity-30");
      nav?.classList.add("shadow-md");
      nav?.classList.add("shadow-blackshadow");
    } else {
      setOffset(() => false);
      nav?.classList.remove("bg-blackshadow");
      nav?.classList.remove("bg-opacity-30");
      nav?.classList.remove("shadow-md");
      nav?.classList.remove("shadow-blackshadow");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", offsetVertical);
    // eslint-disable-next-line
  }, [position]);
  return (
    <div className="w-full">
      <div className="w-full shadow-md">
        <Header />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
      <div
        title="Go to top"
        onClick={() => GotoTop()}
        className={` ${
          offset === true ? "flex" : "hidden"
        } flex-row items-center fixed right-3 bottom-5 cursor-pointer rounded-full backdrop-blur-md text-primarywhite text-3xl p-3 bg-blackshadow w-fit`}
      >
        <IoIosArrowDropupCircle />
      </div>
    </div>
  );
};

export default RootLayout;
