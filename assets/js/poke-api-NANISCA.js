const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((jsonBody) => jsonBody.results)

    .catch((error) => {
      console.error(error);
    });
};
