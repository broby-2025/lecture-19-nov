// Code here!
/* 1 */


/* 2 */


/* 3 */


/* 4 */


/* 5 */


/* 6 */


/* 7 */


/* 8 */


/* 9 */


/* 10 */


/* 11 */


/* 12 */


/* 13 */
const mainRef = document.querySelector('main');

const articleRef = document.createElement('article');
articleRef.classList.add('art-4');
mainRef.appendChild(articleRef);

const articleTemp = `
    <figure>
        <img src="./img/hoodie-forrest.png" alt="hoodie forrest" />
    </figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>
        Detta är en riktigt schysst hoodie!
    </p>
    <button>buy</button>
`;
articleRef.innerHTML = articleTemp;

// const figureRef = document.createElement('figure');
// articleRef.appendChild(figureRef);

// const imgRef = document.createElement('img');
// imgRef.src = './img/hoodie-forrest.png';
// imgRef.alt = "Hoodie Forrest";
// figureRef.appendChild(imgRef);

// const titleRef = document.createElement('h2');
// titleRef.textContent = 'Sinus Hoodie';
// articleRef.appendChild(titleRef);

// const subtitleRef = document.createElement('h3');
// subtitleRef.textContent = 'Forrest';
// articleRef.appendChild(subtitleRef);

// const pRef = document.createElement('p');
// pRef.textContent = 'En riktigt najs tröja! Köp för fan!';
// articleRef.appendChild(pRef);

// const btnRef = document.createElement('button');
// btnRef.textContent = 'buy';
// articleRef.appendChild(btnRef);


/*
<article class="art-3">
    <figure>
        <img src="img/hoodie-ocean.png" alt="hoodie" />
    </figure>
    <h2>Sinus Hoodie</h2>
    <h3>Water</h3>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dignissimos saepe ratione possimus nobis?
    </p>
    <button>buy</button>
</article>
*/

/* 14 */


/* 15 */
const articleRefs = document.querySelectorAll('main > article');
console.log(articleRefs);

articleRefs.forEach(article => {
    article.addEventListener('click', (event) => {
        console.log(event.currentTarget);
        const name = event.currentTarget.querySelector('h3').textContent;
        console.log(`Hi! I'm ${name}!!`);
    })
});




