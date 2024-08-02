const pokeApi = {};
//fetch para solicitar a lista em json dos detalhes de pokemon
function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemon.name = pokeDetail.name;
  pokemon.types = pokeDetail.types.map((x) => x.type.name);
  pokemon.type = pokemon.types[0];
  // pokemon.types = pokeDetail.types.map((x) => x.type.name)
  // const [type] = types;
  // pokemon.type = type
  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  //buscando a lista
  return (
    fetch(url)
      //recebe o response e converte para json
      .then((response) => {
        return response.json();
      })
      //recebe o response e converte para json
      .then((jsonBody) => jsonBody.results)
      //Mapeando a lista de pokemons em uma LISTA de requisições de detalhes dos pokemons que é um novo fetch
      .then((pokemonList) => pokemonList.map(pokeApi.getPokemonDetail))
      //Lista de requisição em json de detalhes do pokemon, esperando que todas as requisições terminem
      .then((detailRequests) => Promise.all(detailRequests))
      //Quando terminar traz a lista de detalhes do pokemon
      .then((pokemonDetails) => pokemonDetails)
  );
};
