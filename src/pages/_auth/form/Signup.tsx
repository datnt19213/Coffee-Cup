import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/common/Button";

const Signup = () => {
  return (
    <form
      id="signin-form"
      encType="multipart/form-data"
      method="post"
      className="backdrop-blur-md gap-12 shadow-lg shadow-blackshadow w-11/12 md:w-2/6 max-w-96 min-w-80 py-8 px-12 rounded-xl flex flex-col justify-center items-center"
    >
      <label className="text-primarywhite font-semibold text-2xl tracking-tight">
        Sign up your account
      </label>
      <div className="flex flex-col gap-5 w-full items-center">
        <input
          type="text"
          name="username-sign-up"
          id="username-sign-up"
          placeholder="Enter Username"
          className="w-full bg-transparent h-8 border-b-2 placeholder-primarywhite focus:outline-none placeholder:opacity-70 text-primarywhite"
        />
        <input
          type="password"
          name="password-sign-up"
          id="password-sign-up"
          placeholder="Enter Password"
          className="w-full bg-transparent h-8 border-b-2 placeholder-primarywhite focus:outline-none placeholder:opacity-70 text-primarywhite"
        />

        <input
          type="password"
          name="confirm-password-sign-up"
          id="confirm-password-sign-up"
          placeholder="Confirm Password"
          className="w-full bg-transparent h-8 border-b-2 placeholder-primarywhite focus:outline-none placeholder:opacity-70 text-primarywhite"
        />

        <Button
          mode="fill"
          variant="default"
          type="submit"
          id="submit-sign-up"
          className="mt-3 py-1 px-3 rounded-full bg-primarygreen hover:opacity-80 transition-all w-fit text-primarywhite"
        >
          Sign up
        </Button>

        <Link
          to="/sign-in"
          className="text-sm text-primarywhite underline hover:text-primaryyellow transition-all "
        >
          Already have an account?
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-primarywhite underline hover:text-primaryyellow transition-all "
        >
          Home Page
        </Link>
      </div>
    </form>
  );
};

export default Signup;
