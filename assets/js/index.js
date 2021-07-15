const data = (async function (){
    const animalElement = document.querySelector("#animal")
    const edadElement = document.querySelector("#edad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")

    const btnRegistrarElement= document.querySelector("#btnRegistrar")

    /* Control de errores! por si Json no existe, se borró el archivo, no existe en internet, etc.  */
    let Animales = []
    try{
        const Request = await fetch("/animales.json");
        const ParsedRequest = await Request.json();

        Animales = ParsedRequest.animales
        
    }catch (e){
        console.error(e)
    }

    animalElement.addEventListener("change", ()=>{
        const nombreDelAnimalElegido = animalElement.value;
        const animalEncontrado = Animales.find(animal => animal.name===nombreDelAnimalElegido)

        previewElement.setAttribute("src",`./assets/imgs/${animalEncontrado.imagen}`)
    });

    btnRegistrarElement.addEventListener("click", ()=>{
        let nombre = animalElement.value;
        let edad = edadElement.value;
        let comentarios = comentariosElement.value;

        console.log({nombre, edad, comentarios})
    })

})()