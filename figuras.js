// Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

//console.log("El permietro del triangulo es de: " + perimetroTriangulo + "cm")

//console.log("El area del triangulo es de: " + areaTriangulo + "cm^2")

console.groupEnd();

// Codigo del Circulo
console.group("Circulos");
//const radioCirculo = 4;
//const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
//const perimetroCirculo = diametroCirculo * PI;
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("PI es: " + PI);
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//console.log("El area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();


// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
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