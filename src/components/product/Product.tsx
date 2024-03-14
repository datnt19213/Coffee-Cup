import React from "react";
import LinkBtn from "../common/Link";
import {VscLinkExternal} from "react-icons/vsc";
import {List, ProductItem} from "./ProductList";

const Product = () => {
  return (
    <div className="w-full flex-col justify-start items-center mt-16 gap-3">
      <label className="font-semibold tracking-tight text-xl uppercase text-primarydark w-full">
        Our Popular Coffee
      </label>
      <div className="w-full flex flex-col justify-start items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden">
        {List.map(
          (item, index) =>
            index < 3 && (
              <ProductItem
                key={index}
                id={item.id}
                type={item.type}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            )
        )}
      </div>
      <div className="w-full flex justify-center items-center">
        <LinkBtn
          to="/product"
          variant="default"
          mode="fill"
          className="bg-primarydark mt-3 flex justify-center items-center max-w-fit max-h-12 gap-3 px-3 py-1 md:p-3"
        >
          <label className="pointer-events-none bg-primarydark">View All</label>
          <VscLinkExternal />
        </LinkBtn>
      </div>
    </div>
  );
};

export default Product;
