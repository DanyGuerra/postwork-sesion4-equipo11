# Postwork de la sesión 4

## Integrantes del equipo 11

- Luis Daniel Ramírez Guerra
- Luis Felipe Carrillo Alvarado
- Maria Fernanda Orozco Castro
- José Juan Calderón Castillo


# 1. Deep Equal
La función deepEqual recibe dos argumentos y retorna `true` si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben son comparados con una
llamada recursiva de deepEqual.

Usando el operador `typeof` puedes determinar si ambas variables son objetos, de ser así se llama nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

La función `Object.keys()` es útil para obtener las propiedades de los objetos.

Ejemplo de deepEqual:

```javascript

 function deepEqual(a, b) {
 // Code goes here
}

const john = {
 firstName: 'John',
 lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
```

## [Resultado de deepEqual](./deepEqual.js)

<!-- Aqui va el resultado de la funcion -->

```javascript
//Funcion deepEqual()

```


# 2. Chunk
La función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.

Ejemplo de chunk:

```javascript
 function chunk(array, size) {
  // Code goes here
};

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
```

## [Resultado de chunk](./chunk.js)

<!-- Aqui va el resultado de la funcion -->

```javascript
//Funcion deepEqual()

```


# 3. Frequency
La función frequency recibe un string como argumento. Esta función cuenta la frecuencia o el número de veces que se repite cada carácter.

El resultado muestra en un objeto donde las propiedades son los caracteres, y los valores la frecuencia. Los resultados se ordenan de manera ascendente por los caracteres y no por la frecuencia.

## [Resultado de frecuency](./frecuency.js)

<!-- Aqui va el resultado de la funcion -->

```javascript
//Funcion frecuency()

```


