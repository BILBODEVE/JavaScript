let nombre;

 function bienvenida() {
     nombre = prompt("Bienvenido a PC componentes, porfavor ingrese su nombre")
     alert("Hola " + nombre + "!");
 }

 bienvenida();

 let opcionDeCompra;
 let ryzen5600 = "Ryzen 5 5600G";
 let ryzen5700 = "Ryzen 7 5700G";
 let ramAdata = "Memoria ram DDR4 8GB 3600Mhz Adata XPG";
 let ramCorsair = "Memoria ram Ddr4 16GB 3000Mhz Corsair Vengeance";
 let placaGTX = "Placa de video Palit Nvidia GeForce GTX 1660 6gb";
 let placaRTX = "Placa de video Nvidia Geforce RTX 3050 dual 8GB";
 let ryzen5600Precio = 34000;
 let ryzen5700Precio = 48000;
 let ramAdataPrecio = 8000;
 let ramCorsairPrecio = 10000;
 let placaGtxPrecio = 80000;
 let placaRtxPrecio = 100000;;
 const mensajeCompraFinal = "Excelente " + nombre + " usted ha elegido";

 function catalogo() {
     opcionDeCompra = prompt("Catalogo de productos \n a:Procesadores \n b:Memorias ram \n c:Placa de video");
     if (opcionDeCompra === "a") {
            eleccion = prompt("Procesadores " + "\nd: " + ryzen5600 + "\n e: " + ryzen5700);
         
     } else if (opcionDeCompra === "b") {
         eleccion = prompt("Memorias ram" + "\nf: " + ramAdata + "\ng: " + ramCorsair);
         
     } else if (opcionDeCompra === "c")
         eleccion = prompt("Placas de video" + "\nh:" + placaGTX + "\ni:" + placaRTX);
     
 }
 
 let eleccion;
 catalogo();

 function productos () {
    if (eleccion === "d") {
        alert(ryzen5600 + "\nPrecio: " + ryzen5600Precio);
    } else if (eleccion === "e")
    alert(ryzen5700 + "\nPrecio: " + ryzen5700Precio);
    else if (eleccion === "f") {
        alert(ramAdata + "\nPrecio: " + ramAdataPrecio);
    } else if (eleccion === "g")
    alert(ramCorsair + "\nPrecio: " + ramCorsairPrecio);
     else if (eleccion === "h") {
        alert(placaGTX + "\nPrecio: " + placaGtxPrecio);
    } else if (eleccion === "i")
        alert(placaRTX + "\nPrecio: " + placaRtxPrecio);
 }

 productos();

 function compraFinal() {
     if (eleccion === "d") {
         alert(mensajeCompraFinal + " " + ryzen5600);
     } else if (eleccion == "e") {
         alert(mensajeCompraFinal + " " + ryzen5700);
     } else if (eleccion == "f") {
         alert(mensajeCompraFinal + " " + ramAdata);
     } else if (eleccion == "g") {
         alert(mensajeCompraFinal + " " + ramCorsair);
     } else if (eleccion == "h") {
         alert(mensajeCompraFinal + " " + placaGTX);
     } else if (eleccion == "i") {
         alert(mensajeCompraFinal + " " + placaRTX);
     }
 }

 compraFinal();

let opciones = prompt("1-volver a comprar" + "\n2-Finalizar compra" + "\n3-Cerrar");

while (opciones !== "3" ) {
    if (opciones == "1") {
        catalogo()
    } else if (opciones == "2") {
        alert("Gracias por su compra!")
        opciones = "3"
    } else {
        alert("Gracias por visitar nuestro sitio!")
    }
}