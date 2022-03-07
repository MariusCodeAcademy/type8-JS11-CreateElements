// susikurti funkcija kuri paima html zyma, klases pavadinima ir texta kaip argumentus ir grazina sukurta elementa su klase ir tekstu

{
  /* <h1 class="main-title">Yes it is dynamic</h1> */
}

const h1El = document.createElement('h1');
h1El.textContent = 'Yes it is dynamic';
h1El.className = 'main-title';

document.body.prepend(h1El);

/* <section>
      <h2>Section title</h2>
      <p class="text">Hello i am section text</p>
    </section> */

// const sectionEl = document.createElement('section');

// const h2El = document.createElement('h2');

// h2El.textContent = 'Section title';

// sectionEl.append(h2El);
// //sukuriam
// const pEl = document.createElement('p');
// // pridedam klase
// pEl.className = 'text';
// // pridedam text
// pEl.textContent = 'Hello i am section text';
// sectionEl.append(pEl);
const sectionEl = document.createElement('section');
const h2El = makeEl('h2', 'Section title', '');
const pEl = makeEl('p', 'Hello i am section text', 'text');
sectionEl.append(h2El, pEl);
h1El.after(sectionEl);

// article about
const articleEl = document.createElement('article');
articleEl.className = 'about';

const ulEl = document.createElement('ul');
const miestaiObj = [
  {
    title: 'kaunas',
    population: 80000,
  },
  {
    title: 'Vilnius',
    population: 100000,
  },
];
// gauti Vilnius
miestaiObj[1].title;
const miestai = ['Kaunas', 'Vilnius', 'Klaipeda', 'Siauliai'];
for (let i = 0; i < miestai.length; i++) {
  const element = miestai[i];
  //one li
  // const li1 = document.createElement('li');
  // li1.className = 'a__towns';
  // li1.textContent = element;
  const liEl = makeEl('li', element, 'a__towns');
  ulEl.append(liEl);
  // one li END
}
// //one li
// const li1 = document.createElement('li');
// li1.className = 'a__towns';
// li1.textContent = 'Kaunas';
// ulEl.append(li1);
// // one li END
// //one li
// const li2 = document.createElement('li');
// li2.className = 'a__towns';
// li2.textContent = 'Vilnius';
// ulEl.append(li2);
// // one li END
// //one li
// const li3 = document.createElement('li');
// li3.className = 'a__towns';
// li3.textContent = 'Klaipeda';
// ulEl.append(li3);
// one li END
console.log('ulEl ===', ulEl);

// button
const btnEl = makeEl('button', 'Learn more', '');
btnEl.id = 'more-btn';
btnEl.addEventListener('click', showMore);

articleEl.append(ulEl, btnEl);
articleEl.insertAdjacentHTML('beforeend', '<button id="more-btn">Learn more HTML</button>');
sectionEl.after(articleEl);

function makeEl(tag, text, className) {
  //sukuriam
  const newEl = document.createElement(tag);
  // pridedam klase
  newEl.className = className;
  // pridedam text
  newEl.textContent = text;
  return newEl;
}
let count = 0;
function showMore() {
  console.log('btn clicked', ++count, 'times');
}
