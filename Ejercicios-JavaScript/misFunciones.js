/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param (string) id - id de los inputs del formulario
 * @param (number) valor - valor de los inputs del formulario
 */

function cambiarUnidades(id,valor){
    let metro, pulgada, pie, yarda;

    if(isNaN(valor)){
        alert("se ingreso un valor invalido "+id);
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*valor;
    }else if(id="pulgada"){
        pulgada=valor;
        metro=0.254*valor;
        pie=0.083333*valor;
        yarda=0.277778*valor;
    }else if(id="yarda"){
        yarda=valor;
        metro=0.9144*valor;
        pulgada=36*valor;
        pie=3*valor;
    }else if(id="pie"){
        pie=valor;
        metro=0.3048*valor;
        pulgada=12*valor;
        yarda=0.333333*valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;

}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function fnSuma() {
    let num1, num2;

    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;

    document.getElementById("totalS").value = Number(num1) + Number(num2);
}

function fnResta() {
    let num1, num2;

    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;

    document.getElementById("totalR").value = Number(num1) - Number(num2);
}

function fnProducto() {
    let num1, num2;

    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;

    document.getElementById("totalM").value = Number(num1) * Number(num2);
}

function fnDivision() {
    let num1, num2;

    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;

    document.getElementById("totalD").value = Number(num1) / Number(num2);
}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById('dist').value = can + " " + un;

}

function guardarLocalStorage() {
    let distancia, unidad;

    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;

    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);

    window.open('2_web.html');
}

function cargarLocalStorage() {
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;

}

function dibujarCirculoCuadrado() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    let tamanio = 80;
    let margen = 20;

    ctx.fillStyle = "#0d19e1";
    ctx.fillRect(0+margen, yMax-tamanio-margen, tamanio, tamanio);

    ctx.arc(xMax/2, yMax/2, 75, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#ef5603";
    ctx.fill();
}


var bandera;
function dibujar(event) {

    var canvas = document.getElementById("canvasDibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }

}

function borrarCanvas() {

    let canvas = document.getElementById("canvasDibujar");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    //Dibujar lineas horozontales
    for(let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.stroke();
        ctx.closePath();
    }

    //Dibujar lineas verticales
    for(let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
        ctx.closePath();
    }
}

x = 0;
dx = 2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }

    if(x > canvas.width){
        x = 0;
    }
    x = x+dx;
}