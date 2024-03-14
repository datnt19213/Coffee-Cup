import React from "react";
import {Image1} from "../../../components/product/ImageList";

const About = () => {
  return (
    <div className="w-full py-36 bg-primarydark px-5">
      <div className="gap-5 bg-primarywhite mx-auto px-8 rounded-xl py-12 w-full max-w-2xl min-w-96 flex flex-col justify-start items-center">
        <div className="w-full flex justify-center items-center">
          <label className="text-3xl font-semibold tracking-tight">
            About Us
          </label>
        </div>
        <div className="w-full flex justify-center items-center">
          <label className="">
            Welcome to Coffee Cup, where every cup tells a story!
          </label>
        </div>
        <div className="overflow-hidden rounded-full max-h-56 aspect-square shadow-md shadow-blackshadow">
          <img src={Image1} alt="about_img" className="h-full object-cover" />
        </div>
        <div className="w-full flex justify-center items-center">
          <label className="uppercase font-semibold text-lg tracking-tight">
            Coffee Cup
          </label>
        </div>
        <label className="text-justify tracking-tight">
          At Coffee Cup, we're more than just a coffee shop – we're a community
          hub, a place where friends gather, ideas percolate, and moments are
          savored. Our journey began many years ago with a simple dream: to
          create a welcoming space where people could connect over exceptional
          coffee.
        </label>
        <label className="text-justify tracking-tight">
          Our founder, Joe Leviathan, envisioned a place where passion for
          coffee met a commitment to community. Inspired by the bustling coffee
          culture of France. What sets Coffee Cup apart is our dedication to
          quality at every step of the journey. From sourcing the finest beans
          to expertly crafting each cup, we pour our hearts into every aspect of
          our craft. We work closely with local roasters and global suppliers to
          ensure that every blend reflects the rich diversity and complexity of
          the coffee world.
        </label>
        <label className="text-justify tracking-tight">
          Step inside Coffee Cup, and you'll find more than just great coffee –
          you'll discover a welcoming atmosphere where strangers become friends
          and conversations flow as freely as the espresso. Our cozy seating
          areas, inviting decor, and friendly baristas create a space that feels
          like home, no matter where you're from.
        </label>
        <label className="text-justify tracking-tight">
          But Coffee Cup is more than just a place to grab your morning brew.
          It's a place to linger over a latte with a good book, to catch up with
          friends over a cappuccino, or to dive into work with the perfect
          pour-over by your side. Our free Wi-Fi and comfortable ambiance make
          it the ideal spot for remote work, study sessions, or simply unwinding
          after a long day.
        </label>
        <label className="text-justify tracking-tight">
          We believe in giving back to the community that has embraced us so
          warmly. That's why Coffee Cup is committed to supporting local causes
          and initiatives that make a difference. From sponsoring community
          events to partnering with local charities, we're always looking for
          ways to give back and make a positive impact.
        </label>
        <label className="text-justify tracking-tight">
          As we continue to grow and evolve, our mission remains unchanged: to
          provide a haven where everyone feels welcomed, valued, and inspired.
          Whether you're a coffee connoisseur or a casual sipper, we invite you
          to join us at Coffee Cup and become a part of our story.
        </label>
        <label className="tracking-tight font-semibold">
          Thank you for being a part of our journey.
        </label>
        <label className="tracking-tight font-semibold underline">
          Sincerely from The Coffee Cup Team.
        </label>
      </div>
    </div>
  );
};

export default About;
