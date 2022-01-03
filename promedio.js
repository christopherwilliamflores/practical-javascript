
function calcularMediaAritmetica(lista){

const sumaLista = lista.reduce(
    //la funcion reduce necesita dos entradas valor acumulado y nuevo elemento
    //por defecto igual = 0
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
    
}