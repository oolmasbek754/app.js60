//14-usul
//const list = document.querySelector("ol");

//Array.prototype.toList = function () {
//  const fragment = document.createDocumentFragment();

//  this.forEach(text => {
//    const li = document.createElement("li");
//    li.textContent = text;
//    fragment.appendChild(li);
//  });

//  list.appendChild(fragment);
//};

//new Array(1000).fill("hiii").toList();

//15-usul
//const list = document.querySelector("ol");
//const template = document.createElement("template");

//for (let i = 0; i < 1000; i++) {
//  template.innerHTML = `<li>hiii</li>`;
//  list.appendChild(template.content.cloneNode(true));
//}

//16-usul
//<ol id="list"></ol>

//<style>
//  #list {
//    counter-reset: item;
//  }

//  #list li::before {
 //   counter-increment: item;
//    content: counter(item) ". ";
//  }
//</style>

//<script>
//  const list = document.querySelector("#list");

//  let i = 0;
//  while (i < 1000) {
 //   list.insertAdjacentHTML("beforeend", "<li>hiii</li>");
 //   i++;
 // }
//</script>
