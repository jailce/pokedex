//${pokemon.types.map((type) => `<li class='type'> ${type} </li>`).join('')}
var pokemonLi = document.getElementById("pokemonLi");
const loadMoreButton = document.getElementById("loadMoreButton");
// const loadMLessButton = document.getElementById('loadLessButton')
const limit = 12;
let offset = 0;
const maxRecords = 151;

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
  return pokemon.types.map(
    (type) => `<li class='type ${type} '> ${type} </li>`
  );
}

function loadPokemonItens() {
  pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
    pokemonLi.innerHTML = pokemonList.map(convertPokemonToHtml).join("");
  });
}
loadLessButton.disabled = true;

loadPokemonItens(limit, offset);
let qtdRecordNextPage = offset + limit;

//next
loadMoreButton.addEventListener("click", () => {
  offset += limit;
  qtdRecordNextPage = offset + limit;
  // console.log(qtdRecordNextPage);
  // console.log(qtdRecordNextPage >= maxRecords);
  if (offset > 0) {
    loadLessButton.disabled = false;
    if (qtdRecordNextPage >= maxRecords) {
      const newLimit = maxRecords - offset;
      loadPokemonItens(offset, newLimit);
      loadMoreButton.disabled = true;
    }
  }

  loadPokemonItens();
});

//prev
loadLessButton.addEventListener("click", () => {
  offset -= limit;

  if (offset === 0) {
    loadLessButton.disabled = true;
    loadMoreButton.disabled = false;
    if (qtdRecordNextPage < maxRecords) {
      const newLimit = maxRecords - offset;
      loadPokemonItens(offset, newLimit);
      loadMoreButton.disabled = false;
    }
  }

  loadPokemonItens();
});


