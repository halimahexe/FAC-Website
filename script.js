// let minBtns = document.querySelectorAll('.minimise');

// minBtns.forEach(function(minBtn) {
//     minBtn.addEventListener('click', function(event) {
//         console.log(event.target.id);
//         let id = event.target.id.match(/\d+/);
//         let nonMenus = document.querySelectorAll('.non-menu');
//         nonMenu.classList.add('hidden');
//     })
// })

// Send Function

// let sendBtns = document.querySelectorAll('button[type="submit"]')
// console.log(sendBtns);

// let newTexts = document.querySelectorAll('.box');

// sendBtns.forEach(function(sendBtn) {

// })

// I want to take text entered in the textarea, press send and append that text to corresponding .conv.
// It requires a function that 

// Menu Bar Functions

let minBtns = document.querySelectorAll('.minimise');

minBtns.forEach(function (minBtn) {
    minBtn.addEventListener('click', function () {
        minBtn.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add('hidden');
        minBtn.parentElement.parentElement.parentElement.classList.add('only-mb');
    })
})

let maxBtns = document.querySelectorAll('.maximise');

maxBtns.forEach(function (maxBtn) {
    maxBtn.addEventListener('click', function () {
        maxBtn.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove('hidden');
        maxBtn.parentElement.parentElement.parentElement.classList.remove('only-mb');
    })
})

let closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        closeBtn.parentElement.parentElement.parentElement.remove();
    })
})

// // minimise function

// let minBtn = document.getElementById('min-1');

// let content = document.querySelector('.non-menu');

// let divWindow = document.querySelector('.window');

// function minimise() {
//     content.classList.add('hidden');
//     divWindow.classList.add('only-mb');
// }

// minBtn.addEventListener('click', minimise);

// // maximise function

// let maxBtn = document.getElementById('max-1');

// function maximise() {
//     if (content.classList.contains('hidden')) {
//         content.classList.remove('hidden');
//         divWindow.classList.remove('only-mb');
//     }
// }

// maxBtn.addEventListener('click', maximise);

// // close function

// let closeBtn = document.getElementById('close-1');

// let box = document.querySelector('.window');

// function close() {
//     box.remove();
// }

// closeBtn.addEventListener('click', close);
