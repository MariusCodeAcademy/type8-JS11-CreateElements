'use strict';
// kuriam elementus su js
const articleEl = document.getElementById('art');

// sukuriam el
const h1El = document.createElement('h1');
// el pridedam texta
h1El.textContent = 'Dinamiskai sukurtas h1';
// prdedam klase
h1El.className = 'main-title';
h1El.classList.add('more-title');
// add id
h1El.id = 'main';
// prideti bet koki atributa galima su setAttribute(koks atrtibutas, kokia reikmes)
h1El.setAttribute('title', 'this is main main title');
// patalpinti el psl
// parentEl.appednd(createdEl) - idedam i pries uzdarymo taga
// document.body.append(h1El);
// document.body.prepend(h1El);

console.log('h1El ===', h1El);

// articleEl.after(h1El);
// instestAdjasentElement

articleEl.insertAdjacentElement('beforeend', h1El);

const h2TextEl = '<h2 id="yes" > I am h2 el </h2>';
document.body.insertAdjacentHTML('afterbegin', h2TextEl);
