
let edad = prompt("Ingrese su edad aqui")
    while(edad < 18){
    alert("Lo siento, eres menor de edad")
    }
if(edad > 17){
    alert("Adelante, Eres mayor de edad")
}
const productos = [
    {nombre: "Vodka", precio: 120 },
    {nombre: "Fernet", precio: 200 },
    {nombre: "Ron", precio: 150 },
    {nombre: "Tequila", precio: 130 },
    {nombre: "Cigarrillos", precio: 80 },
]

let carrito = [

]

let elegir = prompt("Hola, bienvenido a MundoEscabio, Desea comprar algun producto? si o no")
while(elegir != "si" && elegir != "no"){
alert ("Por favor ingrese si o no")
elegir= prompt ("Desea comprar algun producto? si o no")
} 
if(elegir == "si"){
    alert("Nuestra lista de productos es:")
    let nuestrosProductos = productos.map((productos)=> productos.nombre + " " + productos.precio + "$");
    alert(nuestrosProductos.join(" - "))
} else if (elegir == "no"){
    alert("Gracias por visitarnos, no dudes en volver!")
}

while(elegir != "no"){
    let productos = prompt("Agrega un producto al carrito")
    let precio = 0

    if(productos == "Vodka" || productos == "Fernet" || productos == "Ron" ||productos == "Tequila" ||productos == "Cigarrillos" ){
        switch(productos){
            case "Vodka":
                precio = 120
            break
            case "Fernet":
                precio = 200
            break
            case "Ron":
                precio = 150
            break
        
            case "Tequila":
                precio = 130
            break
            case "Cigarrillos":
                precio = 80
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({productos, unidades, precio})
        console.log(carrito)
    } else {
        alert ("no tenemos ese producto, lo siento")
    }

    elegir = prompt("desea seguir commprando?")
    while(elegir === ("no")){
        alert("Gracias por su compra, podra encontrar el valor final en la proxima ventana")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: ${total} . Hasta luego`)