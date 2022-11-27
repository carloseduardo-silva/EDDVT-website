


function menuopen(){
    const menu = document.querySelector("#menu")
    menu.classList.toggle("open")
}

function biblioOpen(){
    
    const biblioReal = document.querySelector('#Bibliografia')
    biblioReal.classList.toggle("aberto")

}
 
function closemenu() {
    if(innerWidth > 800){
        const menu = document.querySelector("#menu")
        menu.classList.remove()
        menu.classList.add('hide')

}
}



window.addEventListener('onresize', closemenu())

    
