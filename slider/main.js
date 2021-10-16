const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const main = document.querySelector('.main');
const carousel = document.querySelector('.carousel');
const item = document.querySelectorAll('.item');

const itemLength = item.length;
const width = carousel.offsetWidth / itemLength;
const steps = Math.floor((width / item[0].offsetWidth) * itemLength);

document.addEventListener('DOMContentLoaded', () => {
	let count = 1;

	nextBtn.addEventListener('click', () => {
		if (count < steps) {
			carousel.style.transform = `translateX(-${width * count++}px)`;
		}
	});

	prevBtn.addEventListener('click', () => {
		if (count > 0) {
			count--;
			carousel.style.transform = `translateX(-${905 * count}px)`;
		}
	});
});
