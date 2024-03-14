import React, {useState} from "react";
import {
  Image1,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
} from "./ImageList";
import {BooleanProps, ProductProps, StringProps} from "../../types/Props";
import Button from "../common/Button";
import MessageBox from "../common/MessageBox";
import Order from "../order/Order";

export const List = [
  {
    id: 1,
    image: Image1,
    type: "Espresso",
    price: "15$",
    description:
      "A strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans, typically served in small shots.",
  },
  {
    id: 2,
    image: Image2,
    type: "Cappuccino",
    price: "15$",
    description:
      "A classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam, often topped with a sprinkle of cocoa powder or cinnamon.",
  },
  {
    id: 3,
    image: Image3,
    type: "Latte",
    price: "15$",
    description:
      "A creamy and smooth coffee beverage made with espresso and steamed milk, typically with a thin layer of milk foam on top.",
  },
  {
    id: 4,
    image: Image4,
    type: "Americano",
    price: "15$",
    description:
      "A coffee drink made by diluting espresso with hot water, resulting in a milder and larger cup of coffee similar to drip coffee.",
  },
  {
    id: 5,
    image: Image5,
    type: "Macchiato",
    price: "15$",
    description:
      "An espresso 'stained' or 'marked' with a small amount of steamed milk or milk foam, creating a bolder flavor compared to a latte or cappuccino.",
  },
  {
    id: 6,
    image: Image6,
    type: "Mocha",
    price: "15$",
    description:
      "A decadent coffee beverage made with espresso, steamed milk, and chocolate syrup or cocoa powder, often topped with whipped cream.",
  },
  {
    id: 7,
    image: Image7,
    type: "Flat White",
    price: "15$",
    description:
      "Similar to a latte but with a higher ratio of coffee to milk and a velvety texture, originating from Australia and New Zealand.",
  },
  {
    id: 8,
    image: Image8,
    type: "Affogato",
    price: "15$",
    description:
      "A dessert-like coffee treat consisting of a scoop of vanilla ice cream or gelato 'drowned' in a shot of hot espresso.",
  },
  {
    id: 9,
    image: Image9,
    type: "Irish Coffee",
    price: "15$",
    description:
      "A cocktail made with hot coffee, Irish whiskey, sugar, and topped with cream, often served in a glass mug.",
  },
  {
    id: 10,
    image: Image11,
    type: "Turkish Coffee",
    price: "15$",
    description:
      "A strong and unfiltered coffee brewed by simmering finely-ground coffee beans with water and sugar in a special pot called a cezve, traditionally served in small cups with grounds settled at the bottom.",
  },
  {
    id: 11,
    image: Image12,
    type: "Vienna Coffee",
    price: "15$",
    description:
      "A rich and indulgent coffee drink made with espresso, whipped cream, and sometimes flavored syrups or liqueurs, originating from Vienna, Austria.",
  },
  {
    id: 12,
    image: Image13,
    type: "Ristretto",
    price: "15$",
    description:
      "An even more concentrated and intense version of espresso, made with a shorter extraction time, resulting in a sweeter and less bitter flavor.",
  },
  {
    id: 13,
    image: Image14,
    type: "Red Eye",
    price: "15$",
    description:
      "A coffee drink made by adding a shot of espresso to a cup of drip coffee, providing an extra kick of caffeine.",
  },
  {
    id: 14,
    image: Image15,
    type: "Long Black",
    price: "15$",
    description:
      "Similar to an Americano, but with a different preparation method where hot water is poured over a double shot of espresso, creating a stronger and more flavorful drink.",
  },
  {
    id: 15,
    image: Image1,
    type: "Café au Lait",
    price: "15$",
    description:
      "A French coffee drink made with equal parts brewed coffee and steamed milk, resulting in a creamy and smooth beverage.",
  },
];

const copyClipboard = async (val: StringProps) => {
  navigator.clipboard.writeText(val);
};

export const ProductItem: React.FC<ProductProps> = ({
  id,
  image,
  type,
  price,
  description,
}) => {
  const [visible, setVisible] = useState(false);
  const [order, setOrder] = useState(false);

  const showOrder = () => {
    setOrder(true);
  };

  const closeOrderPopup = (val: BooleanProps) => {
    setOrder(false);
  };

  const showPopUp = () => {
    setVisible(true);
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="bg-primarywhite rounded-xl md:w-full overflow-hidden w-full my-8 gap-3 flex flex-col justify-start items-center">
      <div className="w-full max-h-52 overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt="product"
          className="min-h-52 w-full object-cover hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="px-3 w-full flex-col justify-start items-center gap-5">
        <div
          className="max-h-8 overflow-hidden"
          title={type}
          onClick={() => {
            copyClipboard(type);
            showPopUp();
          }}
        >
          <label className="text-primarydark font-semibold text-lg uppercase tracking-tight">
            {type}
          </label>
        </div>
        <div
          className="w-full min-h-16 max-h-16 overflow-hidden text-ellipsis"
          title={description}
          onClick={() => {
            copyClipboard(description);
            showPopUp();
          }}
        >
          <p className="text-primarydark font-thin tracking-tight text-sm">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center py-3">
          <label className="text-primarydark font-thin tracking-tight text-xl">
            {price}
          </label>
          <Button
            variant="default"
            mode="fill"
            className="bg-primarydark py-1 px-3 uppercase tracking-tight"
            onClick={() => {
              showOrder();
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
      {visible && <MessageBox val="Copied" />}
      {order && <Order type={type} price={price} close={closeOrderPopup} />}
    </div>
  );
};
