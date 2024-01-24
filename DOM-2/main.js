// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement('div');
document.body.appendChild(divVacio);
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div = document.createElement('div');
const p = document.createElement('p');
div.appendChild(p);
document.body.appendChild(div);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divLleno = document.createElement('div');

for (let i = 0; i < 7; i++) {
  const pp = document.createElement('p');
  divLleno.appendChild(pp);
}
// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamico = document.createElement('p');
pDinamico.innerText = 'Soy dinamico!';
document.body.appendChild(pDinamico);
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.querySelector('h2.fn-insert-here').innerText = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
for (const app of apps) {
  const li = document.createElement('li');
  li.innerText = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const toRemove = document.querySelectorAll('.fn-remove-me');
console.log(toRemove);
for (const element of toRemove) {
  element.remove();
}
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pDelMedio = document.createElement('p');
pDelMedio.innerText = 'Voy en medio!';
document.querySelector('div').insertAdjacentElement('afterend', pDelMedio);
//!element.insertAdjacentElement(position, element)
//!position acepta 4 posibles parámetros (strings): ‘beforebegin’, ‘afterbegin’, ‘beforeend’, ‘afterend’. Afterbegin y beforeend agregan el element como child.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase fn-insert-here
const insertar = document.querySelectorAll('.fn-insert-here');
for (const div of insertar) {
  const pInterno = document.createElement('p');
  pInterno.innerText = 'Voy dentro!';
  div.append(pInterno);
}
