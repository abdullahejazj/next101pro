import TvInfo from "@/components/info/TvInfo";

export async function getData(id) {
  const apiKey = "183c5bd92dfb902bd27a833eb1e701e2";
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`
  );
  let data = await res.json();
  let genreArr = [];

  data.genres.map((element) => {
    genreArr.push(element.name);
  });

  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }

  return { data, genreArr, id };
}
const TvDetail = async ({ params }) => {
  let { data, genreArr, id } = await getData(params.id);
  return (
    <>
      <TvInfo TvDetail={data} genreArr={genreArr} id={id} />
    </>
  );
};

export default TvDetail;
