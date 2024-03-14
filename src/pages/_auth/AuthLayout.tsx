import {Outlet} from "react-router-dom";
import Background from "../../assets/background.jpg";

const AuthLayout = () => {
  return (
    <div className=" relative w-full flex flex-col justify-center items-center bg-primarywhite h-dvh">
      <div className="absolute w-full h-full inset-0">
        <img
          src={Background}
          alt="bgimage"
          className="inset-0 object-cover w-full h-full mx-auto"
        />
      </div>
      <div className="z-50 w-full h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
