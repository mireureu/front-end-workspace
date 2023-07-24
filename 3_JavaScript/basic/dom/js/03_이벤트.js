// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// })

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";
});

const img1 = document.querySelector('.container img:nth-child(1)');
const img2 = document.querySelector('.container img:nth-child(1)');
const img3 = document.querySelector('.container img:nth-child(1)');
const img4 = document.querySelector('.container img:nth-child(1)');
const img5 = document.querySelector('.container img:nth-child(1)');

const imgList = document.querySelectorAll('.container img');


const container = document.querySelector('.container');

function removeHandler(event){ // 이벤트 객체
    console.log(event.currentTarget);
    if(event.target!==container){
    event.target.style.display = 'none';
    }
    // this.style.display = 'none';
}

container.addEventListener('click', removeHandler);

// for(let i=0; i<imgList.length;i++){
//     imgList[i].addEventListener('click', function(){
//         imgList[i].style.visibility = 'hidden';
//     })
// }
// h2.addEventListener('click', function(){
//     h2.style.visibility = 'hidden';
// })

// img1.addEventListener('cilck', function(){
//     if(img1.style.visibility !== 'hidden'){
//         img1.style.visibility = 'hidden';
//     } else{
//         img1.style.visibility = 'visible';
//     };
// })
// //img1.style.display = 'none'; 으로도 됨
// imgList[0].addEventListener('click', function(){
//     imgList[0].style.visibility = 'hidden';
// })
// imgList[1].addEventListener('click', function(){
//     imgList[1].style.visibility = 'hidden';
// })
// imgList[2].addEventListener('click', function(){
//     imgList[2].style.visibility = 'hidden';
// })
// imgList[3].addEventListener('click', function(){
//     imgList[3].style.visibility = 'hidden';
// })
// imgList[4].addEventListener('click', function(){
//     imgList[4].style.visibility = 'hidden';
// })