import TvDisplay from "@/components/display/TvDisplay";
import HomeFilter from "@/components/filter/HomeFilter";
import SearchBar from "@/components/searchbar/SearchBar";
import TvTitle from "@/components/title/TvTitle";
import React from "react";

async function getData() {
  const apiKey = process.env.API_KEY;

  const totalPages = 10; // Number of pages to fetch
  let results = [];

  for (let page = 1; page <= totalPages; page++) {
    const resp = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`
    );

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await resp.json();
    results = results.concat(data.results);
  }

  return results;
}

const Series = async () => {
  const data = await getData();
  return (
    <>
      <div className=" h-auto">
        <TvTitle />
        {/* <SearchBar />
        <HomeFilter /> */}
        <TvDisplay series={data} />
      </div>
    </>
  );
};

export default Series;
