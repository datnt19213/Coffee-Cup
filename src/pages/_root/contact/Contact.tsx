import React, {useState} from "react";
import Background from "../../../assets/background.jpg";
import Button from "../../../components/common/Button";
import {EventProps} from "../../../types/Props";
import LinkBtn from "../../../components/common/Link";

const Contact = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: EventProps) => {
    const file = e.target.files[0];
    if (file) {
      setFileName("File: " + file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-dvh overflow-hidden">
        <img
          src={Background}
          alt="contact-img"
          className="h-full w-full object-cover"
        />
      </div>
      <form
        method="post"
        encType="multipart/form-data"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md p-8 rounded-xl flex flex-col justify-center items-center gap-3 shadow-md shadow-blackshadow min-w-96"
      >
        <div className="pb-5">
          <label className="font-semibold uppercase tracking-tight text-primarywhite text-xl">
            Contact Us
          </label>
        </div>
        <div className="w-full">
          <input
            className="h-8 text-sm outline-none w-full border-primaryviolet focus:border-2 rounded-lg px-3"
            type="text"
            name="contactName"
            id="contact-name"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full">
          <input
            className="h-8 text-sm outline-none w-full border-primaryviolet focus:border-2 rounded-lg px-3"
            type="email"
            name="contactName"
            id="contact-name"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full">
          <textarea
            className="resize-none text-sm outline-none w-full border-primaryviolet focus:border-2 rounded-lg px-3 py-1 h-52"
            name="contactName"
            id="contact-name"
            maxLength={500}
            placeholder="Enter your content"
          />
        </div>
        <div className="w-full overflow-hidden pb-5 flex justify-start items-center gap-3">
          <input
            type="file"
            name="file-contact-attach"
            id="file-contact-attach"
            hidden
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-contact-attach"
            className="bg-primarywhite px-3 py-1 rounded-lg cursor-pointer hover:opacity-80 transition-all"
          >
            Attach File
          </label>
          <label className="text-primarywhite underline">{fileName}</label>
        </div>
        <Button
          variant="default"
          mode="fill"
          type="submit"
          className="bg-primarygreen px-3 py-1"
        >
          Submit
        </Button>
        <LinkBtn
          to="/"
          variant="default"
          mode="ghost"
          className="flex items-center gap-1 text-sm text-primarywhite underline hover:bg-transparent hover:text-primaryyellow transition-all "
        >
          Home Page
        </LinkBtn>
      </form>
    </div>
  );
};

export default Contact;
