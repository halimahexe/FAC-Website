const minBtns = document.querySelectorAll('.minimise');

minBtns.forEach(minimise(minBtn)) {
    minBtn.addEventListener('click', minimise() {
        minBtn.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add('hidden');
    })
}

const maxBtns = document.querySelectorAll('.maximise');

maxBtns.forEach(maximise(maxBtn)) {
    maxBtn.addEventListener('click', maximise() {
        let nonMenu = maxBtn.parentElement.parentElement.nextElementSibling.nextElementSibling;
        if (nonMenu.classList.contains('hidden')) {
            nonMenu.classList.remove('hidden');
        }
    })
}

const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(close(closeBtn)) {
    closeBtn.addEventListener('click',close() {
        let box = closeBtn.parentElement.parentElement.parentElement;
        box.remove();
    })
}

// minimise function

// let minBtn = document.getElementById('min-1');

// let content = document.querySelector('.non-menu-1');

// function minimise() {
//     content.classList.add('hidden');

// }

// minBtn.addEventListener('click', minimise);

// // maximise function

// let maxBtn = document.getElementById('max-1');

// function maximise() {
//     if (content.classList.contains('hidden')) {
//         content.classList.remove('hidden')
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