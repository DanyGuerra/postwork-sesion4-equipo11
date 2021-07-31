# Postwork de la sesión 4

## Integrantes del equipo 11

- Luis Daniel Ramírez Guerra
- Luis Felipe Carrillo Alvarado
- Maria Fernanda Orozco Castro
- José Juan Calderón Castillo
- Victor Alberto Díaz Sánchez


# 1. Deep Equal
La función deepEqual recibe dos argumentos y retorna `true` si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben son comparados con una
llamada recursiva de deepEqual.

Usando el operador `typeof` puedes determinar si ambas variables son objetos, de ser así se llama nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

La función `Object.keys()` es útil para obtener las propiedades de los objetos.

Función deepEqual:

```javascript

function deepEqual(a, b) {
  if (a===b){
    return true;
  }else if((typeof a === 'object') && (typeof b === 'object')){

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    let valuesA = Object.values(a);
    let valuesB = Object.values(b);

    if(keysA.length != keysB.length){
      return false;
    }else{
      for(let i=0 ; i<keysA.length ; i++){
        if(keysA[i] != keysB[i]){
          return false;
        }
        if(valuesA[i] != valuesB[i]){
          return false;
        }
      }
      return true;
    }
  }else{
    return false;
  }
}

const john = {
 firstName: 'John',
 lastName: 'Doe',

}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe'})) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false


```

## [Archivo función deepEqual](./deepEqual.js)



# 2. Chunk
La función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.

Función chunk:

```javascript
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

```

## [Archivo función chunk](./chunk.js)



# 3. Frequency
La función frequency recibe un string como argumento. Esta función cuenta la frecuencia o el número de veces que se repite cada carácter.

El resultado muestra en un objeto donde las propiedades son los caracteres, y los valores la frecuencia. Los resultados se ordenan de manera ascendente por los caracteres y no por la frecuencia.

Función frecuency:

```javascript
function frequency(string) {
  // Code goes here
  let letraAnt = '';
  var arrayTmp = [];
  for (let index = 0; index < string.length; index++) {
      arrayTmp.push( string[index]);
  }

  var arrayOrder = arrayTmp.sort();

  let fontCount=0;
  let strinJson = '{';

  for(let item of arrayOrder){
      debugger
      const elemet = item;

      if(elemet == letraAnt)
      {
          fontCount++;
      }else{
          if(letraAnt != '')
          {
              strinJson += letraAnt + ":" + fontCount + ",";
          };

          fontCount = 1;
      }

      letraAnt = item;
  }

  strinJson += letraAnt + ":" + fontCount + '}';

  return strinJson;
 }

 console.log('Test 1:', frequency('cccbbbaaa'))
 // {a: 3, b: 3, c: 3}
 console.log('Test 2:', frequency('www.bedu.org'))
 // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
 console.log('Test 3:', frequency('john.doe@domain.com'))
 // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}


```
## [Archivo función frecuency](./ejercicio3.js)

<!-- Aqui va el resultado de la funcion -->



