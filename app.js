const EFFECT = document.querySelector("#effect")
const NAV = document.querySelector("ul")

document.addEventListener("click", () => {
    const ACTIVE = document.querySelector("input:checked")
    let icon = ACTIVE.parentElement.children[1];
    let property_icon = icon.getBoundingClientRect()
    EFFECT.style.left = (property_icon.left - (NAV.getBoundingClientRect().left + (property_icon.width / 1.6))) + "px"
    
})  