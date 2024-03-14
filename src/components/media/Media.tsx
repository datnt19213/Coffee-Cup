import React from "react";
import {Image12} from "../product/ImageList";
import LinkBtn from "../common/Link";
import {GoArrowUpRight} from "react-icons/go";

const Media = () => {
  return (
    <div className=" flex flex-col gap-3 mt-16">
      <label className="font-semibold text-xl text-primarydark uppercase tracking-tight">
        Follow us on social media
      </label>
      <div className="w-full overflow-hidden rounded-lg flex flex-col md:flex-row justify-center items-start gap-3">
        <div className="rounded-lg md:max-h-96 md:aspect-square bg-slate-100 flex justify-center items-center overflow-hidden">
          <img
            src={Image12}
            alt="media_image"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <LinkBtn
            to="https://facebook.com"
            variant="default"
            mode="line"
            className="flex justify-between items-center p-3 border-b-2 rounded-none hover:text-primarydark hover:opacity-80 transition-all w-full min-w-96 shadow-none"
          >
            <label className="pointer-events-none font-semibold text-lg text-primarydark tracking-tight uppercase">
              Facebook
            </label>
            <GoArrowUpRight className="text-primarydark" />
          </LinkBtn>
          <LinkBtn
            to="https://youtube.com"
            variant="default"
            mode="line"
            className="flex justify-between items-center p-3 border-b-2 rounded-none hover:text-primarydark hover:opacity-80 transition-all w-full min-w-96 shadow-none"
          >
            <label className="pointer-events-none font-semibold text-lg text-primarydark tracking-tight uppercase">
              Youtube
            </label>
            <GoArrowUpRight className="text-primarydark" />
          </LinkBtn>
          <LinkBtn
            to="https://twitter.com"
            variant="default"
            mode="line"
            className="flex justify-between items-center p-3 border-b-2 rounded-none hover:text-primarydark hover:opacity-80 transition-all w-full min-w-96 shadow-none"
          >
            <label className="pointer-events-none font-semibold text-lg text-primarydark tracking-tight uppercase">
              Twitter
            </label>
            <GoArrowUpRight className="text-primarydark" />
          </LinkBtn>
          <LinkBtn
            to="https://instagram.com"
            variant="default"
            mode="line"
            className="flex justify-between items-center p-3 border-b-2 rounded-none hover:text-primarydark hover:opacity-80 transition-all w-full min-w-96 shadow-none"
          >
            <label className="pointer-events-none font-semibold text-lg text-primarydark tracking-tight uppercase">
              Instagram
            </label>
            <GoArrowUpRight className="text-primarydark" />
          </LinkBtn>
        </div>
      </div>
    </div>
  );
};

export default Media;
