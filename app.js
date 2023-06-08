const colorValue = document.getElementById("color-picker");

const colorOption = document.getElementById("color");
const eraseOption = document.getElementById("erase");
const clearOption = document.getElementById("clear");

const sizeLabel = document.getElementById("size-label");
const sizeRange = document.getElementById("size-range");

const drawingContainer = document.querySelector(".drawing-container");

let widthAndHeight = drawingContainer.clientWidth;
sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;
let size = sizeRange.value; // Value from the range input
let divSize = widthAndHeight / size; // Size of the width and height for the div

sizeRange.addEventListener("input", () => {
	sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;
	size = sizeRange.value;

	// update the canvas pixel size and add needed containers.
	divSize = widthAndHeight / size;

	createDivs(divSize);
});

function createDivs(pixelSize) {
	drawingContainer.innerHTML = "";
	for (let i = 0; i < size * size; i++) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("pixel");
		newDiv.style.width = `${pixelSize}px`;
		newDiv.style.height = `${pixelSize}px`;
		drawingContainer.appendChild(newDiv);
	}
}

document.addEventListener("mousemove", function (e) {
	const target = e.target.closest(".pixel");

	if (target) {
		target.style.backgroundColor = colorValue.value;
	}
});

function erase() {
	colorValue.value = "#ffffff";
}
