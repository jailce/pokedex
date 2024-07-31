const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonBody) => jsonBody.results)

    .catch((error) => {
      console.error(error);
    });
};


Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


/*

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