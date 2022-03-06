




const headElement = document.querySelector('#logo')
const mainElement = document.querySelector('#mostly')
const footElement = document.querySelector('#feet')
//const podElement = document.querySelector('#poddy')
//setup the header
const h1 = document.createElement('h1');
h1.textContent = "Welcome to the Frendly Podcasting Network!"
const p_head = document.createElement('p');
p_head.textContent = "The home of podcasts where Frendlyindy talks about various nerdy things with other nerdy people."

const intro = "My name is Bradley Palmer aka Frendlyindy. I am a massive nerd. I love anything with a good story to it. The shows on this site are dedicated to my love of entertainment. There's going to be a variety, so I hope you find something to enjoy."

const h2 = document.createElement('h2')
h2.textContent = "What is this site really all about?"
const p1 = document.createElement('p')
p1.textContent = intro


headElement.appendChild(h1)
headElement.appendChild(p_head)
mainElement.appendChild(h2)
mainElement.appendChild(p1)

var img = document.createElement("img");
img.src = "./podcast-logo.jpeg";
headElement.appendChild(img)

const a = document.createElement('a');
const linkText = document.createTextNode("Podcasts Page");
a.appendChild(linkText);
a.title = "Podcasts Page";
a.href = "./pod.html";
mainElement.appendChild(a)


const feeter = document.createElement('p');
feeter.textContent = `© Bradley Palmer 2022`;
footElement.appendChild(feeter)


