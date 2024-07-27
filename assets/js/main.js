const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
  return `       
     <li class="pokemon">
          <div class="head">
            <span class="name">${pokemon.name}</span>
            <span class="number">#001</span>
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

// var pokemonList = document.getElementById('pokemonList')
var display =  document.getElementById('display')
var test =  document.getElementById('test')

// pokemonList.innerHTML += pokemon.name

display.innerHTML += pokemonList.length


fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    
    for (let i = 0; i < pokemonList.length; i++) {
        console.log(pokemonList.length)
        const pokemon = pokemonList[i]
      
     
       console.log(pokemon)
      

      
    }
  })
  .catch((error) => {
    console.error(error);
  });
