let minBtn = document.getElementsByID('min-1');

let content = document.getElementsByClassName('non-menu-1');

function minimise() {
    content.classList.add('hidden');
}

minBtn.addEventListener('click', minimise);

let maxBtn = document.getElementsByID('max-1');

function maximise() {
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
    }
}

maxBtn.addEventListener('click', maximise);