function changePunctuation(id) {
	let	g = document.getElementById(id);
	changeSize(g)
}

function changeSize(elem) {
	let i = 1;
	var width = 1;
	var id = setInterval(frame, 10);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			i = 0;
		} else {
			width++;
			elem.style.width = width + "%";
		}
	}
}
