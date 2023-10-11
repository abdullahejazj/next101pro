import HomeDisplay from "@/components/display/HomeDisplay";
import HomeFilter from "@/components/filter/HomeFilter";
import SearchBar from "@/components/searchbar/SearchBar";
import Title from "@/components/title/Title";
import Link from "next/link";

async function getData() {
  const apiKey = process.env.API_KEY;

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

export default async function Home() {
  const data = await getData();
  return (
    <div className="">
      <section
        class="bg-cover bg-top-left bg-no-repeat pt-96 pb-40 relative flex  items-center justify-center text-white "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data[0].backdrop_path})`,
        }}
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="z-10 text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {data[0].title}
          </h1>
          <p class="text-lg md:text-xl mb-8 px-96">{data[0].overview}</p>
          <div class="flex justify-center">
            <a
              href="#"
              class="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              Start Watching
            </a>
          </div>
        </div>
      </section>

      {/* <SearchBar />
      <HomeFilter /> */}
      <HomeDisplay movies={data} />
    </div>
  );
}
