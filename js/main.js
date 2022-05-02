class Saludo {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        alert("Bienvenido "+ this.nombre + " " + this.apellido + " a PC componentes");
    }
}
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

const bienvenida = new Saludo (nombre, apellido);
bienvenida.saludar();

class Producto {
    constructor (nombre, precio, stock, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.descripcion = descripcion;
    }
    info(){
        alert(("Modelo: " + this.nombre) + ("\nPrecio: $" + this.precio) + ("\nStock :" + this.stock) + ("\nDESCRIPCION" + this.descripcion));
        
    }
}
// productos
let ryzen5600 = new Producto ("Ryzen 5 5600G", 34500, 10, "\nNucleos : 6 \nHilos : 12 \nFrecuencia : 3900.00mhz   \nVelocidad de CPU : 4.4GHz \nSocket : AM4 APU 5000");
let ryzen5700 = new Producto ("Ryzen 7 5700G", 48500, 10, "\nNucleos : 8 \nHilos : 16 \nFrecuencia : 3800.00mhz   \nVelocidad de CPU : 4.6GHz \nSocket : AM4 APU 5000");
let intel10400 = new Producto ("Core i5 10400", 25300, 10, "\nNucleos : 6 \nHilos : 12 \nFrecuencia : 2900.00mhz \nVelocidad de CPU : 4.3GHz \nSocket : 1200 Comet Lake");
let intel11400 = new Producto ("Core i5 11400F", 24840, 10, "\nNucleos : 6 \nHilos : 12 \nFrecuencia : 2600.00mhz \nVelocidad de CPU : 4.4GHz \nSocket : 1200 Rocket Lake-s");

// productos almacenados en su array

const procesadores = [ryzen5600, ryzen5700, intel10400, intel11400];

let eleccion;

     function catalogo() {
         opcionDeCompra = prompt("Catalogo de productos \n a:Procesadores");
         if (opcionDeCompra === "a" || opcionDeCompra === "A") {
               eleccion = prompt( "\n1 "+ procesadores[0].nombre + "\n2 " + procesadores[1].nombre + "\n3 " + procesadores[2].nombre + "\n4 " + procesadores[3].nombre)
         }
    }
    catalogo();

    function productoComprado () {
        if (eleccion === "1") {
            ryzen5600.info();
        } else if (eleccion === "2") {
            ryzen5700.info();
        } else if (eleccion === "3") {
            intel10400.info();
        } else if (eleccion === "4")
            intel11400.info();
        } 

     
     productoComprado();
    
     
      let menuOpciones = prompt("1-volver a comprar" + "\n2-Finalizar compra" + "\n3-Cerrar");
    
      while (menuOpciones !== "3" ) {
        if (menuOpciones == "1") {
            catalogo();
        } else if (menuOpciones == "2") {
            alert("Gracias por su compra!");
            menuOpciones = "3"
        } else {
            alert("Gracias por visitar nuestro sitio!");
        }
    }
