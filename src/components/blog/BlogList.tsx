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
} from "../product/ImageList";
import {BlogProps, StringProps} from "../../types/Props";
import MessageBox from "../common/MessageBox";
import LinkBtn from "../common/Link";

export const List = [
  {
    id: 1,
    title: "Exploring Espresso: A Bold and Intense Experience",
    image: Image1,
    content: {
      type: "Espresso",
      description:
        "Espresso, known for its strong and concentrated flavor profile, is a beloved classic among coffee enthusiasts worldwide. Originating from Italy, this bold brew is crafted by forcing hot water through finely-ground coffee beans, resulting in a small but potent shot of coffee. Its intense flavor and rich aroma make it a favorite pick-me-up for those in need of a caffeine boost. Whether enjoyed on its own or as the base for various coffee creations, espresso promises a truly invigorating experience.",
    },
    publisher: "Coffee Enthusiast Magazine",
    datePublished: "2023-05-15",
  },
  {
    id: 2,
    title: "The Art of Cappuccino: A Symphony of Espresso and Foam",
    image: Image2,
    content: {
      type: "Cappuccino",
      description:
        "Indulge in the rich and velvety goodness of a classic Italian favorite – the cappuccino. This harmonious blend of equal parts espresso, steamed milk, and luxurious milk foam creates a sensory delight with every sip. Topped with a delicate sprinkle of cocoa powder or cinnamon, this beloved beverage offers a perfect balance of bold espresso flavor and creamy texture. Whether enjoyed as a morning ritual or a comforting treat throughout the day, the cappuccino never fails to captivate coffee connoisseurs with its timeless appeal.",
    },
    publisher: "Coffee Culture Weekly",
    datePublished: "2023-06-02",
  },
  {
    id: 3,
    title: "Luscious Latte: A Smooth Symphony of Espresso and Milk",
    image: Image3,
    content: {
      type: "Latte",
      description:
        "Step into the realm of indulgence with a luxurious latte experience. Crafted with a perfect harmony of espresso and steamed milk, this velvety-smooth beverage offers a moment of pure bliss with every sip. Topped with a delicate layer of milk foam, the latte captivates the senses with its creamy texture and rich espresso undertones. Whether savored as a morning pick-me-up or a soothing afternoon treat, the latte promises to elevate your coffee experience to new heights of satisfaction.",
    },
    publisher: "Coffee Lovers Gazette",
    datePublished: "2023-07-18",
  },
  {
    id: 4,
    title: "The Allure of Americano: A Milder Brew with Robust Flavor",
    image: Image4,
    content: {
      type: "Americano",
      description:
        "Embark on a journey of flavor with the classic Americano. This beloved coffee drink offers a milder alternative to espresso, yet retains its robust flavor profile and smooth texture. Crafted by diluting espresso with hot water, the Americano delivers a satisfyingly bold cup of coffee reminiscent of traditional drip brews. Whether enjoyed black or with a splash of milk, this versatile beverage is sure to please discerning coffee aficionados seeking a comforting and familiar taste.",
    },
    publisher: "Coffee Connoisseur Quarterly",
    datePublished: "2023-08-05",
  },
  {
    id: 5,
    title: "Macchiato: A Bold Espresso Infusion with a Touch of Creaminess",
    image: Image5,
    content: {
      type: "Macchiato",
      description:
        "Experience the perfect balance of boldness and creaminess with the macchiato. This espresso-based delight features a small amount of steamed milk or milk foam, creating a bold flavor profile with a hint of creaminess. Its name, which means 'stained' or 'marked' in Italian, reflects the essence of this beverage – a masterful fusion of espresso and milk. Whether enjoyed as a quick pick-me-up or a delightful indulgence, the macchiato offers a bold and satisfying coffee experience.",
    },
    publisher: "Espresso Enthusiast",
    datePublished: "2023-09-21",
  },
  {
    id: 6,
    title:
      "Indulge in Decadence with Mocha: Espresso Infused with Chocolate Delight",
    image: Image6,
    content: {
      type: "Mocha",
      description:
        "Satisfy your sweet cravings with the indulgent richness of mocha. This decadent coffee beverage combines the bold flavors of espresso with the velvety smoothness of steamed milk and the irresistible sweetness of chocolate syrup or cocoa powder. Topped with a generous dollop of whipped cream, the mocha offers a delightful treat for the senses. Whether enjoyed as a dessert-like indulgence or a comforting pick-me-up, this luxurious concoction promises to delight coffee lovers with its heavenly flavor.",
    },
    publisher: "Chocolate & Coffee Monthly",
    datePublished: "2023-10-12",
  },
  {
    id: 7,
    title:
      "Discover the Velvety Smoothness of Flat White: A Taste of Down Under",
    image: Image7,
    content: {
      type: "Flat White",
      description:
        "Transport yourself to the shores of Australia and New Zealand with the velvety goodness of flat white. This beloved coffee drink features a higher ratio of coffee to milk compared to a latte, resulting in a richer and more intense flavor profile. Crafted with a smooth and velvety texture, the flat white offers a truly indulgent coffee experience. Whether enjoyed as a morning ritual or an afternoon delight, this Aussie-inspired beverage is sure to captivate your taste buds with its creamy goodness.",
    },
    publisher: "Down Under Coffee Chronicles",
    datePublished: "2023-11-29",
  },
  {
    id: 8,
    title: "Treat Yourself to an Affogato: Where Coffee Meets Dessert",
    image: Image8,
    content: {
      type: "Affogato",
      description:
        "Experience the ultimate marriage of coffee and dessert with the affogato. This delightful treat features a scoop of creamy vanilla ice cream or gelato 'drowned' in a shot of hot espresso. The contrasting temperatures of hot espresso and cold ice cream create a tantalizing sensory experience, while the rich flavors of coffee and cream meld together in perfect harmony. Whether enjoyed as a sweet ending to a meal or a decadent indulgence on its own, the affogato promises to satisfy your cravings and awaken your senses.",
    },
    publisher: "Dessert & Coffee Quarterly",
    datePublished: "2023-12-14",
  },
  {
    id: 9,
    title: "Irish Coffee: A Warm and Whiskey-infused Delight",
    image: Image9,
    content: {
      type: "Irish Coffee",
      description:
        "Embrace the cozy warmth of Irish hospitality with the classic Irish coffee. This beloved cocktail combines hot coffee with a generous splash of Irish whiskey, a touch of sweetness from sugar, and a creamy crown of whipped cream. Whether enjoyed as a festive treat during the holiday season or a comforting nightcap on a chilly evening, Irish coffee promises to warm both body and soul with its rich flavors and inviting aroma. Sip, savor, and let the magic of Ireland transport you to a state of pure bliss.",
    },
    publisher: "Irish Spirit & Coffee Quarterly",
    datePublished: "2024-01-05",
  },
  {
    id: 10,
    title:
      "Journey to the East with Turkish Coffee: A Bold and Unfiltered Brew",
    image: Image11,
    content: {
      type: "Turkish Coffee",
      description:
        "Embark on a sensory journey to the heart of the East with Turkish coffee. This traditional brew is crafted by simmering finely-ground coffee beans with water and sugar in a special pot called a cezve, resulting in a bold and unfiltered beverage bursting with flavor. Served in small cups with grounds settled at the bottom, Turkish coffee offers a unique and immersive coffee-drinking experience. Whether enjoyed as part of a cultural ritual or a moment of quiet reflection, this ancient brew invites you to savor the rich traditions of the East with every sip.",
    },
    publisher: "Eastern Delights Magazine",
    datePublished: "2024-02-18",
  },
  {
    id: 11,
    title: "Vienna Coffee: A Symphony of Espresso and Whipped Cream",
    image: Image12,
    content: {
      type: "Vienna Coffee",
      description:
        "Indulge in the opulent elegance of Vienna coffee, a decadent treat hailing from the heart of Austria. This lavish concoction features a base of rich espresso topped with a generous dollop of whipped cream, creating a luxurious fusion of flavors and textures. Optionally flavored with syrups or liqueurs for an extra touch of indulgence, Vienna coffee offers a truly sumptuous coffee experience. Whether enjoyed as a sophisticated dessert or a delightful afternoon indulgence, this Austrian classic promises to captivate your senses and transport you to the charming streets of Vienna.",
    },
    publisher: "Austrian Coffee Journal",
    datePublished: "2024-03-03",
  },
  {
    id: 12,
    title: "Ristretto: A Short and Intensely Sweet Espresso Experience",
    image: Image13,
    content: {
      type: "Ristretto",
      description:
        "Experience espresso in its purest and most intense form with the ristretto. This short and sweet coffee shot is crafted with a shorter extraction time than traditional espresso, resulting in a sweeter and less bitter flavor profile. By limiting the amount of water used during extraction, the ristretto achieves a heightened concentration of coffee solids, delivering an unparalleled sensory experience. Whether savored as a quick caffeine fix or a moment of pure indulgence, the ristretto promises to awaken your palate and invigorate your senses with its bold flavors and rich aroma.",
    },
    publisher: "Short and Sweet Coffee Monthly",
    datePublished: "2024-04-20",
  },
  {
    id: 13,
    title: "Red Eye: A Powerful Jolt of Caffeine-infused Energy",
    image: Image14,
    content: {
      type: "Red Eye",
      description:
        "In need of an extra boost to kickstart your day? Look no further than the red eye. This potent coffee concoction combines a standard cup of drip coffee with a shot of espresso, delivering a powerful jolt of caffeine-infused energy to fuel your day. Whether tackling a busy morning at the office or embarking on an outdoor adventure, the red eye is the ultimate pick-me-up for those in need of a swift and effective caffeine fix. Brace yourself for an electrifying experience that will keep you energized and focused from dawn till dusk.",
    },
    publisher: "Morning Buzz Gazette",
    datePublished: "2024-05-10",
  },
  {
    id: 14,
    title: "Long Black: A Bold and Flavorful Alternative to Americano",
    image: Image15,
    content: {
      type: "Long Black",
      description:
        "Savor the bold and robust flavor of the long black, a distinctive coffee drink that's sure to tantalize your taste buds. Similar to an Americano but with a unique preparation method, the long black features a double shot of espresso topped with hot water. This creates a strong and flavorful brew that's perfect for those who prefer their coffee with a bold kick. Whether enjoyed as a morning ritual or a midday pick-me-up, the long black promises to satisfy even the most discerning coffee connoisseurs with its rich and intense flavor profile.",
    },
    publisher: "Bold Brews Monthly",
    datePublished: "2024-06-28",
  },
  {
    id: 15,
    title: "Café au Lait: A French Delight of Brewed Coffee and Steamed Milk",
    image: Image1,
    content: {
      type: "Café au Lait",
      description:
        "Indulge in the elegant simplicity of café au lait, a timeless French classic that combines the rich flavors of brewed coffee with the creamy smoothness of steamed milk. Equal parts comforting and sophisticated, this beloved beverage offers a harmonious balance of bold coffee notes and velvety milk texture. Whether enjoyed as a leisurely breakfast companion or an afternoon indulgence, café au lait promises to delight your senses and transport you to the quaint cafes of Paris with every sip.",
    },
    publisher: "Parisian Coffee Quarterly",
    datePublished: "2024-07-12",
  },
];

const copyClipboard = async (val: StringProps) => {
  navigator.clipboard.writeText(val);
};

export const BlogItem: React.FC<BlogProps> = ({
  id,
  title,
  image,
  publisher,
  datePublished,
  content,
}) => {
  const [visible, setVisible] = useState(false);

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
          title={title}
          onClick={() => {
            copyClipboard(title);
            showPopUp();
          }}
        >
          <label className="text-primarydark font-semibold text-lg uppercase tracking-tight">
            {title}
          </label>
        </div>
        <div
          className="w-full min-h-16 max-h-16 overflow-hidden text-ellipsis"
          title={content.description}
          onClick={() => {
            copyClipboard(content.description);
            showPopUp();
          }}
        >
          <p className="text-primarydark font-thin tracking-tight text-sm">
            {content.description}
          </p>
        </div>
        <div className="flex w-full justify-center items-center py-3">
          <LinkBtn
            to={`/blogs/detail/${encodeURIComponent(
              title.replace(/\s/g, "-")
            )}`}
            variant="default"
            mode="fill"
            className="bg-primarydark py-1 px-3 uppercase tracking-tight"
            onClick={() => {
              localStorage.setItem(
                "blogData",
                JSON.stringify({image, publisher, datePublished, content})
              );
            }}
          >
            View More
          </LinkBtn>
        </div>
      </div>
      {visible && <MessageBox val="Copied" />}
    </div>
  );
};
