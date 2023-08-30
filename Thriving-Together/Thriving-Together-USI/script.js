const close1 = document.querySelector('#close-1');
const close2 = document.querySelector('#close-2');
const close3 = document.querySelector('#close-3');
const close4 = document.querySelector('#close-4');


const open1 = document.querySelector('#tile-1');
const open2 = document.querySelector('#tile-2');
const open3 = document.querySelector('#tile-3');
const open4 = document.querySelector('#tile-4');

const active1 = document.querySelector('#tile-1-active');
const active2 = document.querySelector('#tile-2-active');
const active3 = document.querySelector('#tile-3-active');
const active4 = document.querySelector('#tile-4-active');


open1.addEventListener('click', function (event) {
    active2.classList.remove("active");
    active3.classList.remove("active");
    active4.classList.remove("active");
    active1.classList.add("active");
})

open2.addEventListener('click', function (event) {
    active1.classList.remove("active");
    active3.classList.remove("active");
    active4.classList.remove("active");
    active2.classList.add("active");
})

open3.addEventListener('click', function (event) {
    active2.classList.remove("active");
    active1.classList.remove("active");
    active4.classList.remove("active");
    active3.classList.add("active");
})

open4.addEventListener('click', function (event) {
    
    active2.classList.remove("active");
    active3.classList.remove("active");
    active1.classList.remove("active");
    active4.classList.add("active");
})

close1.addEventListener('click', function (event) {
    active1.classList.remove("active");
})

close2.addEventListener('click', function (event) {
    active2.classList.remove("active");
})
close3.addEventListener('click', function (event) {
    active3.classList.remove("active");
})
close4.addEventListener('click', function (event) {
    active4.classList.remove("active");
})