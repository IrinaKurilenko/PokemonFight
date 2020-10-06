import Pokemon from "./pokemon.js";

const player1 = new Pokemon({
	name: 'Pikachu',
	type: 'electric',
	hp: 150,
	selectors: 'character',
});

const player2 = new Pokemon({
	name: 'Charmander',
	type: 'fire',
	hp: 150,
	selectors: 'enemy',
});

const $getElByID = id => document.getElementById(id);

const $button = document.getElementsByClassName('button');
const $btnScratch = $getElByID('btn-scratch');
const $btnJolt = $getElByID('btn-jolt');
const $btnWild = $getElByID('btn-wild');

const countScratch = clickCounter(5, $btnScratch);
$btnScratch.addEventListener('click', function () {
	countScratch();
	player1.changeHP(random(10), function (count) {
		console.log(generateLog(player1, player2, count));
	});
	player2.changeHP(random(10), function (count) {
		//console.log(generateLog(player1, player2, count));
	});
	//console.log("That's all you can do?");
});

const countJolt = clickCounter(5, $btnJolt);
$btnJolt.addEventListener('click', function () {
	countJolt();
	player1.changeHP(randomHigh(10, 30), function (count) {
		console.log(generateLog(player1, player2, count));
	});
	player2.changeHP(randomHigh(10, 30), function (count) {
		//console.log(generateLog(player1, player2, count));
	});
	//console.log('Kick!');
});

const countWild = clickCounter(2, $btnWild);
$btnWild.addEventListener('click', function () {
	countWild();
	player1.changeHP(randomHigh(30, 50), function (count) {
		//console.log('Some change after change HP', count);
		console.log(generateLog(player1, player2, count));
	});
	player2.changeHP(randomHigh(30, 50), function (count) {
		//console.log(generateLog(player1, player2, count));
	});
	//console.log("OMG it's a Wild Charge!");
});

function clickCounter(clicks = 5, button) {
	const btnInnerText = button.innerText;
	button.innerText = `${btnInnerText} (${clicks})`;
	return function () {
		clicks--;
		if (clicks === 0) {
			button.disabled = true;
		}
		button.innerText = `${btnInnerText} (${clicks})`;
		return clicks;
	};
}

function init() {
	console.log('Start the game');

}

function renderHP() {
	this.renderLifeHP();
	this.renderProgressbarHP();
}

function renderLifeHP() {
	const { elHP, hp: { current, total } } = this;
	elHP.innerText = `${current} / ${total}`;
}

function renderProgressbarHP() {
	const { elProgressbar, hp: { current, total } } = this;
	const percent = current / total * 100;
	elProgressbar.style.width = percent + '%';
	//console.log(parseInt(percent));
}

function changeHP(count) {
	this.hp.current -= count;

	const log = this === enemy ? generateLog(this, player1, count) : generateLog(this, player2, count);
	console.log(log);

	const $logsOnScreen = document.querySelector('#logs');
	const $p = document.createElement('p');
	$p.innerText = log;
	$logsOnScreen.insertBefore($p, $logsOnScreen.children[0]);

	if (this.hp.current <= 0) {
		this.hp.current = 0;
		alert(`For ${this.name} game is over :(`);
		$button.disabled = true;
	}

	this.renderHP();
}

const random = num => Math.ceil(Math.random() * num);
const randomHigh = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

function generateLog(player1, player2, count) {
	const { name, hp: { current, total } } = player1;
	const { name: enemyName } = player2;
	const logs = [
		`${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${current} / ${total}]`,
		`${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${current} / ${total}]`,
		`${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${current} / ${total}]`,
		`${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. -${count}, [${current} / ${total}]`,
		`${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count}, [${current} / ${total}]`,
		`${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. -${count}, [${current} / ${total}]`,
		`${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. -${count}, [${current} / ${total}]`,
		`${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. -${count}, [${current} / ${total}]`,
		`${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. -${count}, [${current} / ${total}]`,
		`${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. -${count}, [${current} / ${total}]`
	];
	return logs[random(logs.length) - 1];
}

init();

