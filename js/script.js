let cat = document.querySelectorAll("img")[0];
let dog = document.querySelectorAll("img")[1];

function catv() {
    cat.style.display = "none"
    dog.style.display = "visible"    
}

function dogv() {
    dog.style.display ="none"
    cat.style.display ="visible"
}