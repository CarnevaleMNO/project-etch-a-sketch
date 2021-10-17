const grid = document.querySelector(".grid");
const slider = document.querySelector(".slider");

const form = document.querySelector("#game-form");
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const para = document.querySelector('.remove');

const createGraph = () => {
    para.innerHTML = '';
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
    
    } else if(slider.value == 5){
        grid.innerHTML = '';
        grid.style.setProperty('grid-template-columns', 'repeat(48, 2fr)')
        grid.style.setProperty('grid-template-rows', 'repeat(48, 2fr)')
        for(let i = 0; i < 2304; i++){
            div = document.createElement('div')
            grid.append(div)
            div.classList.add('container')
        }
    }
}

btn1.addEventListener("click", function () {
  createGraph();
  grid.style.setProperty('box-shadow', '12px 12px 10px 1px rgba(1, 1, 15, 0.2)');
  let squares = document.querySelectorAll(".container");
  for (let square of squares) {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });
  }
});

btn2.addEventListener("click", function () {
  createGraph();
  let squares = document.querySelectorAll(".container");
  grid.style.setProperty('box-shadow', '12px 12px 10px 1px rgba(0, 0, 255, .2)');
  for (let square of squares) {
    square.addEventListener("mouseover", function () {
      let r = Math.floor(Math.random() * 255) + 1;
      let g = Math.floor(Math.random() * 255) + 1;
      let b = Math.floor(Math.random() * 255) + 1;
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  }
});

btn3.addEventListener('click', function(){
    grid.innerHTML = '';
})
