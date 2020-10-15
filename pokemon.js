class Selectors {
	constructor(name) {
		this.elName = document.getElementById(`name - ${name}`);
		this.elImg = document.getElementById(`img - ${name}`)
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressbar = document.getElementById(`progressbar-${name}`);
	}
}

class Pokemon extends Selectors {
	constructor({ name, hp, type, selectors, attacks = [], img }) {
		super(selectors);

		this.name = name;
		this.hp = {
			current: hp,
			total: hp,
		};
		this.type = type;
		this.attacks = attacks;
		this.img = img,

			this.renderHP();
	}

	renderPokemon = () => {
		const { name, elName, img, elImg } = this;
		elName.innerText = name;
		elImg.src = img;
	}

	changeHP = (count, cb) => {
		this.hp.current -= count;
		if (this.hp.current <= 0) {
			this.hp.current = 0;
			alert(`For ${this.name} game is over :(`);
			const btn = document.querySelectorAll('.button');
			btn.forEach(item => item.disabled = true);
		}
		this.renderHP();
		cb && cb(count);
	}

	renderHP = () => {
		this.renderLifeHP();
		this.renderProgressbarHP();
	}

	renderLifeHP = () => {
		const { elHP, hp: { current, total } } = this;
		elHP.innerText = `${current} / ${total}`;
	}

	renderProgressbarHP = () => {
		const { elProgressbar, hp: { current, total } } = this;
		const percent = current / total * 100;
		elProgressbar.style.width = percent + '%';
		//console.log(current);
	}
}

export default Pokemon;

/*
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
*/