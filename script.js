// Menu bar variables

const minBtns = document.querySelectorAll('.minimise');
const maxBtns = document.querySelectorAll('.maximise');
const closeBtns = document.querySelectorAll('.close');

const contents = document.querySelectorAll('[id*="content"]');
const windows = document.querySelectorAll('[id^="win-"]');

// Minimise button

minBtns.forEach(function(minBtn) {
    
    minBtn.addEventListener('click', function(event) {
        
        const number = event.target.id.match(/\d/); // Using RegEx to find the target id number
        const content = document.querySelector(`#content-${number}`); // Finding element with id #content-number
        const window = document.querySelector(`#win-${number}`); // Finding element with id #win-number
        
        content.classList.add('hidden'); // Hiding the content
        window.classList.add('only-mb'); // Setting this so only the menu bar shows up
    })
})

// Maximise button

maxBtns.forEach(function(maxBtn) {
    
    maxBtn.addEventListener('click', function(event) {
        
        const number = event.target.id.match(/\d/);
        const content = document.querySelector(`#content-${number}`);
        const window = document.querySelector(`#win-${number}`);

        content.classList.remove('hidden');
        window.classList.remove('only-mb');

    })
})

// Close button

closeBtns.forEach(function(closeBtn) {
    
    closeBtn.addEventListener('click', function(event) {
        
        const number = event.target.id.match(/\d/);
        const window = document.querySelector(`#win-${number}`);

        window.remove();

    })
})

// Send Function

const sendBtns = document.querySelectorAll('button[type="submit"]')
const newTexts = document.querySelectorAll('[class^="text-"]');

sendBtns.forEach(function(sendBtn) {
    sendBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const number = event.target.id.match(/\d/);
        
        const textBox = document.querySelector(`#text-${number}`);
        const newText = textBox.value;
        
        const convWin = document.querySelector(`#conv-${number}`);

        if (newText !== '') { // If the text box isn't empty, this will run
            let speaker = document.createElement('p');
            speaker.setAttribute('class','speaker');
            speaker.innerText = 'You say:';
            convWin.appendChild(speaker);
            
            let newMessage = document.createElement('p');
            newMessage.setAttribute('class','message');
            newMessage.innerText = newText;
            convWin.appendChild(newMessage);

            let date = new Date().toUTCString(); // UTC string dictates what format the Date will present itself in
            let status = document.createElement('p');
            status.setAttribute('class', 'status');
            status.innerHTML = `<span>Message sent ${date}</span><span>Halimah is not online right now.</span>`;
            convWin.appendChild(status);

            convWin.scrollTop = convWin.scrollHeight;
            textBox.value = ''; // Deletes previous content of the text box so new message can be entered
        }
    })
})

// Back to Top button

const topBtn = document.querySelector('#footer-btn');

topBtn.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})

// Add Enter act as click if I have time

// textBox.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();

//     }
// })