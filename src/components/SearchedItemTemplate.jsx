import React from "react";

const SearchedItemTemplate = ({ data }) => {
  function createMarkup() {
    return { __html: data.htmlSnippet };
  }

  return (
    <div className=" flex flex-col py-3 max-w-[900px]">
      <div
        className="group cursor-pointer "
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124]">
          {data.formattedUrl}
        </div>

        <div className="group-hover:underline text-xl text-[#1a0dab] pt-3">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-6 pt-1"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
};

export default SearchedItemTemplate;
