
let currentInterface = 1;

function leftClick() {

    let btn = document.getElementById("btn");
    let show = document.getElementById("content");
    let hide = document.getElementById("content-2");
    btn.style.left = '0rem';  
    content.style.display = 'block';
    hide.style.display = 'none';
}

function midClick() {
  let btn = document.getElementById("btn");
    btn.style.left = '12rem';
  let hide = document.getElementById("content")
  let show = document.getElementById("content-2");
  hide.style.display = 'none';
  show.style.display = 'block';
}

function rightClick()
{
  let btn = document.getElementById("btn");
  let hide = document.getElementById("content");
  let show = document.getElementById("content-2");
    btn.style.left = '24rem';
    show.style.display ='block';
    hide.style.display = 'none';
}