let   $  =  document

let barMenu   =  $.querySelector(".BarMenu")
let  leftSide   =  $.querySelector(".left-side")
let  sideBarWrapper  =  $.querySelector(".sideBar__wrapper")
barMenu.addEventListener("click"  , (e) => {
if (sideBarWrapper.classList.contains("activeed")) {
    sideBarWrapper.classList.remove("activeed")
    leftSide.style.transform = "translateY(0px)"

}else {
    sideBarWrapper.classList.add("activeed")
    leftSide.style.transform = "translateY(800px)"

}
        
    
})