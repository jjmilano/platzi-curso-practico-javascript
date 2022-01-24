// Funcion Cuadrado!
function perimetroCuadrado(lado) {
    return lado* 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Funcion Triangulo!
function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 +lado2+lado3
}

function areaTriangulo(lado3,altura){
    return (lado3 * altura)/2;
}
// Funcion Circulo
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
const diametro = diametroCirculo (radio);
const PI = Math.PI;
return diametro * PI;
}

function areaCirculo(radio){
const PI = Math.PI;
return (radio * radio) * PI;
}


/// conecting with HTML
///Funciones de calculo cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("el perimetro del cuadrado es " +perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert ("el Area del cuadrado es " +area);
}

// Funciones de calculo de Triangulo
function calcularPerimetroTriangulo(){
    let lado1 = document.getElementById("lado1");
    let tlado1 = parseFloat(lado1.value);
    let lado2 = document.getElementById("lado2");
    let tlado2 = parseFloat(lado2.value);
    let lado3 = document.getElementById("lado3");
    let tlado3 = parseFloat(lado3.value);

    let tPerimetro = tlado1 + tlado2 + tlado3;
    let tArea = (tlado3*tlado1)/2;
    alert("el Perimetro del triangulo es " + tPerimetro);
}

function calcularAreaTriangulo(){
    let lado1 = document.getElementById("lado1");
    let tlado1= parseFloat(lado1.value);
    let lado3 = document.getElementById("lado3");
    let tlado3 = parseFloat(lado3.value);
    let tArea = (tlado3*tlado1)/2;

    alert("el Area del triangulo es "+ tArea);

}

//Funciones de calculo Circulo
function calcularDiametroCirculo(){
    let radio = document.getElementById("radio1");
    let cRadio = parseFloat(radio.value);
    const cPI = Math.PI;

    let diametroCi = 2 * cRadio;
    let perimetroCi = diametroCi* PI;
    let areaCi= PI * (cRadio**2);

    alert("el perimetro del circulo es " +perimetroCi+ "cm " + "y el área es :" + areaCi +"cm^2")
}