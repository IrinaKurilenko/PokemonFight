import Pokemon from "./pokemon.js";
import { pokemons } from "./pokemons.js";
import { random, generateLog, clickCounter } from "./utils.js";

const randomHero = pokemons[random(pokemons.length - 1)];
console.log(randomHero);
const randomEnemy = pokemons[random(pokemons.length - 1)];
console.log(randomEnemy);

const player1 = new Pokemon({
	...randomHero,
	selectors: 'player1',
});
console.log(player1);

const player2 = new Pokemon({
	...randomEnemy,
	selectors: 'player2',
});
console.log(player2);

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
	//console.log(item);
	const $btn = document.createElement('button');
	$btn.classList.add('button');
	$btn.innerText = item.name;

	const btnCount = clickCounter(item.maxCount, $btn)
	$btn.addEventListener('click', () => {
		//console.log('Click button ', $btn.innerText);
		btnCount();
		player1.changeHP(random(item.minDamage, item.maxDamage), function (count) {
			console.log(generateLog(player1, player2, count));
		});
		player2.changeHP(random(item.minDamage, item.maxDamage), function (count) {
			console.log(generateLog(player1, player2, count));
		});
	})

	$control.appendChild($btn);
})

player2.attacks.forEach(item => {
	//console.log(item);
	const $btn = document.createElement('button');
	$btn.classList.add('button');
	$btn.innerText = item.name;

	const btnCount = clickCounter(item.maxCount, $btn)
	$btn.addEventListener('click', () => {
		//console.log('Click button ', $btn.innerText);
		btnCount();
		player1.changeHP(random(item.minDamage, item.maxDamage), function (count) {
			console.log(generateLog(player1, player2, count));
		});
		player2.changeHP(random(item.minDamage, item.maxDamage), function (count) {
			console.log(generateLog(player1, player2, count));
		});
	})
})