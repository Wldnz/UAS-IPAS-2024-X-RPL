document.addEventListener('DOMContentLoaded',() => {
    let showButtons = document.getElementById("container")
    let close = document.getElementById("close")
    let menu = document.getElementById("menu")
    let statusMenu = false
    showButtons.addEventListener('click',() => {
        showMenu()
    })

    close.addEventListener('click',() =>{
        menu.style.display = "none"
        showButtons.style.display = "flex"
        statusMenu = false
    })

    function showMenu() {
        showButtons.style.display = "none"
        menu.style.top = 0
        menu.style.display = "block"
        menu.style.animation = "menuSlide 2s"
        menu.style.animationPlayState = "running"
        close.style.display = "grid"
        statusMenu = true
    }

    function closeMenu(){
        menu.style.display ="none"
        showButtons.style.display = "flex"
        statusMenu = false
    }

    document.body.onclick = (e) => {
        if (e.target != showButtons && e.target != menu){
            if (statusMenu){
                closeMenu()
            }
        }
    }


    // //  declaration id or class 
    // const prev = document.getElementById('prev')
    // const next = document.getElementById('next')
    // const imageSlide = document.getElementsByClassName('myslide')
    // const number = document.getElementsByClassName('number')
    // let showslideIndex = 0


    // function goTo(n){
    //     // alert('sigma')
    //     showslide(showslideIndex += n)
    // }

    // prev.onclick = () =>{
    //     // alert('sigma')
    //     goTo(-1)
    // }
    // next.onclick = () =>{
    //     goTo(1)
    // }

    // function showslide(index){
    //     // alert('index saat ini ' + showslideIndex)
    //     if (index >= imageSlide.length ){showslideIndex = 0}
    //     if (index < 0){showslideIndex = imageSlide.length - 1}
    //     // alert('index saat ini ' + showslideIndex)
    //     // hide slide
    //     for (let i = 0; i < imageSlide.length; i++){
    //         imageSlide[i].style.display = "none"
    //     }

    //     imageSlide[showslideIndex].style.display = "block"
    //     number[showslideIndex].innerHTML = (showslideIndex + 1) + "/" + imageSlide.length
    // }

    // showslide(showslideIndex)

    
})