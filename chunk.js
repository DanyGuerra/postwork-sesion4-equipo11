
function chunkMafer(array, size) {
  let arrayIterador =[]
  const response = [];

  for (let i = 0; i < array.length; i++){
      arrayIterador.push(array[i]);
      if(arrayIterador.length === size){
        response.push(arrayIterador);
        arrayIterador = [];
      }else if (arrayIterador[arrayIterador.length - 1] == array[array.length - 1]){
        response.push(arrayIterador);
        arrayIterador = [];
      }
  }

  return response;

};

function chunkFelipe(array, size) {
  let arrayIterador =[]
  const response = [];

  for (let i = 0; i < array.length; i++){
    debugger
      arrayIterador.push(array[i]);
      if(arrayIterador.length === size){
        response.push(arrayIterador);
        arrayIterador = [];
      }
  }
   if((arrayIterador.length != 0 )) {
      response.push(arrayIterador);
  }

  return response;

};

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunkFelipe(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunkFelipe(data, 2)) // [[ 1 ], [ 2 ], [ 3 ],[ 4 ], [ 5 ], [ 6 ],[ 7 ], [ 8 ], []]
console.log('Test 3:', chunkFelipe(data, 3)) // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [] ]
console.log('Test 4:', chunkFelipe(data, 4)) // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [] ]
console.log('Test 5:', chunkFelipe(data, 5)) // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8 ] ]

console.log('Test 1:', chunkMafer(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunkMafer(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunkMafer(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 4:', chunkMafer(data, 4)) // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
console.log('Test 5:', chunkMafer(data, 5)) // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8 ] ]