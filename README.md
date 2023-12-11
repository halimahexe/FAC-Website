# What is this website?

As part of my application to the [Founders and Coders](https://www.foundersandcoders.com/learn/) software developer bootcamp, I had to fulfill some prerequisites which included creating a website, game and reaching 6 kyu on [CodeWars](https://www.codewars.com/users/halimahexe).

**FAC had the following requirements for my website:**

- Tell us about you;
- Talk about why you’d like to move into a career as a web developer;
- Showcase what you’ve learnt so far;
- Be built only using HTML, CSS and vanilla JavaScript;
- Not use external libraries (e.g. Bootstrap, React, Jekyll themes);
- Be hosted on GitHub Pages;
- Link back to the GitHub repo with the code for your website.

This is the website I made, inspired by MSN, intended to be responsive on mobile and desktop.

## How did you build the website?

After completing a few of FreeCodeCamp's [Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/) and [Javascript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) courses, I downloaded VSCode and set to creating my website.

At first I found this quite difficult but, inspired by my early days on the internet, I decided I wanted to create a website that was reminiscent of MSN/Windows Live Messenger. I used to rush home every day to chat to my friends and play games with them, so it felt a fitting first project. I then scoured the internet for screenshots of what the program looked like and then drew it out on a notebook. Once I had that, I used [Figma](https://www.figma.com/files/recents-and-sharing?fuid=1253040728702586311) to draw it out, trying to assess the size of each element and how I would put it all together.

### How did you create the HTML and CSS?

From there, creating the HTML structure and CSS took me a few tries to get right.

I started by creating `div` elements for each 'window' that would make up the various things I wanted to demonstrate in my website: **about** me, **why** I want to become a developer, **projects** I had worked on while learning, and my **game**. These had menu bars, content boxes (with overflow scroll to mimic MSN chat windows), and `textarea` inputs with send buttons for 'sending messages'. (I wasn't originally convinced I could even make that function work!)

Once I had the basic structure down, I started worrying about how to make the website responsive. In retrospect, I think next time I build a website, I'll keep responsiveness at the forefront of my mind when creating the basic structure, so I don't have to refactor so much!

At first, I didn't use Flexbox or Grid and struggled to get my sidebar to behave correctly. I remember wondering whether I needed to use Flexbox but felt a little nervous to take the plunge when I already had the HTML structure of my various elements. But it paid off - I used wrappers around my main content and my sidebar to separate them with Flexbox which solved the issue of fixing my sidebar to the left without overlapping.

### How did you create the JavaScript?

After I'd created the website with HTML and CSS came the even trickier part: **adding JavaScript functionality**.

Because I wanted my website to behave in a similar way to MSN windows, each section was enclosed in a 'window' which had a minimise, maximise and close button. I knew that I could replicate whatever I chose to do for my minimise button but with slightly different effects so I initially added individual click event listeners to the minimise buttons and used a LOT of `nextElementSibling` and `ParentElement` syntax to find the right div elements I wanted the button clicks to affect.

```js
let minBtns = document.querySelectorAll('.minimise');
minBtns.forEach(function (minBtn) {
    minBtn.addEventListener('click', function () {
        minBtn.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add('hidden');
        minBtn.parentElement.parentElement.parentElement.classList.add('only-mb');
    })
})
```

Of course, this was quite clumsy and unhelpful for future amendments; if I wanted to change the structure, my buttons would no longer work as expected.

I hunted around [MDN Web Docs](https://developer.mozilla.org/en-US/) to find cleaner methods I could employ to achieve the same things without requiring a specific HTML structure. There I discovered the ability to locate `event.target.id` of the button clicked which I could then use to find the elements I wanted to modify, without using parent and sibling nodes. I learned a bit of RegEx from FreeCodeCamp and employed this to find the correct elements with the same id as the button clicked. With that, I modified my code as follows:

```js
let minBtns = document.querySelectorAll('.minimise');

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
```

I used similar logic to code my input `textarea` and send buttons to allow users to add messages to my windows (temporarily).

**Result!** 🎉

**Well, not quite...**

I asked a trusted friend and developer, [Hannah](https://github.com/hannahgooding), to look over my code and she pointed out a few places where I could improve it, to make it more readable and simpler. With her brilliant feedback, I refactored again, renaming the confusing `non-menu` id to `content` (much more logical!) and even simplified my JavaScript, removing the unnecessary nested `forEach` syntax once I grabbed the `event.target.id`.

Now my buttons look like:
```js
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
```

I got my button code from **22** lines to a whopping **12**! 🎉

## Final words

I enjoyed this project **so much** and it proved to me that becoming a software developer is not just a pipe dream. And I can't wait to build many more projects!