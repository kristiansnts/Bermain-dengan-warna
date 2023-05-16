// Favorite Color
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('box')){
        const box = getComputedStyle(e.target);
        let getColor = box.backgroundColor;
        changeUI(getColor);
        const regExp = /\(([^)]+)\)/;
        const getRGB = regExp.exec(getColor);
        const rgbSplit = getRGB[1].split(', ');
        changeSlider(rgbSplit);
    }
});

// Random Color
const randomColor = document.querySelector('.random-color');
randomColor.addEventListener('click', function() {
    const c = [0, 0, 0];
    let color = c.map(c => {
        return c += Math.floor(Math.random() * 255);
    })
    let getColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    changeUI(getColor);
    changeSlider(color);
});

// Color Slider
let color = [255, 255, 255];
document.addEventListener('change', function(e) {
    if(e.target.getAttribute('name') == 'sRed') {
        let red = e.target.value;
        color[0] = red;
    } else if (e.target.getAttribute('name') == 'sGreen') {
        let green = e.target.value;
        color[1] = green;
    } else if (e.target.getAttribute('name') == 'sBlue') {
        let blue = e.target.value;
        color[2] = blue;
    }
    let getColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    changeUI(getColor);
});


// Change UI
function changeUI(getColor) {
    const body = document.querySelector('body');
    body.style.backgroundColor = getColor;
    const rgbColor = document.querySelector('.rgb-color');
    const pText = `${getColor}`;
    rgbColor.innerHTML = pText;
};


// Change Slider
function changeSlider(rgbSplit) {
    sRed = document.querySelector('input[name=sRed]');
    sGreen = document.querySelector('input[name=sGreen]');
    sBlue = document.querySelector('input[name=sBlue]');
    sRed.setAttribute('value', `${rgbSplit[0]}`);
    sGreen.setAttribute('value', `${rgbSplit[1]}`);
    sBlue.setAttribute('value', `${rgbSplit[2]}`);
}

