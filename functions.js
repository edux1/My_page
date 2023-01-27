function random(limit) {
	return Math.floor(Math.random() * limit);
}

function clock(time, separator=":") {
	h = Math.floor(time/3600);
	m = Math.floor(time%3600/60);
	s = time%3600%60;
	if(h < 10) h = '0' + h;
	if(m < 10) m = '0' + m;
	if(s < 10) s = '0' + s;
	console.log(h + separator + m + separator + s);	
}

function concat_sort (...a) {
	return [].concat(...a).sort();
}

/*function days_of_month(m) {
	if(m >=8) m++;
	if(m === 2) return 28;
	else if(m%2 === 1) return 31;
	else return 30; 	
}*/

function days_of_month(m) {
	
	switch(m) {
		case 2:
			d = 28;
		break;
		case 4:
		case 6:
		case 9:
		case 11:
			d = 30;
		break;
		default:
			d = 31;
	}
	return d;
}

/*function initial_card(n) {
	cells = new Array(n).fill(-1);
	i = 0;
	while(i<n) {
		num = random(n);
		if(cells[num] == "-1") {
			cells[num] = i % (n/2) + 1;
			i++;
		}
	}
	return cells;
}*/

function initial_card(n) {
	cards = new Array(n).fill(0);
	return cards.map((e,i) => Math.floor(i/2)+1).sort(()  => Math.random() - 0.5);
}

let m = new Date().getMonth()+1;

console.log("El mes " + m + " té " + days_of_month(m) + " dies.");
console.log(concat_sort([7], [3,2], [5,6,4], [1]));
clock(3734);
console.log(initial_card(12));
