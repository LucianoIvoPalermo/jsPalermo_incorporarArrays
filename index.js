class Componente {
  constructor(id, descripcion, precio) {
      this.id = id;
      this.descripcion = descripcion;
      this.precio = precio;
  }
}

const compI3 = new Componente("1","Procesador I3", 20000);
const compI5 = new Componente("2","Procesador I5", 30000);
const compI7 = new Componente("3","Procesador I7", 40000);
const compI9 = new Componente("4","Procesador I9", 50000);
const compMotherZ590 = new Componente("5","Motherboard Z590", 15000);
const compMotherZ570 = new Componente("6","Motherboard Z570", 10000);
const compRam16gb = new Componente("7","Memoria Ram 16 (2x8)", 12000);
const compRam32gb = new Componente("8","Memoria Ram 32 (2x16)", 22000);
const compFuenteCorsair = new Componente("9","Fuente Corsair", 25000);
const compGeforce3060rtx = new Componente("10","Nvidia Gforce 3060 RTX", 150000);

const arrayStock = [compI3, compI5, compI7, compI9, compMotherZ590, compMotherZ570, compRam16gb, compRam32gb, compFuenteCorsair, compGeforce3060rtx];



let gastoTotal = 0;

const sumarProducto = (producto) => (gastoTotal += producto);

function comprar() {
  let continuar = true;
  alert("Usted está ingresando a la Neo-Matrix! No se distraiga y elija los componentes de su próxima PC.");

  while (continuar) {
    let producto = prompt(`Ingrese el numero de la izquierda para comprar el producto deseado.
    
    Catálogo de componentes de PC:
    ${compI3.id} - ${compI3.descripcion} $${compI3.precio}
    ${compI5.id} - ${compI5.descripcion} $${compI5.precio}
    ${compI7.id} - ${compI7.descripcion} $${compI7.precio}
    ${compI9.id} - ${compI9.descripcion} $${compI9.precio}
    ${compMotherZ590.id} - ${compMotherZ590.descripcion} $${compMotherZ590.precio}
    ${compMotherZ570.id} - ${compMotherZ570.descripcion} $${compMotherZ570.precio}
    ${compRam16gb.id} - ${compRam16gb.descripcion} $${compRam16gb.precio}
    ${compRam32gb.id} - ${compRam32gb.descripcion} $${compRam32gb.precio}
    ${compFuenteCorsair.id} - ${compFuenteCorsair.descripcion} $${compFuenteCorsair.precio}
    ${compGeforce3060rtx.id} - ${compGeforce3060rtx.descripcion} $${compGeforce3060rtx.precio}
    11 - Salir
    
    Gastaste: $${gastoTotal}.
    `);

    switch (producto) {
      case "1":
        sumarProducto(compI3.precio);
        console.log(arrayStock[0]);
        console.log(arrayStock.indexOf(compI3));
        break;
      case "2":
        sumarProducto(compI5.precio);
        console.log(arrayStock[1]);
        console.log(arrayStock.indexOf(compI5));
        break;
      case "3":
        sumarProducto(compI7.precio);
        console.log(arrayStock[2]);
        console.log(arrayStock.indexOf(compI7));
        break;
      case "4":
        sumarProducto(compI9.precio);
        console.log(arrayStock[3]);
        console.log(arrayStock.indexOf(compI9));
        break;
      case "5":
        sumarProducto(compMotherZ590.precio);
        console.log(arrayStock[4]);
        console.log(arrayStock.indexOf(compMotherZ590));
        break;
      case "6":
        sumarProducto(compMotherZ570.precio);
        console.log(arrayStock[5]);
        console.log(arrayStock.indexOf(compMotherZ570));
        break;
      case "7":
        sumarProducto(compRam16gb.precio);
        console.log(arrayStock[6]);
        console.log(arrayStock.indexOf(compRam16gb));
        break;
      case "8":
        sumarProducto(compRam32gb.precio);
        console.log(arrayStock[7]);
        console.log(arrayStock.indexOf(compRam32gb));
        break;
      case "9":
        sumarProducto(compFuenteCorsair.precio);
        console.log(arrayStock[8]);
        console.log(arrayStock.indexOf(compFuenteCorsair));
        break;
      case "10":
        sumarProducto(compGeforce3060rtx.precio);
        console.log(arrayStock[9]);
        console.log(arrayStock.indexOf(compGeforce3060rtx));
        break;
      case "11":
        continuar = false;
        break;
      default:
        alert("El valor ingresado no es válido.");
        break;
    }
    if (producto != "11") continuar = confirm("Desea seguir comprando?");
  }
  
  alert(`El total de tu compra es $${gastoTotal}.`);
}

comprar();
console.log(gastoTotal)


