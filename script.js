// minimise function

let minBtn = document.getElementById('min-1');

let content = document.querySelector('.non-menu-1');

function minimise() {
    content.classList.add('hidden');
}

minBtn.addEventListener('click', minimise);

// maximise function

let maxBtn = document.getElementById('max-1');

function maximise() {
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
    }
}

maxBtn.addEventListener('click', maximise);

// close function

let closeBtn = document.getElementById('close-1');

let box = document.querySelector('.window');

function close() {
    box.remove();
}

closeBtn.addEventListener('click', close);