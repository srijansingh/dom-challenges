const star = document.getElementById('star');
let starId = 0;
let clicked = false;

document.addEventListener('DOMContentLoaded', () => {
	[...Array(10)].map((_, index) => {
		const element = document.createElement('i');
		element.className = 'fa fa-star-o';
		element.id = index;
		star.appendChild(element);
	});
	starValue();
});

star.addEventListener('mouseover', (event) => {
	if (clicked === false) {
		removeStar();
		const id = event.target.id;
		starId = id;
		addStars(id);
	}
});

star.addEventListener('click', (event) => {
	clicked = true;
	removeStar();
	const id = event.target.id;
	starId = id;
	addStars(id);
	displayStarValue();
});

function addStars(id) {
	for (let i = 0; i <= id; i++) {
		const data = document.getElementById(i);
		data.classList.remove('fa-star-o');
		data.classList.add('fa-star');
	}
}

function removeStar() {
	for (let i = 0; i <= starId; i++) {
		const data = document.getElementById(i);
		data.classList.remove('fa-star');
		data.classList.add('fa-star-o');
	}
}

function starValue() {
	const p = document.createElement('p');
	p.id = 'value';
	star.appendChild(p);
}

function displayStarValue() {
	const value = document.getElementById('value');
	value.innerHTML = `Your rating is ${parseInt(starId, 10) + 1}`;
	console.log(value);
}
