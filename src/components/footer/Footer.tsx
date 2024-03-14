import {PiCopyright} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full py-5 tracking-tight bg-primaryyellow text-primarydark flex justify-center items-center">
      <label className="flex justify-center items-center gap-1">
        <span>Copyright by Coffee Cups</span>
        <span className="-mt-1">
          <PiCopyright />
        </span>
        {new Date().getFullYear()}
      </label>
    </div>
  );
};

export default Footer;
