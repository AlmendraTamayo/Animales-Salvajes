import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./Animales_investigados.js"

const data = (async function (){
    const animalElement = document.querySelector("#animal")
    const edadElement = document.querySelector("#edad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")

    const btnRegistrarElement= document.querySelector("#btnRegistrar")
    const TarjetitasDeAnimales =[]; 
    /* Control de errores! por si Json no existe, se borró el archivo, no existe en internet, etc. 
    --SI hay un arreglo, por defecto arreglo vacio
    -- Si es un objeto, por defecto nulo
     */
    let Animales = [];
    
    try{
        const Request = await fetch("/animales.json");
        const ParsedRequest = await Request.json();

        Animales = ParsedRequest.animales;
        
    }catch (e){
        console.error(e)
    }

    function actualizarVista(){
        const zonaDeTarjetasElement = document.querySelector(".zona-de-tarjetas");
/*         let Template ="";
        TarjetitasDeAnimales.forEach(animal => {
            Template += `
            <div class="card text-white bg-secondary" style="width:200px">
            <img src="./assets/imgs/${animal.Img}" class="card-img-top"/>
            <div class="card-body p-0">
                <a href="#" >
                <img class="p-1" src="./assets/imgs/audio.svg" style="width:50px"/>
                </a>
            </div>
            </div>
            `
        })
        zonaDeTarjetasElement.innerHTML=Template; */
        /* Borramos las tarjteas que habian antes */
        zonaDeTarjetasElement.innerHTML=""    
        /* animal por animal al DOM */
        TarjetitasDeAnimales.forEach(animal=>{
            const DIVCard  = document.createElement("div")
            const DIVFoto  = document.createElement("div");
            const DIVBoton = document.createElement("div");

            DIVCard.classList.add("card","text-white","bg-secondary")
            DIVCard.style.width="200px";
            DIVFoto.innerHTML = `<img src="./assets/imgs/${animal.Img}" class="card-img-top"/>`
            DIVBoton.classList.add("card-body","p-0")
            DIVBoton.innerHTML=`<a href="#" >
            <img class="p-1" src="./assets/imgs/audio.svg" style="width:50px"/>
            </a>`

            DIVBoton.addEventListener("click",()=>{
                console.log(animal)
            })

            DIVCard.appendChild(DIVFoto)
            DIVCard.appendChild(DIVBoton)

            zonaDeTarjetasElement.appendChild(DIVCard)
        })
      


    }

    animalElement.addEventListener("change", ()=>{
        const nombreDelAnimalElegido = animalElement.value;
        const animalEncontrado = Animales.find(animal => animal.name===nombreDelAnimalElegido)

        previewElement.setAttribute("src",`./assets/imgs/${animalEncontrado.imagen}`)
    });

    btnRegistrarElement.addEventListener("click", ()=>{
        const nombre = animalElement.value;
        const edad = edadElement.value;
        const comentarios = comentariosElement.value;
        const {imagen, sonido} = Animales.find(animal => animal.name===nombre)

        switch(nombre){
            case "Leon": {
                const leon = new Leon(nombre,edad, imagen, comentarios, sonido);
                TarjetitasDeAnimales.push(leon);
            }
            break;
            case "Lobo":{
                const lobo = new Lobo(nombre,edad, imagen, comentarios, sonido);
                TarjetitasDeAnimales.push(lobo);
            }
            break;
            case "Oso":{
                const oso = new Oso(nombre,edad, imagen, comentarios, sonido);
                TarjetitasDeAnimales.push(oso);
            }
            break;
            case "Aguila":{
                const aguila = new Aguila(nombre,edad, imagen, comentarios, sonido);
                TarjetitasDeAnimales.push(aguila);
            }
            break;
            case "Serpiente":{
                const serpiente = new Serpiente(nombre,edad, imagen, comentarios, sonido);
                TarjetitasDeAnimales.push(serpiente);
            }
            break;
        }

      console.log({TarjetitasDeAnimales}) 
      actualizarVista();
    })

})()