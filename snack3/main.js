// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const min = 10
const max = 40

const arrLength = Math.floor(Math.random()*50)+1


function calcBetween(arr,a,b){
  if (a>b){
    let aux = a
    a = b
    b = aux
  }

  const newArr = []

  for (let i = a+1; i < b; i++)
  {
    newArr.push(arr[i])
  }
  return newArr
}

function getRandoms(){
  let randInt = Math.floor(Math.random()*100)
  return randInt
}

let arr = []
for (let i = 0; i < arrLength; i++){
  let n = getRandoms()
  arr.push(n)
}

const output = calcBetween(arr,min,max)

console.log(arr);
console.log(output);
