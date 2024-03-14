import React, {useEffect, useRef} from "react";
import Button from "../common/Button";
import {IoCloseOutline} from "react-icons/io5";
import {EventProps, OrderProps, RefProps} from "../../types/Props";

const Order = ({type, price, close}: OrderProps) => {
  const setClose = () => {
    close(false);
  };

  const popUpRef = useRef<RefProps>(null);
  useEffect(() => {
    const handleClickOutside = (e: EventProps) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target as Node)) {
        setClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [popUpRef]);

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-blackshadow">
      <form
        ref={popUpRef}
        method="post"
        encType="multipart/form-data"
        className="backdrop-blur-md p-8 rounded-xl flex flex-col justify-center items-center gap-3 shadow-md bg-primarywhite min-w-96 max-w-sm"
      >
        <div className="py-5 relative w-full flex justify-center items-center">
          <Button
            variant="icon"
            mode="ghost"
            className="p-1 rounded-lg absolute -top-8 -right-8 flex justify-center items-center"
            onClick={() => setClose()}
          >
            <IoCloseOutline className="text-primarydark text-3xl" />
          </Button>
          <label className="font-semibold uppercase tracking-tight text-primarydark text-xl">
            Order
          </label>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label className="">Name</label>
          <input
            className="h-8 text-sm outline-none w-full border-primaryviolet border-2 rounded-lg px-3"
            type="text"
            name="orderName"
            id="order-name"
            value={type}
            readOnly={true}
            disabled={true}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label className="">Price</label>
          <input
            className="h-8 text-sm outline-none w-full border-primaryviolet border-2 rounded-lg px-3"
            type="text"
            name="orderPrice"
            id="order-price"
            value={price}
            readOnly={true}
            disabled={true}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label className="">Delivery Address</label>
          <input
            className="h-8 text-sm outline-none w-full border-primaryviolet border-2 rounded-lg px-3"
            type="text"
            name="orderAddress"
            id="order-address"
            placeholder="Enter your address"
          />
        </div>
        <Button
          variant="default"
          mode="fill"
          type="submit"
          className="bg-primarygreen px-3 py-1"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Order;
