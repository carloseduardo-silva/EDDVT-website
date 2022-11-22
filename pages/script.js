


function menuopen(){
    const menu = document.querySelector("#menu")
    menu.classList.toggle("open")
}
 
function closemenu() {
    if(innerWidth > 800){
        const menu = document.querySelector("#menu")
        menu.classList.remove()
        menu.classList.add('hide')

}
}



window.addEventListener('onresize', closemenu())

    
