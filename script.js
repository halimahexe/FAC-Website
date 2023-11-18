// Menu bar functions

let minBtns = document.querySelectorAll('.minimise');
let maxBtns = document.querySelectorAll('.maximise');
let closeBtns = document.querySelectorAll('.close');

let nonMenus = document.querySelectorAll('[id*="non-menu"]');
let windows = document.querySelectorAll('[id^="win-"]');

// Minimise button

minBtns.forEach(function(minBtn) {
    
    minBtn.addEventListener('click', function(event) {
        
        let number = event.target.id.match(/\d/);
        let nonMenu = '#non-menu-' + number;
        let window = '#win-' + number;

        nonMenus.forEach(function(i) {
            if (i.matches(nonMenu)) {
                i.classList.add('hidden');
            }
        })

        windows.forEach(function(i) {
            if (i.matches(window)) {
                i.classList.add('only-mb');
            }
        })

    })
})

// Maximise button

maxBtns.forEach(function(maxBtn) {
    
    maxBtn.addEventListener('click', function(event) {
        
        let number = event.target.id.match(/\d/);
        let nonMenu = '#non-menu-' + number;
        let window = '#win-' + number;

        nonMenus.forEach(function(i) {
            if (i.matches(nonMenu)) {
                i.classList.remove('hidden');
            }
        })

        windows.forEach(function(i) {
            if (i.matches(window)) {
                i.classList.remove('only-mb');
            }
        })

    })
})

// Close button

closeBtns.forEach(function(closeBtn) {
    
    closeBtn.addEventListener('click', function(event) {
        
        let number = event.target.id.match(/\d/);
        let window = '#win-' + number;

        windows.forEach(function(i) {
            if (i.matches(window)) {
                i.remove();
            }
        })

    })
})

// Send Function

// let sendBtns = document.querySelectorAll('button[type="submit"]')
// console.log(sendBtns);

// let newTexts = document.querySelectorAll('.box');

// sendBtns.forEach(function(sendBtn) {

// })

// I want to take text entered in the textarea, press send and append that text to corresponding .conv.
// It requires a function that