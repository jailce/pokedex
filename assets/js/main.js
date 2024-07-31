const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function convertTypesToList(pokeType) {
  return pokeType.types.map((x) => `<li class='type'> ${x.type.name} </li>`);
}

function convertPokemonToHtml(pokemon) {
  return `       
     <li class="pokemon">
          <div class="head">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.order}</span>
          </div>
          <div class="detail">
            <ol class="types">

             ${convertTypesToList(pokemon).join("")}
             
            </ol>

            <img
              src="${pokemon.sprites.other.dream_world.front_default}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
   
        `;
}

var pokemonLi = document.getElementById("pokemonLi");

pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonLi.innerHTML = pokemonList.map(convertPokemonToHtml).join("");
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