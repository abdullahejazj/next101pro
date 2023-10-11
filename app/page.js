import HomeDisplay from "@/components/display/HomeDisplay";
import HomeFilter from "@/components/filter/HomeFilter";
import SearchBar from "@/components/searchbar/SearchBar";
import Title from "@/components/title/Title";
import Search from "./search/page";

async function getData() {
  const apiKey = "183c5bd92dfb902bd27a833eb1e701e2";
  const resp = await fetch(
    // `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=1`
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await resp.json();
  let res = data.results;
  return res;
}

async function getMoviesData() {
  const resp = await fetch(
    `https://123-movies.world/api/url/putlocker2.monster`
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await resp.json();
  let res = data;

  return res;
}

export default async function Home({}) {
  const data = await getData();
  const moviesData = await getMoviesData();
  return (
    <div className=" ">
      <section
        class="bg-cover bg-top-left bg-no-repeat pb-40 pt-56 relative flex items-center justify-center text-white "
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
      <Search isOnHomePage={true} />
      {/* <SearchBar />
      
      <HomeFilter /> */}
      <div className="flex justify-center items-center py-2">
        <a
          class="bg-[#DC2626] hover:bg-[#DC2626] py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-[#DC2626]-700 hover:border-[white]-800 transition duration-300"
          href="/home"
        >
          Visit For More Movies
        </a>
      </div>
      <div
        className=" px-20 indexcontent"
        dangerouslySetInnerHTML={{ __html: moviesData?.website_content }}
      ></div>
      ;
    </div>
  );
}
