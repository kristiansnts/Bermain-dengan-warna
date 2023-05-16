document.addEventListener('click', function(e) {
    if(e.target.classList.contains('box')){
        const box = getComputedStyle(e.target);
        let getColor = box.backgroundColor;
        changeUI(getColor);
    }
});


const randomColor = document.querySelector('.random-color');
randomColor.addEventListener('click', function() {
    const c = [0, 0, 0];
    const color = c.map(c => {
        return c += Math.floor(Math.random() * 255);
    })
    const getColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    changeUI(getColor);
});


function changeUI(getColor) {
    const body = document.querySelector('body');
    body.style.backgroundColor = getColor;
};