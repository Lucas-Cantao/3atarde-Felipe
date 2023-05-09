let aviso = document.querySelector(".aviso")
let main = document.querySelector("#main")
let postIt = document.querySelector(".post-it")

postIt.addEventListener("click", abrir)

function abrir(){
    main.style.display = "none"
    aviso.style.display = "block"
}


