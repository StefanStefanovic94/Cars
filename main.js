let menuBox = document.querySelector(".notActivate")
let butt = document.getElementById("forClick")
let aboutUs = document.querySelector(".aboutAsNotActive")
let homepage = document.querySelector(".active")

const changeClass = () => {
    if (menuBox.className === "notActivate" && aboutUs.className === "aboutAsNotActive" && homepage.className === "active") {
        menuBox.className = "activate"
        aboutUs.className = "aboutAsActive"
        homepage.className="homepageNotActive"
    } else {
        menuBox.className = "notActivate"
        aboutUs.className = "aboutAsNotActive"
        homepage.className="active"
    }
    return menuBox
}

butt.addEventListener("click", changeClass)
