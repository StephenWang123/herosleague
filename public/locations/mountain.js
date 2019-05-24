/* MOUNTAIN */

/* Boar, Wolf, Bear, Goblin */

var Boar = {"monster":"Boar","level":2, "melee":1,"ranged":1,"magic":1,"defense":1, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"},"gold":5};
var Wolf = {"monster":"Wolf","level":2, "melee":2,"ranged":1,"magic":1,"defense":1, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"},"gold":8};
var Bear = {"monster":"Bear","level":3, "melee":2,"ranged":1,"magic":1,"defense":2, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"}, "gold":10};
var Goblin = {"monster":"Goblin","level":4, "melee":3,"ranged":1,"magic":1,"defense":3, "armor":{"tag":"Leather Armor","myType":"armor"},"weapon":{"tag":"Wooden Dagger","myType":"weapon"}, "gold:":20};


function loadMonster(){
	var monster;
	var random = Math.random() * 100;

	if (random <= 50)
		monster = Boar;
	if ((random > 50) && (random <= 85))
		monster = Wolf;
	if ((random > 85) && (random <= 95))
		monster = Bear;
	if (random > 95)
		monster = Goblin;

	var vals = JSON.parse(localStorage.getItem('userData'));
	var playerCombat = Math.max(vals.melee+vals.weapon.meleeBonus+vals.armor.meleeBonus, vals.ranged+vals.weapon.rangedBonus+vals.armor.rangedBonus, vals.magic+vals.weapon.magicBonus+vals.armor.magicBonus) + vals.defense+vals.weapon.defenseBonus+vals.armor.defenseBonus;
	var monsterCombat = Math.max(monster.melee, monster.ranged, monster.magic) + monster.defense;

	var combatPool = playerCombat + monsterCombat;
	var playerWins = (playerCombat/combatPool) * 100;

	alert(monster.monster + " win rate : " + playerCombat + "/" + combatPool);

	var battleNum = Math.random() * 100;

	if (playerWins > battleNum){
		document.getElementById("resultText").innerHTML = "You defeated a " + monster.monster + ". You earned " + monster.gold + " gold.";
		vals.gold = vals.gold + monster.gold;
		localStorage.setItem('userData', JSON.stringify(vals));
	}
	else{
		document.getElementById("resultText").innerHTML = "You lost to a " + monster.monster + ".";
	}


}

function continueToMain(){
	window.location.href = "/main.html";
}