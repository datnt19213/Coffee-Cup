import React from "react";
import {useParams} from "react-router-dom";
import {StringProps} from "../../../types/Props";
import {
  // eslint-disable-next-line
  Image1,
  // eslint-disable-next-line
  Image11,
  // eslint-disable-next-line
  Image12,
  // eslint-disable-next-line
  Image13,
  // eslint-disable-next-line
  Image14,
  // eslint-disable-next-line
  Image15,
  // eslint-disable-next-line
  Image2,
  // eslint-disable-next-line
  Image3,
  // eslint-disable-next-line
  Image4,
  // eslint-disable-next-line
  Image5,
  // eslint-disable-next-line
  Image6,
  // eslint-disable-next-line
  Image7,
  // eslint-disable-next-line
  Image8,
  // eslint-disable-next-line
  Image9,
  // eslint-disable-next-line
} from "../../../components/product/ImageList";

const BlogDetail = () => {
  const {id} = useParams<{id?: StringProps}>() ?? {};
  if (!id) {
    return <div>No blog ID provided</div>;
  }
  const blogData = localStorage.getItem("blogData");
  if (!blogData) {
    // Handle the case where blogData is missing
    return <div>No blog data found</div>;
  }
  const {image, publisher, datePublished, content} = JSON.parse(blogData);
  const decodedName = decodeURIComponent(id.replace(/-/g, " "));
  return (
    <div className="w-full px-5 bg-primarydark py-36">
      <div className="w-full max-w-2xl mx-auto min-w-96 bg-primarywhite px-8 py-12 rounded-xl flex flex-col justify-start items-center gap-5">
        <div className="w-full flex justify-start items-start">
          <label className="font-semibold uppercase text-primarydark text-3xl">
            {content.type}:{decodedName}
          </label>
        </div>
        <div className="w-full flex justify-start items-center gap-5">
          <label className="font-extralight text-sm text-primaryviolet">
            {datePublished}
          </label>
          <label className="font-extralight text-sm text-primaryyellow">
            Published by {publisher}
          </label>
        </div>
        <div className="w-full flex justify-start items-start">
          <img src={image} alt="blog_img" />
        </div>
        <div className="w-full flex justify-start items-start text-justify">
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
