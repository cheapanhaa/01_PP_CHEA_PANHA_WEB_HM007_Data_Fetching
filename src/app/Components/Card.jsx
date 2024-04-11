import { getAllMovies } from "../Service/movieService";
import Link from "next/link";
export default async function Card() {
  const allMovies = await getAllMovies();
  return (
    <main>
      <div className="bg-gray-900 min-h-screen p-4">
        <div className=" bg-red-500 font-bold m-2 p-4 text-xl">
          <h1 className="text-white">All Movies &gt; </h1>
        </div>
        <div className="shadow-2xl w-full p-4 grid grid-flow-col gap-10 max-w-screen-xl overflow-x-scroll scrollbar-hide ">
          {allMovies.payload.map((movieData) => (
            <div key={movieData.movie_id} className="mb-4 bg-white w-[300px]">
              <Link href={`/view-detail-movie/${movieData.movie_id}`}>
                <img
                  class="h-60 w-auto object-cover object-center line-clamp-5 "
                  src={
                    movieData.image
                      ? movieData.image
                      : "https://th.bing.com/th/id/R.853229965c28f60b9c7e78f54962ae07?rik=VzLU4xXBUXHntQ&pid=ImgRaw&r=0"
                  }
                  alt="Home in Countryside"
                />

                <div className="px-6 py-4">
                  <h2 className="text-lg font-bold leading-tight text-gray-900">
                    {movieData.movie_title}
                  </h2>
                  <p className="mt-2 text-gray-900 line-clamp-4">
                    {movieData.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
          ;
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen p-4">
        <div className=" bg-red-500 font-bold m-2 p-4 text-xl">
          <h1 className="text-white">Action Movie &gt;</h1>
        </div>
        <div className="rounded-5 shadow-2xl w-full p-4 grid grid-flow-col gap-10 max-w-screen-xl overflow-x-scroll scrollbar-hide ">
          {allMovies.payload
            .filter((movieData) => movieData.genre == "Action")
            .map((movieData) => (
              <div key={movieData.movie_id} className="mb-4 bg-white w-[300px]">
                <Link href={`/view-detail-movie/${movieData.movie_id}`}>
                  <img
                    class="h-60 w-auto object-cover object-center line-clamp-5 "
                    src={
                      movieData.image
                        ? movieData.image
                        : "https://th.bing.com/th/id/R.853229965c28f60b9c7e78f54962ae07?rik=VzLU4xXBUXHntQ&pid=ImgRaw&r=0"
                    }
                    alt="Home in Countryside"
                  />
                  <div className="px-6 py-4">
                    <h2 className="text-lg font-bold leading-tight text-gray-900">
                      {movieData.movie_title}
                    </h2>
                    <p className="mt-2 text-gray-900 line-clamp-4">
                      {movieData.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          ;
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen p-4">
        <div className=" bg-red-500 font-bold m-2 p-4 text-xl">
          <h1 className="text-white">Drama Movie</h1>
        </div>
        <div className="rounded-5 shadow-2xl w-full p-4 grid grid-flow-col gap-10 max-w-screen-xl overflow-x-scroll scrollbar-hide ">
          {allMovies.payload
            .filter((movieData) => movieData.genre == "Drama")
            .map((movieData) => (
              <div key={movieData.movie_id} className="mb-4 bg-white w-[300px]">
                <Link href={`/view-detail-movie/${movieData.movie_id}`}>
                  <img
                    class="h-60 w-auto object-cover object-center line-clamp-5 "
                    src={
                      movieData.image
                        ? movieData.image
                        : "https://th.bing.com/th/id/R.853229965c28f60b9c7e78f54962ae07?rik=VzLU4xXBUXHntQ&pid=ImgRaw&r=0"
                    }
                    alt="Home in Countryside"
                  />

                  <div className="px-6 py-4">
                    <h2 className="text-lg font-bold leading-tight text-gray-900">
                      {movieData.movie_title}
                    </h2>
                    <p className="mt-2 text-gray-900 line-clamp-4">
                      {movieData.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          ;
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen p-4">
        <div className=" bg-red-500 font-bold m-2 p-4 text-xl">
          <h1 className="text-white"> Science Fiction Movie &gt;</h1>
        </div>
        <div className="rounded-5 shadow-2xl w-full p-4 grid grid-flow-col gap-10 max-w-screen-xl overflow-x-scroll scrollbar-hide ">
          {allMovies.payload
            .filter((movieData) => movieData.genre == "Science Fiction")
            .map((movieData) => (
              <div key={movieData.movie_id} className="mb-4 bg-white w-[300px]">
                <Link href={`/view-detail-movie/${movieData.movie_id}`}>
                  <img
                    class="h-60 w-auto object-cover object-center line-clamp-5 "
                    src={
                      movieData.image
                        ? movieData.image
                        : "https://th.bing.com/th/id/R.853229965c28f60b9c7e78f54962ae07?rik=VzLU4xXBUXHntQ&pid=ImgRaw&r=0"
                    }
                    alt="Home in Countryside"
                  />

                  <div className="px-6 py-4">
                    <h2 className="text-lg font-bold leading-tight text-gray-900">
                      {movieData.movie_title}
                    </h2>
                    <p className="mt-2 text-gray-900 line-clamp-4">
                      {movieData.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          ;
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen p-4">
        <div className=" bg-red-500 font-bold m-2 p-4 text-xl">
          <h1 className="text-white">Crime Movie &gt;</h1>
        </div>
        <div className="rounded-5 shadow-2xl w-full p-4 grid grid-flow-col gap-10 max-w-screen-xl overflow-x-scroll scrollbar-hide ">
          {allMovies.payload
            .filter((movieData) => movieData.genre == "Crime Movie")
            .map((movieData) => (
              <div key={movieData.movie_id} className="mb-4 bg-white w-[300px]">
                <Link href={`/view-detail-movie/${movieData.movie_id}`}>
                  <img
                    class="h-60 w-auto object-cover object-center line-clamp-5 "
                    src={
                      movieData.image
                        ? movieData.image
                        : "https://th.bing.com/th/id/R.853229965c28f60b9c7e78f54962ae07?rik=VzLU4xXBUXHntQ&pid=ImgRaw&r=0"
                    }
                    alt="Home in Countryside"
                  />
                </Link>
                <div className="px-6 py-4">
                  <h2 className="text-lg font-bold leading-tight text-gray-900">
                    {movieData.movie_title}
                  </h2>
                  <p className="mt-2 text-gray-900 line-clamp-4">
                    {movieData.description}
                  </p>
                </div>
              </div>
            ))}
          ;
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen p-4">
        <div className=" bg-red-500 font-bold m-2 p-4 text-xl">
          <h1 className="text-white">Holywood Movie &gt;</h1>
        </div>
        <div className="rounded-5 shadow-2xl w-full p-4 grid grid-flow-col gap-10 max-w-screen-xl overflow-x-scroll scrollbar-hide ">
          {allMovies.payload
            .filter((movieData) => movieData.genre == "Holywood")
            .map((movieData) => (
              <div key={movieData.movie_id} className="mb-4 bg-white w-[300px]">
                <Link href={`/view-detail-movie/${movieData.movie_id}`}>
                  <img
                    class="h-60 w-auto object-cover object-center line-clamp-5 "
                    src={
                      movieData.image
                        ? movieData.image
                        : "https://th.bing.com/th/id/R.853229965c28f60b9c7e78f54962ae07?rik=VzLU4xXBUXHntQ&pid=ImgRaw&r=0"
                    }
                    alt="Home in Countryside"
                  />

                  <div className="px-6 py-4">
                    <h2 className="text-lg font-bold leading-tight text-gray-900">
                      {movieData.movie_title}
                    </h2>
                    <p className="mt-2 text-gray-900 line-clamp-4">
                      {movieData.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          ;
        </div>
      </div>
    </main>
  );
}
