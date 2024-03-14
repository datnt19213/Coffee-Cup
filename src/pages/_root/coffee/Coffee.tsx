import React from "react";
import {List, ProductItem} from "../../../components/product/ProductList";

const Coffee = () => {
  return (
    <div className="w-full flex justify-center items-start relative gap-3 top-0 pt-24 px-5 bg-primarydark py-5">
      <div className="w-5/6 flex flex-col justify-start items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-hidden">
        {List.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            type={item.type}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
