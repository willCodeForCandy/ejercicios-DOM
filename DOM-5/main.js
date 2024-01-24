// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
];

const lista = document.createElement('ul');
for (const album of albums) {
  const li = document.createElement('li');
  li.innerText = album;
  lista.append(li);
}
document.body.append(lista);
