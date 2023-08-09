import './style.css'

const base = 'https://akabab.github.io/superhero-api/api';

function allIds(id) {
  const rotaAll = '/all.json'
  return fetch(`${base}${rotaAll}`).then((res) => res.json()).then((res) => console.log(res[id]))
}

allIds(5);