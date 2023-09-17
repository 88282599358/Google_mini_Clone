import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();  // To extract the query from url to compose bar when we reload
  const [searchQuery, setSearchQuery] = useState(query || "");  // it indicate when query is there so take it otherwise from url
  const navigate = useNavigate();

  const searchQueyHandler = (event) => {
    //if stat that if we press enter and we have query greater than 0 then navigate
    //optional, as indicated by the ?. operator
    /*${searchQuery}: This is likely a template string that includes the value of the searchQuery variable. It's used to construct part of the URL.
    /${1}: This part of the string appears to be constructing the URL with the number 1 as a path parameter. This could indicate that the code is generating a URL for a specific page or result related to the search query.*/
    // see in api.js


    if (event.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
    //also see App.jsx second link
  };
  return (
    <>
      <div className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white  hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
        <AiOutlineSearch size={20} color="#9aa0a6" />
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueyHandler}
          value={searchQuery}
          autoFocus
          className="grow outline-0 text-black/[0.87]"
          placeholder="Search or Enter a url"
        />

        <div className="flex items-center gap-3">
          {searchQuery && (
            <IoMdClose
              size={20}
              color="#70757a"
              className="cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )}
          <img src={MicIcon} className="h-6 w-6 cursor-pointer" alt="Search" />
          <img
            src={ImageIcon}
            className="h-6 w-6 cursor-pointer"
            alt="Search"
          />
        </div>
      </div>
    </>
  );
};

export default SearchInput;