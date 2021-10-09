const boxes = document.getElementById('boxes');
const matrixSize = 8;

document.addEventListener('DOMContentLoaded', () => {
	createMatrices();
});

function createMatrices() {
	let count = 0;
	for (let i = 0; i < matrixSize; i++) {
		const row = document.createElement('div');
		row.className = 'row';
		for (let j = 0; j < matrixSize; j++) {
			const element = document.createElement('div');
			element.className = 'box';
			if ((i + j) % 2 === 0) {
				element.style.background = 'black';
			}
			// element.innerHTML = `${i},${j}<br/> ${count}`;
			element.id = count;
			element.i = i;
			element.j = j;
			row.appendChild(element);
			count++;
		}
		boxes.appendChild(row);
	}
}

boxes.addEventListener('click', (event) => {
	const { i, j } = event.target;
	let arrDict = [];

	const insert = (value) => {
		if (!arrDict.includes(value) && value < 64) {
			arrDict.push(value);
		}
	};

	//Move bottom left;
	for (let m = i, n = j; m <= i + j; m++, n--) {
		insert(8 * m + n);
	}

	// Move bottom right
	for (let m = i, n = j; m < matrixSize && n < 8; m++, n++) {
		insert(8 * m + n);
	}

	// Move top left
	for (
		let m = i, n = j;
		n >= Math.abs(i - j) || m >= Math.abs(i - j);
		m--, n--
	) {
		insert(8 * m + n);
	}

	// Move top right
	for (let m = i, n = j; n <= i + j && n < 8; m--, n++) {
		insert(8 * m + n);
	}

	for (let i = 0; i < arrDict.length; i++) {
		const data = document.getElementById(arrDict[i]);
		data.style.background = 'green';
	}
});
