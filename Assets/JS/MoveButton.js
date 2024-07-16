function move_button() {
    var element = document.getElementById("no_button");
    var image_element = document.getElementById("image");
    var style = window.getComputedStyle(element);
    if (style.position !== "absolute") {
        element.style.position = "absolute";
        image_element.src = "./Assets/Images/wtf_cat.png";
    }
    element.style.left = `${getRandomNumber(10, 80)}%`;
    element.style.top = `${getRandomNumber(10,80)}%`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}