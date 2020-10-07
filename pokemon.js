class Selectors {
	constructor(name) {
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressbar = document.getElementById(`progressbar-${name}`);
	}
}

class Pokemon extends Selectors {
	constructor({ name, hp, type, selectors }) {
		super(selectors);

		this.name = name;
		this.hp = {
			current: hp,
			total: hp,
		};
		this.type = type;

		this.renderHP();
	}

	changeHP = (count, cb) => {
		this.hp.current -= count;
		if (this.hp.current <= 0) {
			this.hp.current = 0;
			alert(`For ${this.name} game is over :(`);
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