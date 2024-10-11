
/* BLueprint
  {
    brand : ''
    weight: ''
  }
*/

const bicycle = [
  { 
    brand : "Bianchi",
    weight: 7.5 
  },
  { 
    brand : "Trek",
    weight: 8.1 
  },
  { 
    brand : "Giant",
    weight: 7.9 
  },
  { 
    brand : "Specialized",
    weight: 7.4 
  },
  { 
    brand : "Cannondale",
    weight: 8.0 
  },
  { 
    brand : "Pinarello",
    weight: 7.2 
  },
  { 
    brand : "Scott",
    weight: 7.6 
  }
]

let min = bicycle[0]

for (let i = 0; i < bicycle.length; i++){
  if (bicycle[i].weight < min){
    min = bicycle[i]
  }
}

console.log(min);
