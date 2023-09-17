import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";

import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchResultHeader from "./SearchResultHeader";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

// ...

const SearchResult = () => {
  const [result, setResult] = useState(null);
  const { query, startIndex } = useParams(); //to get query and startIndex of url
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    if (query && startIndex && imageSearch) {
      console.log("Fetching search results...");
      fetchSearchResult();
    } else {
      console.log(
        "Not fetching search results because conditions are not met."
      );
    }
  }, [query, startIndex, imageSearch]);


  
  const fetchSearchResult = async () => {
    let payload = { q: encodeURIComponent(query), start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    try {
      const res = await fetchDataFromApi(payload);
      console.log(res);
      setResult(res);
    } catch (error) {
      console.error("Error fetching search result:", error);
    }
  };

  if (!result) {
    return (
      <div className="flex flex-col min-h-[100vh]">
        <SearchResultHeader />
        <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
          <div className="flex text-sm text-[#70757a] mb-3">
            {/* Display a message or loading indicator when result is undefined */}
            Loading...
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  // if (!result) return;
  const { items, queries, searchInformation } = result;

  return (
    <div className="flex flex-col min-w-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#70757a] mb-3">
          {`About ${searchInformation.formattedTotalResults} result in (${searchInformation.formattedSearchTime})`}
        </div>
        {!imageSearch ? (
          <>
            {items.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-20">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}

        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
