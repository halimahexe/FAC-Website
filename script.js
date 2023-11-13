let minBtn = document.getElementById('min-1');

let content = document.querySelector('.non-menu-1');

function minimise() {
    content.classList.add('hidden');
}

minBtn.addEventListener('click', minimise);

let maxBtn = document.getElementById('max-1');

function maximise() {
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
    }
}

maxBtn.addEventListener('click', maximise);
