// Menu bar variables

let minBtns = document.querySelectorAll('.minimise');
let maxBtns = document.querySelectorAll('.maximise');
let closeBtns = document.querySelectorAll('.close');

let nonMenus = document.querySelectorAll('[id*="non-menu"]');
let windows = document.querySelectorAll('[id^="win-"]');

// Minimise button

minBtns.forEach(function(minBtn) {
    
    minBtn.addEventListener('click', function(event) {
        
        let number = event.target.id.match(/\d/); // Using RegEx to find the target id number
        let nonMenu = '#non-menu-' + number; // Assigning number to element with id #non-menu-number
        let window = '#win-' + number; // Assigning number to element with id #win-number

        nonMenus.forEach(function(i) { // This takes the array of non-menu elements and iterates through each of them to find a match to the non-menu element with the same number as the event.target
            if (i.matches(nonMenu)) { // i is one element in the nonMenus array (named i to avoid confusion with the variable named nonMenu)
                i.classList.add('hidden');
            }
        })

        windows.forEach(function(i) { // This takes the array of window elements and iterates through each of them to find a match to the window element with the same number as the event.target
            if (i.matches(window)) { // i is one element in the windows array (named i to avoid confusion with the variable named window)
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


            let date = new Date().toUTCString();
            let status = document.createElement('p');
            status.setAttribute('class', 'status');
            status.innerHTML = `<span>Message sent ${date}</span><span>Halimah is not online right now.</span>`;
            convWin.appendChild(status);

            convWin.scrollTop = convWin.scrollHeight;
            textBox.value = '';
        }
    })
})

// Back to Top button

let topBtn = document.querySelector('#footer-btn');

topBtn.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})

// Add Enter act as click if I have time

// textBox.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();

//     }
// })