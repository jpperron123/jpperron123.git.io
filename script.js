window.addEventListener("scroll", function (e) {
	const target = this.document.querySelectorAll(".scroll");

	let scrolled = window.pageYOffset;
	let index = 0,
		length = target.length;
	for (index; index < length; index++) {
		let pos = window.pageYOffset * target[index].dataset.rate;

		if (target[index].dataset.direction === "vertical") {
			target[index].style.transform = "translate3d(0px, " + pos + "px, 0px )";
		} else {
			let posX = window.pageYOffset * target[index].dataset.ratex;
			let posY = window.pageYOffset * target[index].dataset.ratey;

			target[index].style.transform = "translate3d(" + posX + "px, " + posY + "px, 0px )";
		}
	}
});

let myDiv = document.getElementById("shape");

const move = (e) => {
	var x = e.pageX;
	var y = e.pageY;
	myDiv.style.left = x - 50 + "px";
	myDiv.style.top = y - 50 + "px";
};

document.addEventListener("mousemove", (e) => {
	move(e);
});

const competences = document.querySelector("#competences");
const rose = document.querySelector("#rose");
const rosePathElements = rose.querySelectorAll("path");
const pathElements = competences.querySelectorAll("path");

competences.classList.add("start");

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.9,
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			competences.classList.add("animate");
			observer.unobserve(entry.target);
		}
	});
}, options);

rosePathElements.forEach((path) => {
	path.style.strokeDasharray = path.getTotalLength();
	path.style.strokeDashoffset = path.getTotalLength();
});

const roseObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			rose.classList.add("animate");
			observer.unobserve(entry.target);
		}
	});
}, options);

roseObserver.observe(rose);

observer.observe(competences);
observer.observe(rose);
