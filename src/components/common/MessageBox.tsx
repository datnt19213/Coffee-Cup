import React from "react";
import {PopUpProps} from "../../types/Props";
import {FaCheck} from "react-icons/fa6";
import {IoWarning} from "react-icons/io5";
import {MdOutlineError} from "react-icons/md";

const MessageBox = ({val}: PopUpProps) => {
  if (val === "Copied") {
    return (
      <div
        className={`fixed z-50 flex justify-center items-center aspect-video top-1/2 -translate-y-1/2 mx-auto transition-opacity duration-500 rounded-lg animate-bounce ease-in-out
        bg-primaryviolet px-1 text-primarywhite`}
      >
        <p>{val}</p>
      </div>
    );
  }
  if (val === "Success") {
    return (
      <div className="fixed z-50 flex flex-col justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 animate-bounce ease-in-out min-w-36 aspect-square bg-primarywhite rounded-lg">
        <FaCheck />
        <p>{val}</p>
      </div>
    );
  }
  if (val === "Warning") {
    return (
      <div className="fixed z-50 flex flex-col justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 animate-bounce ease-in-out min-w-36 aspect-square bg-primarywhite rounded-lg">
        <IoWarning />
        <p>{val}</p>
      </div>
    );
  }
  if (val === "Error") {
    return (
      <div className="fixed z-50 flex flex-col justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 animate-ping ease-in-out min-w-36 aspect-square bg-primarywhite rounded-lg">
        <MdOutlineError />
        <p>{val}</p>
      </div>
    );
  }

  return (
    <div className="">
      <p>{val}</p>
    </div>
  );
};

export default MessageBox;
