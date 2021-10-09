const box = document.getElementById('boxes');
const colorTab = document.getElementById('colorTab');
const selectedTab = document.getElementById('selectedColors');
const matrixSize = 10;
let selectedColor = 'black';

document.addEventListener('DOMContentLoaded', () => {
	createMatrices();
	createColors();
});

{
	colorTab.addEventListener('click', (event) => {
		selectedColor = event.target.id;
		changeTabColor();
	});

	box.addEventListener('click', (event) => {
		if (event.target.className === 'box') {
			const id = event.target.id;
			const tab = document.getElementById(id);
			tab.style.background = selectedColor;
		}
	});
}

const changeTabColor = () => (selectedTab.style.background = selectedColor);
changeTabColor();
// Create pixel matrics

function createMatrices() {
	let count = 1;
	for (let i = 0; i < matrixSize; i++) {
		const row = document.createElement('div');
		row.className = 'row';
		for (let j = 0; j < matrixSize; j++) {
			const element = document.createElement('div');
			element.className = 'box';
			element.id = count;
			row.appendChild(element);
			count++;
		}
		box.appendChild(row);
	}
}

function createColors() {
	const COLORS = [
		'red',
		'blue',
		'green',
		'pink',
		'white',
		'black',
		'orange',
		'yellow',
		'purple',
		'skyblue',
	];

	for (let j = 0; j < matrixSize; j++) {
		const element = document.createElement('div');
		element.className = 'colors';
		element.style.background = COLORS[j];
		element.id = COLORS[j];
		colorTab.appendChild(element);
	}
}
