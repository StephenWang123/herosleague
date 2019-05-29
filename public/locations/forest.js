/* FOREST */

/* Boar, Wolf, Bear, Goblin */

var Boar = {"monster":"Boar","level":2, "melee":1,"ranged":1,"magic":1,"defense":1, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"},"gold":5,"exp":6};
var Wolf = {"monster":"Wolf","level":2, "melee":2,"ranged":1,"magic":1,"defense":1, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"},"gold":8,"exp":8};
var Bear = {"monster":"Bear","level":3, "melee":2,"ranged":1,"magic":1,"defense":2, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"}, "gold":10,"exp":12};
var Goblin = {"monster":"Goblin","level":4, "melee":3,"ranged":1,"magic":1,"defense":3, "armor":{"tag":"Leather Armor","myType":"armor"},"weapon":{"tag":"Wooden Dagger","myType":"weapon"},"gold":20,"exp":22};

var levels = [0,64,125,216,343,512,729,1000,1331,1728,2197,2744,3375,4096,4913,5832,6859,8000,9261,10648,12167,13824,15625];

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

	//alert(monster.monster + " win rate : " + playerCombat + "/" + combatPool);

	var battleNum = Math.random() * 100;

	displayMonster(monster);

	if (playerWins > battleNum){
		document.getElementById("resultText").innerHTML = "You defeated a " + monster.monster + ". You earned " + monster.gold + " gold and " + monster.exp + " exp.";
		vals.gold = vals.gold + monster.gold;
		vals.exp = vals.exp + monster.exp;
		if (vals.exp >= levels[vals.level]){
			vals.exp = vals.exp - levels[vals.level];
			vals.level = vals.level + 1;
			levelUp(vals.level);
		}
		localStorage.setItem('userData', JSON.stringify(vals));
	}
	else{
		document.getElementById("resultText").innerHTML = "You lost to a " + monster.monster + ".";
	}


}

function levelUp(level){
	alert("You leveled up to level " + level + "!");
}

function displayMonster(monster){
	document.getElementById("monsterName").innerHTML = monster.monster;
	document.getElementById("monsterLevel").innerHTML = "Level: " + monster.level;

	document.getElementById("mMelee").innerHTML = monster.melee;
	document.getElementById("mRanged").innerHTML = monster.ranged;
	document.getElementById("mMagic").innerHTML = monster.magic;
	document.getElementById("mDefense").innerHTML = monster.defense;
	document.getElementById("mArmor").innerHTML = monster.armor.tag;
	document.getElementById("mWeapon").innerHTML = monster.weapon.tag;
}

function continueToMain(){
	window.location.href = "/main.html";
}