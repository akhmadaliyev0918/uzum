
let sale = document.getElementById("sale")
let filter = document.querySelector(".filter")
let addProduct = document.querySelector(".addProduct")

sale.addEventListener("click", () => {
    filter.style.filter = "blur(10px)";
    addProduct.style.display = "block";
    addProduct.style.flexdirection = "column";
    addProduct.style.gap = "20px";
})
let num = 0
let pictures = [
    "https://images.uzum.uz/crbgons2gps3jqbev3v0/main_page_banner.jpg",
    "https://images.uzum.uz/crbgrcc2gps3jqbev5cg/main_page_banner.jpg",
    "https://images.uzum.uz/cr899aesbq7g1s9bf460/main_page_banner.jpg",
    "https://images.uzum.uz/crdubh7s09cvvbjqs2kg/main_page_banner.jpg",
    "https://images.uzum.uz/crbgups2gps3jqbev8bg/main_page_banner.jpg",
    "https://images.uzum.uz/crdeanns09cvvbjqouv0/main_page_banner.jpg"
]
let imgcarousel = document.getElementById("img-carousel")
let leftbutton = document.getElementById("left-carousel-button")
let rightbutton = document.getElementById("right-carousel-button")
//
setInterval(() => {
    num++
    if (num === 6) {
        num = 0
    }
    if (num === 0) {
        imgcarousel.src = pictures[0]
    } else if (num === 1) {
        imgcarousel.src = pictures[1]
    }
    else if (num === 2) {
        imgcarousel.src = pictures[2]
    }
    else if (num === 3) {
        imgcarousel.src = pictures[3]
    }
    else if (num === 4) {
        imgcarousel.src = pictures[4]
    } else if (num === 5) {
        imgcarousel.src = pictures[5]
    }
    leftbutton.addEventListener('click', () => {
        if (num === 0) {
            num = 5
        } else {
            num--
        }
        imgcarousel.src = pictures[num]
    })
    rightbutton.addEventListener('click', () => {
        if (num === 5) {
            num = 0
        } else {
            num++
        }
        imgcarousel.src = pictures[num]
    })
}, 3000);
