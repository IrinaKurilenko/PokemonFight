const $btn = document.getElementById('btn-kick');

const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-character'),
	elProgressbar: document.getElementById('progressbar-character'),
	renderLifeHP: renderLifeHP,
	renderProgressbarHP: renderProgressbarHP,
	renderHP: renderHP,
	changeHP: changeHP,
};

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-enemy'),
	elProgressbar: document.getElementById('progressbar-enemy'),
	renderLifeHP: renderLifeHP,
	renderProgressbarHP: renderProgressbarHP,
	renderHP: renderHP,
	changeHP: changeHP,
};

$btn.addEventListener('click', function () {
	console.log('Kick!');
	character.changeHP(random(30));
	enemy.changeHP(random(20));
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
	if (this.damageHP < count) {
		this.damageHP = 0;
		alert(`For ${this.name} game is over :(`);
		$btn.disabled = true;
	} else {
		this.damageHP -= count;
	}
	this.renderHP();
}

function random(num) {
	return Math.ceil(Math.random() * num);
}

init();