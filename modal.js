let price = document.getElementById("price")

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")

let allMoney = 39999

const addMoneyOne = () => {
    if (one.checked === true) {
        allMoney += 200.50
        price.textContent = allMoney
    } else {
        allMoney -= 200.50
        price.textContent = allMoney
    }

    return price
}

const addMoneyTwo = () => {
    if (two.checked === true) {
        allMoney += 200.50
        price.textContent = allMoney
    } else {
        allMoney -= 200.50
        price.textContent = allMoney
    }

    return price
}
const addMoneyThree = () => {
    if (three.checked === true) {
        allMoney += 200.50
        price.textContent = allMoney
    } else {
        allMoney -= 200.50
        price.textContent = allMoney
    }

    return price
}
const addMoneyFour = () => {
    if (four.checked === true) {
        allMoney += 200.50
        price.textContent = allMoney
    } else {
        allMoney -= 200.50
        price.textContent = allMoney
    }

    return price
}

one.addEventListener("click", addMoneyOne)
two.addEventListener("click", addMoneyTwo)
three.addEventListener("click", addMoneyThree)
four.addEventListener("click", addMoneyFour)

