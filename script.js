let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let nothingButton = document.getElementById("nothing-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

let pCount = 0;
let imgCount = 0;
let nothingCount = 0;

function addPButton() {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";
    
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph.";
    pDiv.appendChild(newParagraph);
    
    pCount++;
    document.getElementById("p-count").textContent = "pCount: " + pCount;
}

function addImgButton() 
{
    imgDiv.style.display = "block";
    pDiv.style.display = "none";
    
    let newImage = document.createElement("img");
    newImage.src = "loading-icon-isolated-on-transparent-background-vector.jpg"; 
    newImage.alt = "New Image";
    imgDiv.appendChild(newImage);
    
    imgCount++;
    document.getElementById("img-count").textContent = "imgCount: " + imgCount;
}

function doNothing() {
    nothingCount++;
    document.getElementById("nothing-count").textContent = "nothingCount: " + nothingCount;
}

pButton.addEventListener("click", addPButton);
imgButton.addEventListener("click", addImgButton);
nothingButton.addEventListener("click", doNothing);
