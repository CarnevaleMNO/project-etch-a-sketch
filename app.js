const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');

// for(let i = 0; i < 256; i++){
//     div = document.createElement('div')
//     grid.append(div)
//     div.classList.add('container')
// }

const form = document.querySelector("#game-form");
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});

const btn = document.querySelector('#btn1')

const createGraph = () => {
    if (slider.value == 1){
        grid.innerHTML = '';
        grid.style.setProperty('grid-template-columns', 'repeat(4, 2fr)')
        grid.style.setProperty('grid-template-rows', 'repeat(4, 2fr)')
        for(let i = 0; i < 16; i++){
            div = document.createElement('div')
            grid.append(div)
            div.classList.add('container')
        }
    } else if(slider.value == 2){
        grid.innerHTML = '';
        grid.style.setProperty('grid-template-columns', 'repeat(8, 2fr)')
        grid.style.setProperty('grid-template-rows', 'repeat(8, 2fr)')
        for(let i = 0; i < 64; i++){
            div = document.createElement('div')
            grid.append(div)
            div.classList.add('container')
        }
    } else if(slider.value == 3){
        grid.innerHTML = '';
        grid.style.setProperty('grid-template-columns', 'repeat(16, 2fr)')
        grid.style.setProperty('grid-template-rows', 'repeat(16, 2fr)')
        for(let i = 0; i < 256; i++){
            div = document.createElement('div')
            grid.append(div)
            div.classList.add('container')
        }
    } else if(slider.value == 4){
        grid.innerHTML = '';
        grid.style.setProperty('grid-template-columns', 'repeat(32, 2fr)')
        grid.style.setProperty('grid-template-rows', 'repeat(32, 2fr)')
        for(let i = 0; i < 1024; i++){
            div = document.createElement('div')
            grid.append(div)
            div.classList.add('container')
        }
    } else {
        return 'Error'
    }
}

btn1.addEventListener('click', function(){
    console.log(slider.value)
    createGraph()
    let squares = document.querySelectorAll('.container');
    for (let square of squares){
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'aqua'
        })
    }

})







