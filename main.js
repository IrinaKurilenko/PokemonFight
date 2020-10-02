function $getElByID(id) {
	return document.getElementById(id);
}

const $btnScratch = $getElByID('btn-scratch');
const $btn = $getElByID('btn-kick');
const $btnWild = $getElByID('btn-wild');


const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: $getElByID('health-character'),
	elProgressbar: $getElByID('progressbar-character'),
	renderLifeHP,
	renderProgressbarHP,
	renderHP,
	changeHP,
};

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: $getElByID('health-enemy'),
	elProgressbar: $getElByID('progressbar-enemy'),
	renderLifeHP,
	renderProgressbarHP,
	renderHP,
	changeHP,
};

$btnScratch.addEventListener('click', function () {
	console.log("That's all you can do?");
	character.changeHP(random(10));
	enemy.changeHP(random(10));
});

$btn.addEventListener('click', function () {
	console.log('Kick!');
	character.changeHP(randomHigh(10, 30));
	enemy.changeHP(randomHigh(10, 30));
});

$btnWild.addEventListener('click', function () {
	console.log("OMG it's a Wild Charge!");
	character.changeHP(randomHigh(30, 50));
	enemy.changeHP(randomHigh(30, 50));
});

function init() {
	console.log('Start the game');
	character.renderHP();
	enemy.renderHP();
}

function renderHP() {
	this.renderLifeHP();
	this.renderProgressbarHP();
}

function renderLifeHP() {
	this.elHP.innerText = `${this.damageHP} / ${this.defaultHP} %`;
}

function renderProgressbarHP() {
	this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
	this.damageHP -= count;

	const log = this === enemy ? `${generateLog(this, character)} -${count} [${this.damageHP} / ${this.defaultHP}]` : `${generateLog(this, enemy)} -${count} [${this.damageHP} / ${this.defaultHP}]`;
	console.log(log);

	const $logsOnScreen = document.querySelector('#logs');
	const $p = document.createElement('p');
	$p.innerText = log;
	$logsOnScreen.insertBefore($p, $logsOnScreen.children[0]);

	if (this.damageHP <= 0) {
		this.damageHP = 0;
		alert(`For ${this.name} game is over :(`);
		$btn.disabled = true;
	}

	this.renderHP();
}

function random(num) {
	return Math.ceil(Math.random() * num);
}
function randomHigh(min, max) {
	return Math.ceil(Math.random() * (max - min)) + min;
}

function generateLog(firstPerson, secondPerson) {
	const logs = [
		`${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.`,
		`${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.`,
		`${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
		`${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
		`${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
		`${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
		`${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
		`${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника`,
		`${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
		`${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
	];

	return logs[random(logs.length) - 1];
}

init();