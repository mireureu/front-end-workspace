console.log(Math.floor(Math.random()* 3) + 1);

const imag = document.querySelectorAll('.main-image img');
const bt = document.querySelector('.click');
const rbt = document.querySelector('.restart');
console.log(imag);

const images = document.querySelectorAll('.main-image img');
console.log(images);


function restartHandler() {
    for(let i=0; i<images.length; i++){
        images[i].setAttribute("src", `resources/spy1.jpg`)
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    rbt.removerAttridute("disabled");
}

const result = document.querySelector('.main-result');
const span = document.querySelector(".click span");

let count = 0;

function clickHandler(){
    span.innerHTML = ++count;
    const random = [
    Math.floor(Math.random()* 3) + 1,
    Math.floor(Math.random()* 3) + 1,
    Math.floor(Math.random()* 3) + 1];
    for(let i=0; i<images.length; i++){
        images[i].setAttribute('src', `resources/spy${random[i]}.jpg`);
    }
    if(random[0]===random[1]&&random[1]===random[2]){
        result.innerHTML = "Congratulation!! Press restart to play again!!"
        bt.setAttribute("disabled", "disabled");
    }
}
bt.addEventListener('click', clickHandler);

// bt.addEventListener('click', function(){
//     const ran = (Math.floor(Math.random()* 3) + 1);
//     const ran1 = (Math.floor(Math.random()* 3) + 1);
//     const ran2 = (Math.floor(Math.random()* 3) + 1);
//     const i1 = document.querySelector(imag[0].setAttribute('src', `resources/spy${ran}.jpg`));
//     const i2 = document.querySelector(imag[1].setAttribute('src', `resources/spy${ran1}.jpg`));
//     const i3 = document.querySelector(imag[2].setAttribute('src', `resources/spy${ran2}.jpg`));
//     console.log(i1);
//     if(ran==ran1&&ran1==ran2){
//         alert("승리");
//     }
// })
rbt.addEventListener('click', restartHandler)
