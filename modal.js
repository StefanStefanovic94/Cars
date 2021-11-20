let price = document.getElementById("price")
let closeX = document.getElementById("close")
let buyFirst = document.getElementById("buyFirst")
let buySecond = document.getElementById("buySecond")
let buyThird = document.getElementById("buyThird")
let buyFour = document.getElementById("buyFour")

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")

let modal = document.querySelector(".modal")



buyFirst.onclick = function () {
    modal.style.display = "block";
}
buySecond.onclick = function () {
    modal.style.display = "block";
}
buyThird.onclick = function () {
    modal.style.display = "block";
}
buyFour.onclick = function () {
    modal.style.display = "block";
}
closeX.onclick = function () {
    modal.style.display = "none";
}

let allMoney = 39999

const addMoneyOne = () => {
    if (one.checked === true) {
        
        allMoney += 276.60
        price.textContent = allMoney + "$"
    } else {
        allMoney -= 276.60
        price.textContent = allMoney + "$"
    }

    return price
}

const addMoneyTwo = () => {
    if (two.checked === true) {
        allMoney += 558.78
        price.textContent = allMoney + "$"
    } else {
        allMoney -= 558.78
        price.textContent = allMoney + "$"
    }

    return price
}
const addMoneyThree = () => {
    if (three.checked === true) {
        allMoney += 357.29
        price.textContent = allMoney + "$"
    } else {
        allMoney -= 357.29
        price.textContent = allMoney + "$"
    }

    return price
}
const addMoneyFour = () => {
    if (four.checked === true) {
        allMoney += 637.48
        price.textContent = allMoney + "$"
    } else {
        allMoney -= 637.48
        price.textContent = allMoney + "$"
    }

    return price
}

one.addEventListener("click", addMoneyOne)
two.addEventListener("click", addMoneyTwo)
three.addEventListener("click", addMoneyThree)
four.addEventListener("click", addMoneyFour)

