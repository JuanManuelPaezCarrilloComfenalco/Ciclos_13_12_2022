addEventListener("DOMContentLoaded",(e) => {

    // Los ciclos o bucles en JavaScript son estructuras de control que permiten ejecutar
    //  un bloque de código varias veces. Hay dos tipos principales de ciclos en JavaScript: 
    // los ciclos for y los ciclos while.

    // El ciclo for es una estructura de control que se utiliza para ejecutar un bloque de 
    // código un número determinado de veces. Se suele utilizar cuando sabemos de antemano 
    // cuántas veces queremos que se ejecute el código. La sintaxis básica de un ciclo for es 
    // la siguiente:
    for (inicialización; condición; incremento/decremento) {
        // código a ejecutar en cada iteración
      }
    //   Por ejemplo:
      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
    


    // forEach() es un método de los arrays en JavaScript que permite iterar sobre los
    // elementos del array y ejecutar una función en cada iteración. El método forEach() se
    //  aplica directamente al array y recibe como argumento una función que se ejecutará 
    // en cada iteración. La sintaxis básica de forEach() es la siguiente:

        array.forEach(function(elemento, índice, array) {
         // código a ejecutar en cada iteración
        });

          Donde:

    // elemento: Es el elemento del array que se está procesando en la iteración actual.
    // índice: Es el índice del elemento del array que se está procesando en la iteración actual.
    // array: Es el array al que se está aplicando el método forEach().
    // Ejemplos:

        // Imprimir los elementos de un array
        const array = [1, 2, 3, 4, 5];
        array.forEach(function(elemento) {
        console.log(elemento);
        });

        // Sumar los elementos de un array
        let suma = 0;
        const array = [1, 2, 3, 4, 5];
        array.forEach(function(elemento) {
        suma += elemento;
        });
        console.log(suma); // 15

        // Modificar los elementos de un array
        const array = [1, 2, 3, 4, 5];
        array.forEach(function(elemento, índice) {
        array[índice] = elemento * 2;
        });
        console.log(array); // [2, 4, 6, 8, 10]
        
    // map() es un método de los arrays en JavaScript que permite aplicar una función a cada
    // elemento del array y devolver un nuevo array con los resultados. El método map() se 
    // aplica directamente al array y recibe como argumento una función que se aplicará a cada 
    // elemento del array. La sintaxis básica de map() es la siguiente:

      const nuevoArray = array.map(function(elemento, índice, array) {
        // código a ejecutar en cada iteración
      });

    //Donde:

    // elemento: Es el elemento del array que se está procesando en la iteración actual.
    // índice: Es el índice del elemento del array que se está procesando en la iteración actual.
    // array: Es el array al que se está aplicando el método map().

    // Ejemplos:

    // Duplicar los elementos de un array
        const array = [1, 2, 3, 4, 5];
        const nuevoArray = array.map(function(elemento) {
        return elemento * 2;
        });
        console.log(nuevoArray); // [2, 4, 6, 8, 10]

        // Crear un array con los tamaños de las palabras de otro array
        const array = ['hola', 'mundo', 'javascript'];
        const nuevoArray = array.map(function(elemento) {
        return elemento.length;
        });
        console.log(nuevoArray); // [4, 5, 10]

        // Crear un array con los objetos transformados
        const array = [{nombre: 'Juan', edad: 30}, {nombre: 'Pablo', edad: 25}];
        const nuevoArray = array.map(function(elemento) {
        return {nombre: elemento.nombre, edad: elemento.edad * 2};
        });
        console.log(nuevoArray); // [{nombre: 'Juan', edad: 60}, {nombre: 'Pablo', edad: 50}]

    // for...of es una estructura de control en JavaScript que se utiliza para iterar sobre 
    // los elementos de un iterable, como un array o una cadena de caracteres. La sintaxis
    //  básica de for...of es la siguiente:

        for (variable of iterable) {
        // código a ejecutar en cada iteración
      }
    // Donde:

    // variable: Es una variable que tomará el valor del elemento del iterable en cada iteración.
    // iterable: Es el iterable sobre el que se itera, como un array o una cadena de caracteres.    

    // Ejemplos:

      // Imprimir los elementos de un array
        const array = [1, 2, 3, 4, 5];
        for (const elemento of array) {
        console.log(elemento);
        }

        // Imprimir los caracteres de una cadena
        const cadena = 'Hola mundo';
        for (const caracter of cadena) {
        console.log(caracter);
        }

        // Sumar los elementos de un array
        let suma = 0;
        const array = [1, 2, 3, 4, 5];
        for (const elemento of array) {
        suma += elemento;
        }
        console.log(suma); // 15

        // Modificar los elementos de un array
        const array = [1, 2, 3, 4, 5];
        let i = 0;
        for (const elemento of array) {
        array[i] = elemento * 2;
        i++;
        }
        console.log(array); // [2, 4, 6, 8, 10]
        

    //for...in es una estructura de control en JavaScript que se utiliza para iterar sobre las
    //propiedades de un objeto. La sintaxis básica de for...in es la siguiente:

        for (variable in objeto) {
            // código a ejecutar en cada iteración
        }
    // Donde:

    //variable: Es una variable que tomará el valor del nombre de la propiedad del objeto en cada iteración.
    //objeto: Es el objeto sobre el que se itera.

    // Ejemplos:

    // Imprimir las propiedades de un objeto
        const obj = {a: 1, b: 2, c: 3};
        for (const propiedad in obj) {
        console.log(propiedad, obj[propiedad]);
        }

        // Sumar las propiedades de un objeto
        let suma = 0;
        const obj = {a: 1, b: 2, c: 3};
        for (const propiedad in obj) {
        suma += obj[propiedad];
        }
        console.log(suma); // 6

        // Modificar las propiedades de un objeto
        const obj = {a: 1, b: 2, c: 3};
        for (const propiedad in obj) {
        obj[propiedad] = obj[propiedad] * 2;
        }
        console.log(obj); // {a: 2, b: 4, c: 6}

    //El ciclo while es otra estructura de control que se utiliza para ejecutar un bloque de
    //código mientras se cumpla una determinada condición. La sintaxis básica de un ciclo
    //while es la siguiente:


        while (condición) {
    // código a ejecutar mientras se cumpla la condición
        }
    //Donde condición es una expresión que se evalúa al principio de cada iteración del 
    //ciclo. Si la condición se evalúa como true, se ejecuta el bloque de código. Si se
    //evalúa como false, el ciclo se detiene.

    // Por ejemplo:
      
        let i = 0;
        while (i < 10) {
        console.log(i);
        i++;
        }

        // Pedir un número al usuario hasta que ingrese un número válido
        let num;
        while (isNaN(num)) {
        num = parseInt(prompt('Ingrese un número:'));
        }

        // Generar un número aleatorio entre 1 y 10 hasta que se genere un 5
        let num;
        while (num !== 5) {
        num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        }
    
    //do...while es una estructura de control en JavaScript que se utiliza para ejecutar un
    //bloque de código un número indeterminado de veces mientras se cumpla una condición. La 
    // sintaxis básica de do...while es la siguiente:
        do {
            // código a ejecutar en cada iteración
        } while (condición);

    
    //Donde condición es una expresión que se evalúa al final de cada iteración del ciclo.
    //Si la condición se evalúa como true, se vuelve a ejecutar el bloque de código. Si se 
    //evalúa como false, el ciclo se detiene.

    //A diferencia de otros ciclos, como for y while, el bloque de código del ciclo do...while
    //se ejecuta al menos una vez, independientemente de si se cumple la condición o no.
    // Ejemplo:

    // Pedir un número al usuario hasta que ingrese un número válido
        let num;
        do {
        num = parseInt(prompt('Ingrese un número:'));
        } while (isNaN(num));

        // Generar un número aleatorio entre 1 y 10 hasta que se genere un 5
        let num;
        do {
        num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        } while (num !== 5);


})