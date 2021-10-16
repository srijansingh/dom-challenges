const btn = document.getElementById('btn');
const snackbar = document.querySelector('#container');

document.addEventListener('DOMContentLoaded', () => {
	let count = 0;
	let size = 0;
	const list = {};

	function newElement(id) {
		const element = document.createElement('div');
		element.className = 'snackbar';
		element.innerText = `This is text ${id}`;
		element.id = id;
		element.style.animation = 'fadein 1s';
		return element;
	}

	btn.addEventListener('click', () => {
		if (size >= 3) {
			removeItem(count - 2);
			delete list[count - 2];
		}
		insertItem();
		setTimeout(() => {
			removeItem(count);
		}, 3000);
	});

	function insertItem() {
		list[++count] = newElement(count);
		snackbar.appendChild(list[count]);
		size++;
	}

	function removeItem(id) {
		snackbar.removeChild(list[id]);
		delete list[id];
		size--;
	}

	snackbar.addEventListener('click', (e) => {
		const id = e.target.id;
		if (size > 0) {
			removeItem(parseInt(id, 10));
		}
	});
});
