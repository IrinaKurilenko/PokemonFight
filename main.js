const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getNumberOfItems(item, someString) {
	let counter = 0;
	for (i = 0; i < someString.length; i++) {
		if (someString.charAt(i) == item) {
			counter++;
		}
	}
	return counter;
}

//console.log(getNumberOfItems('а', firstRow));
//console.log(getNumberOfItems('а', secondRow));

function getRow(firstRow, secondRow) {
	if (getNumberOfItems("а", firstRow) >= getNumberOfItems("а", secondRow)) {
		return firstRow;
	} else {
		return secondRow;
	}
}


console.log(getRow(firstRow, secondRow)); // мама мыла раму

