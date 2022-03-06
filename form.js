function getInput(){
    let input = document.querySelector('#firstName').value;
    const textThing = document.querySelector('#formy');
    const p2 = document.createElement('p');
    p2.textContent = `Welcome to the site ${input}!`;

    textThing.appendChild(p2);
}

const a2 = document.createElement('a')
const linkTxt = document.createTextNode("Home Page");
a2.appendChild(linkTxt);
a2.title = "Home Page";
a2.href = "./index.html";
document.querySelector('#poddy').appendChild(a2)

