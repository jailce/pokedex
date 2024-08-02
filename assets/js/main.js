


function convertPokemonToHtml(pokemon) {
  return `       
     <li class="pokemon ${pokemon.type}">
          <div class="head">
          <span class="name">${pokemon.name}</span>
          <span class="number">#0${pokemon.number}</span>
          </div>
          <div class="detail ">
            <ol class="types  ">
  
 ${convertTypesToList(pokemon).join("")}
            </ol>

            <img
              src="${pokemon.photo}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
   
        `;
}
function convertTypesToList(pokemon) {
  return pokemon.types.map((type) => `<li class='type ${type} '> ${type} </li>`);
}

//${pokemon.types.map((type) => `<li class='type'> ${type} </li>`).join('')}
var pokemonLi = document.getElementById("pokemonLi");

pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonLi.innerHTML = pokemonList.map(convertPokemonToHtml).join("");
});

//
