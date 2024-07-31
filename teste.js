// Simulação do JSON com tipos
const pokemonData = {
    types: [
      {
        slot: 1,
        type: {
          name: "grass"
 
        }
      },
      {
        slot: 2,
        type: {
          name: "poison"
    
        }
      }
    ]
  };

var getSlot = (poke) => {
    return poke.types.map((x) => x.type.name)
    
}

var slotim = getSlot(pokemonData)

console.log(slotim.join())


/*

function ty(num) {
  return num.map((x) => {
    x;
  });
}
console.log(ty(types.type));

var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(pokemonData)
console.log(pokemonData.types.type + '--')


console.log(getTypeName(pokemonData))
*/