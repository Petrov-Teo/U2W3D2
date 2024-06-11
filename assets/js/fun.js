let formName = document.getElementById("formName");
const campoNome = document.getElementById("name");
const cardRow = document.getElementById("cardRow");
const save = document.getElementById("save");
const reset = document.getElementById("reset");

console.log(formName);

class Name {
  constructor(a) {
    this.name = a;
  }
}

const card = (obg) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = names;
  div.appendChild(p);
  div.classList.add("col");

  document.body.appendChild(div);
};

let names = [];

formName.onsubmit = (event) => {
  event.preventDefault();

  const namseStar = new Name(campoNome.value);
  names.push(namseStar);
  console.log(names);
  localStorage.setItem("events-memory", JSON.stringify(names));
};
console.log(names);

window.addEventListener("DOMContentLoaded", () => {
  const nameSave = localStorage.getItem("events-memory");
  const nameStarSave2 = JSON.parse(nameSave);
  console.log(nameStarSave2);
  nameStarSave2.push;
});

console.log(names);
