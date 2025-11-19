console.log(document);

let sectionRef = document.querySelector('#section');
let textRefs = document.querySelectorAll('.text');
console.log(textRefs);

for(let i = 0; i < 5; i++) {
    textRefs[i].textContent = 'Jag älskar Arsenal #' + i;

    if(i % 2 === 0) {
        // textRefs[i].setAttribute('style', 'color: red;');
        // textRefs[i].style = 'color: red;';
        
        // Detta är mer okej
        // textRefs[i].style.color = 'red';
        // textRefs[i].style.backgroundColor = 'black';

        textRefs[i].classList.add('t-red');
    } else {
        // textRefs[i].classList.add('d-none');
    }
} 

// textRefs[4].setAttribute('id', 'hejaArsenal');
textRefs[4].id = 'hejaArsenal';

const textRef = document.querySelector('#hejaArsenal');

const pRef = document.createElement('p');
pRef.textContent = 'Jag älskar Arsenal #5';
sectionRef.appendChild(pRef);
// sectionRef.insertBefore(pRef, textRef);

pRef.addEventListener('click', printTextToConsole);

function printTextToConsole(event) {
    console.log(event.target.textContent);
    event.target.textContent = 'Hata Tottenham';
}

pRef.addEventListener('mouseleave', (event) => {
    event.target.classList.toggle('t-red');
});