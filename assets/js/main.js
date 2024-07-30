const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
  return `       
     <li class="pokemon">
          <div class="head">
            <span class="name">${pokemon.name}</span>
            <span class="number">${pokemon.id}</span>
          </div>
          <div class="detail">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
        `;
}

var pokemonLi = document.getElementById("pokemonLi");

pokeApi.getPokemons().then((pokemonList = []) => {
 pokemonLi.innerHTML += pokemonList.map(convertPokemonToHtml).join('')
});



/* 
  const newList = pokemonList.map((pokemon) => {
    return pokemon.name;
  });console.log(newList);
-----
const listItems = []

  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];

    pokemonLi.innerHTML += convertPokemonToHtml(pokemon);
  }
}); */
