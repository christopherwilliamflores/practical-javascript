//--------Cuadrado----------------------------------------------
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return  lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();


//--------Triangulo----------------------------------------------
console.group("Triangulos");
//--------Perimetro
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//--------Radio Triangulo
function areaTriangulo(base, altura){
    return (base * altura)/2 ;
}


//--------Código del Círculo----------------------------------
console.group("Círculo");

//--------Radio Circulo
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo +"cm");

//--------Diámetro Circulo
function diametroCirculo(radio){
    return radio * 2;
}

//--------PI
const PI = Math.PI;
console.log("PI es: "+ PI );

//--------Perimetro Ciculo
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//--------Área Circulo
function areaCirculo(radio){
    return (radio * radio) *PI;
}

console.groupEnd();

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

//----------------------------------------------------------------------------
//-------------------Aquí interactuamos con el HTML---------------------------|
//----------------------------------------------------------------------------

//Cuadrado------------
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

//Circulo------------
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);

}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = perimetroCirculo(value);
    alert(diametro);
}

function calcularAreaCirculo(){
    const intput = document.getElementById("InputCirculo")
    const value = intput.value;

    const area = areaCirculo(value);
    alert(area);
}

//Triangulo------------

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function calcularAlturaTrianguloIsoceles(){
    const input1 = document.getElementById("LadoA")
    const LadoA = input1.value;
    const input2 = document.getElementById("LadoB")
    const LadoB = input2.value;
    const input3 = document.getElementById("Base")
    const Base = input3.value;
    
    const altura = alturaTrianguloIsosceles(LadoA,LadoB,Base);
    alert(altura);
}