function calcularMediaAritmetica(lista){
 const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    4000000,
];

//Mitad de el tamaño de la lista Covierte a Int
const mitadLista1 = parseInt(lista1.length/2);

//Comprueba si es par
function esPar(numerito){
    if(numerito % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

//Si es True
if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    
//madando un elemento en un array
    const promedioElement1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
]);
    mediana = promedioElement1y2;

}else{
    mediana = lista1[mitadLista1]; 
}