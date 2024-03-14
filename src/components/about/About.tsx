import React from "react";
import LinkBtn from "../common/Link";
import {VscLinkExternal} from "react-icons/vsc";
import {Image10} from "../product/ImageList";

const About = () => {
  return (
    <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 max-w-full md:max-w-1/2 gap-3 md:gap-12">
      <div className="overflow-hidden rounded-lg h-full flex flex-col justify-center items-start">
        <img src={Image10} alt="about" className="object-contain" />
      </div>
      <div className="w-full h-full flex flex-col justify-start md:justify-center items-start gap-3">
        <label className="font-semibold tracking-tight text-xl uppercase text-primarydark">
          About Us
        </label>
        <p className="text-sm font-thin">
          At Coffee Cup, we're more than just a place to grab a cup of coffee.
          We're a community hub where friends gather, ideas flourish, and
          memories are made. With a dedication to quality and a passion for
          flavor, each brew is meticulously crafted to perfection. Step into our
          cozy space and let the aroma of freshly roasted beans envelop you.
          Join us in celebrating the joy of coffee, one cup at a time.
        </p>
        <LinkBtn
          to="/about"
          variant="default"
          mode="fill"
          className="bg-primarydark mt-3 flex justify-center items-center max-w-fit max-h-8 md:max-h-12 gap-3 px-3 py-1 md:p-3"
        >
          <label className="pointer-events-none font-medium uppercase tracking-tight">
            Learn More
          </label>
          <VscLinkExternal />
        </LinkBtn>
      </div>
    </div>
  );
};

export default About;
