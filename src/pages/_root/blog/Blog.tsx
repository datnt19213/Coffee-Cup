import React from "react";
import {BlogItem, List} from "../../../components/blog/BlogList";
import Button from "../../../components/common/Button";
import {RiSearch2Line} from "react-icons/ri";

const Blog = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center relative gap-3 top-0 pt-24 px-5 bg-primarydark py-5">
      <div className="w-full h-8 flex justify-center items-center">
        <input
          type="search"
          name="search-blog"
          id="search-blog"
          className="h-full w-5/6 min-w-80 md:w-1/3 rounded-l-full px-3 font-light text-sm outline-none border-primaryviolet"
        />
        <Button
          variant="icon"
          mode="line"
          className="h-full border-none flex justify-center items-center rounded-l-none group transition-all"
        >
          <RiSearch2Line className="text-primarydark group-hover:text-opacity-70" />
        </Button>
      </div>
      <div className="w-5/6 flex flex-col justify-start items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-hidden">
        {List.map((item, index) => (
          <BlogItem
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            publisher={item.publisher}
            datePublished={item.datePublished}
            content={{
              type: item.content.type,
              description: item.content.description,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
