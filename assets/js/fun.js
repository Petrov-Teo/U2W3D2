// let formName = document.getElementsById("formName");
const campoNome = document.getElementById("name");

console.log(formName);

class Name {
  constructor(name) {
    this.name = name;
  }
}

let names = [];

formName.onsubmit = (event) => {
  event.preventDefault();

  const namseStar = new Name(campoNome.value);
  names.push(namseStar);
  console.log(names);
  localStorage.setItem("events-memory", JSON.stringify(names));
};
console.log(names);
