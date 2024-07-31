const pokeApi = {};
//fetch para solicitar a lista em json dos detalhes de pokemon
pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
 
  //buscando a lista
  return fetch(url)
  //recebe o response e converte para json
  .then((response) => {return response.json();})
  //recebe o response e converte para json
    .then((jsonBody) => jsonBody.results)
    //Mapeando a lista de pokemons em uma LISTA de requisições de detalhes dos pokemons que é um novo fetch
    .then((pokemonList) => pokemonList.map(pokeApi.getPokemonDetail))
    //Lista de requisição em json de detalhes do pokemon, esperando que todas as requisições terminem
    .then((detailRequests) => Promise.all(detailRequests))
    //Quando terminar traz a lista de detalhes do pokemon
    .then((pokemonDetails) => pokemonDetails)

};




/*
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

const pokeApi = {}
pokeApi.getPokemons = (pokeDetail = 1) => {
  const urlDetail = `https://pokeapi.co/api/v2/pokemon/${pokeDetail}`
  return fetch(urlDetail)
    .then( (res) => {
    return res.json();
  })
  // .then((jsonBody) => jsonBody.results)
};

pokeApi.getPokemons(1).then((pokemon) =>{
  console.log(pokemon.abilities[1])
})



*/