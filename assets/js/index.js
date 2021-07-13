class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#img=img;
        this.#comentarios=comentarios;
        this.#sonido=sonido;
    }

    get Nombre(){
        return this.#nombre;
    }
    get Edad(){
        return this.#edad;
    }
    get Img(){
        return this.#img;
    }
    get Sonido(){
        return this.#sonido;
    }
    get Comentarios(){
        return this.#comentarios;
    }
    set Comentarios(value){
        this.#comentarios=value;
    }
}

/* class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir(){

    }
} */
// puedo no escribir constructor y super si los argumentos son los mismos. 
class Leon extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Rugir(){
        console.log("roar")
    }
}
class Lobo extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Aullar(){
        console.log("auuu")
    }
}
class Oso extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Gruñir(){
        console.log("grr")
    }
}
class Serpiente extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Sisear(){
        console.log("zzzz")
    }
}
class Aguila extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Chillar(){
        console.log("ñiii")
    }
}

(async function (){
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