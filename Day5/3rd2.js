/* Here you have to add a keydown event listener on window so that you can get 
information of which key is pressed and build logic around it.
Then you have to build logic such that, Each key press changes the color of its
corrosponsing letter ('letters are inside span tags, having class .letter').
Change it to the color provided below. 

Important ID(s): container's (div) id = 'container'
Important Class(s): class for span tags containing letters = 'letter' */
const COLOR = 'rgb(128, 128, 255)'

/* code from here */
const container = document.getElementById('container');


const color =  'rgb(128, 128, 255)' ;


window.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toLowerCase();
    const charactersToHighlight = ['d', 'e', 'v', 's', 'n', 't'];


    if (charactersToHighlight.includes(keyPressed)) {
        container.querySelectorAll('.letter').forEach(span => {            
            if (span.textContent.toLowerCase() === keyPressed) {                
                span.style.color = color;
            }
        });
    }
});

/* to here */