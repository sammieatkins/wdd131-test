const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "");
document.body.appendChild(img);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Create a new section element.
// Add an h2 element with the content "CSE 121b"
// Add a paragraph p that says: "Welcome to Javascript Language"
// Add your section to the body.

// const section = document.createElement("section");
// const h2 = document.createElement("h2");
// h2.textContent = "CSE 121b";
// const p = document.createElement("p");
// p.textContent = "Welcome to Javascript Language";
// section.appendChild(h2);
// section.appendChild(p);
// document.body.appendChild(section);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newH2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection);
