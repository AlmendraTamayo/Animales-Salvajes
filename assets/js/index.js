const data = (async function (){
    const animalElement = document.querySelector("#animal")
    const edadElement = document.querySelector("#edad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")

    const btnRegistrarElement= document.querySelector("#btnRegistrar")

    const request = await fetch("/animales.json");
    const {animales: Animales} = await request.json();


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