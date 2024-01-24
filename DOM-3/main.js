const createUl = (listOfLis, parent) => {
  const ul = document.createElement("ul");
  parent.appendChild(ul);
  for (const item of listOfLis) {
    const li = document.createElement("li");
    li.innerText = item;
    ul.append(li);
  }
};

// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
// const body = document.querySelector("body");

createUl(countries, document.body);
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
// const printDiv = ;

createUl(cars, document.querySelector('[data-function="printHere"]'));
// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const articles = [
  { title: "Random title1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const article of articles) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  h4.innerText = article.title;
  img.src = article.imgUrl;
  div.append(h4);
  div.append(img);
  div.classList.add("img-container");
  document.body.append(div);
}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement("button");
button.innerText = "Borro cosas";
document.body.prepend(button);
button.addEventListener("click", () => {
  document.querySelector(".img-container:last-of-type").remove();
});
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const divContainers = document.querySelectorAll(".img-container");
for (const div of divContainers) {
  const btn = document.createElement("button");
  btn.innerText = "❌";
  div.append(btn);
  btn.addEventListener("click", () => {
    div.remove();
  });
}
