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

let sendBtns = document.querySelectorAll('button[type="submit"]')
let newTexts = document.querySelectorAll('[class^="text-"]');

sendBtns.forEach(function(sendBtn) {
    sendBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let number = event.target.id.match(/\d/);
        
        let text = '#text-' + number;
        let textBox = document.querySelector(text);
        let newText = textBox.value;
        
        let conv ='#conv-' + number;
        let convWin = document.querySelector(conv);

        if (newText !== '') {
            let speaker = document.createElement('p');
            speaker.setAttribute('class','speaker');
            speaker.innerText = 'You say:';
            convWin.appendChild(speaker);
            
            let newMessage = document.createElement('p');
            newMessage.setAttribute('class','message');
            newMessage.innerText = newText;
            convWin.appendChild(newMessage);

            convWin.scrollTop = convWin.scrollHeight;
            textBox.value = '';
        }
    })
})

// Add Enter act as click if I have time

// textBox.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();

//     }
// })