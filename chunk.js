
function chunk(array, size) {
    let arrayIterador =[]
    const response = [];

    for (let i = 0; i < array.length; i++){
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

  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
  console.log('Test 4:', chunk(data, 4)) // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
