const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.style.color = "red";
red.textContent = "Hey, I'm red!";
container.appendChild(red);

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";
container.appendChild(blue);

const newdiv = document.createElement("div");
newdiv.style.border = "black";
newdiv.style.backgroundColor = "pink";
const indiv = document.createElement("h1");
indiv.textContent = "I'm in a div";
newdiv.appendChild(indiv);
const newp = document.createElement("p");
newp.textContent = "ME TOO!";
newdiv.appendChild(newp);
container.appendChild(newdiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});