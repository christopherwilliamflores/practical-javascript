const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];
 
const lista1Count = {};
//map transforma
lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }   else{
            lista1Count[elemento] = 1;
        }
    }
);

//objeto convertido en una lista
const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1]
    }
);

//restamos porque empezamos a contar de 0
const moda = lista1Array[lista1Array.length-1]