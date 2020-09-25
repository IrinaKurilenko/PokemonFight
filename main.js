const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getNumberOfItems(item, someString) {
	let counter = 0;
	for (i = 0; i < someString.length; i++) {
		if (someString.charAt(i) === item) {
			counter++;
		}
	}
	return counter;
}

//console.log(getNumberOfItems('а', firstRow));
//console.log(getNumberOfItems('а', secondRow));

const getRow = (firstRow, secondRow) =>
	getNumberOfItems("а", firstRow) >= getNumberOfItems("а", secondRow) ? firstRow : secondRow;

console.log(getRow(firstRow, secondRow)); // мама мыла раму

/* =======================================================================*/

let phone = '+71234567890';
//console.log(phone.length);

function formattedPhone(phone) {
	for (i = 0; i < phone.length; i++) {
		phone.charAt(i);
	}
	return (`${phone[0] + phone[1]} (${phone[2]}${phone[3]}${phone[4]}) ${phone[5]}${phone[6]}${phone[7]}-${phone[8]}${phone[9]}-${phone[10]}${phone[1]}`);
}

console.log(formattedPhone('+71234567890'));
