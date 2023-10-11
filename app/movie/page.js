"use client";
import MovieDisplay from "@/components/display/MovieDisplay";
import SearchDisplay from "@/components/display/SearchDisplay";
import HomeFilter from "@/components/filter/HomeFilter";
import SearchBar from "@/components/searchbar/SearchBar";
import MoviesTitle from "@/components/title/MoviesTitle";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

async function getData() {
  const apiKey = "183c5bd92dfb902bd27a833eb1e701e2";

  const totalPages = 10; // Number of pages to fetch
  let results = [];

  for (let page = 1; page <= totalPages; page++) {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
    );

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await resp.json();
    results = results.concat(data.results);
  }

  return results;
}

const Movies = async () => {
  const moviedata = await getData();

  return (
    <div className=" h-auto">
      <MoviesTitle />
      {/* <SearchBar />
      <HomeFilter /> */}
      <MovieDisplay movies={moviedata} />
    </div>
  );
};

export default Movies;
