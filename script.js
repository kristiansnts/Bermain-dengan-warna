// Favorite Color
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('box')){
        const box = getComputedStyle(e.target);
        let getColor = box.backgroundColor;
        changeUI(getColor);
        changeSlider(getColor);
    }
});

// Random Color
const randomColor = document.querySelector('.random-color');
randomColor.addEventListener('click', function() {
    const c = [0, 0, 0];
    let color = c.map(c => {
        return c += Math.floor(Math.random() * 255);
    })
    let getColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    changeUI(getColor);
    changeSlider(getColor);
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
    let getColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    changeUI(getColor);
});

// Real Time changer slider
// let color = [255, 255, 255];
// document.addEventListener('input', function(e) { 
//  // ======> 'event change to input, effect: color slider not work went click random color, and favorite color'
//     if(e.target.getAttribute('name') == 'sRed') {
//         let red = e.target.value;
//         color[0] = red;
//     } else if (e.target.getAttribute('name') == 'sGreen') {
//         let green = e.target.value;
//         color[1] = green;
//     } else if (e.target.getAttribute('name') == 'sBlue') {
//         let blue = e.target.value;
//         color[2] = blue;
//     }
//     let getColor = `rgb(${color[0]},${color[1]},${color[2]})`;
//     changeUI(getColor);
// });

// Mouse over change
document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round(event.clientX / window.innerWidth * 255);
    const yPos = Math.round(event.clientY / window.innerHeight * 255);
    const zPos = Math.round(xPos / yPos * 255);
    const getColor = `rgb(${xPos}, ${yPos}, ${zPos})`;
    document.body.style.backgroundColor = getColor;
    changeUI(getColor);
    changeSlider(getColor);
})


// Change UI
function changeUI(getColor) {
    const body = document.querySelector('body');
    body.style.backgroundColor = getColor;
    // RGB Reader
    const rgbColor = document.querySelector('.rgb-color');
    const pText = `${getColor}`;
    rgbColor.innerHTML = pText;
};

// Change Slider
function changeSlider(getColor) {
    const regExp = /\(([^)]+)\)/;
    const getRGB = regExp.exec(getColor);
    const rgbSplit = getRGB[1].split(', ');
    sRed = document.querySelector('input[name=sRed]');
    sGreen = document.querySelector('input[name=sGreen]');
    sBlue = document.querySelector('input[name=sBlue]');
    sRed.setAttribute('value', `${rgbSplit[0]}`);
    sGreen.setAttribute('value', `${rgbSplit[1]}`);
    sBlue.setAttribute('value', `${rgbSplit[2]}`);
}