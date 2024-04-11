export const getAllMovies = async () => {
  const requestData = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api`
  );
  const movieData = await requestData.json();
  console.log(movieData);
  return movieData;
};

export const getMovieById = async (id) => {
  const requestData = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`
  );
  const movieData = await requestData.json();
  console.log(movieData);
  return movieData;
};