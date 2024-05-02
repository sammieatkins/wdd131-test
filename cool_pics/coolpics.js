const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector(".menu");

handleResize();

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);

function viewerTemplate(path, alt) {
    let html = `
    <div class="viewer">
    <span class="close-viewer">X</span>
    <img src="${path}" alt="${alt}">
    </div>`
    return html;
}
let gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

function viewHandler(event) {
    // get the element that was clicked on from event.target
    let clickedElement = event.target;
    
	// get the src attribute from that element and 'split' it on the "-"
    let filePathParts = clickedElement.getAttribute("src").split("-");
    
	// construct the new path by adding "-full.jpeg" to the first part of the array from the previous step
    let newPath = filePathParts[0] + "-full.jpeg";
    
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    
    
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    
}
function closeViewer() {
    
}