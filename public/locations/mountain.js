/* Mountain */

/* ArmoredBoar, Orc, Wyvern, RockGiant */

var ArmoredBoar = {"monster":"Armored Boar","level":5, "melee":3,"ranged":1,"magic":1,"defense":3, "armor":{"tag":"Metal Plates","myType":"armor"},"weapon":{"tag":"Metal Tusks","myType":"weapon"},"gold":20,"exp":24};
var Orc = {"monster":"Orc","level":6, "melee":4,"ranged":1,"magic":1,"defense":5, "armor":{"tag":"Leather Armor","myType":"armor"},"weapon":{"tag":"Mace","myType":"weapon"},"gold":22,"exp":25};
var Wyvern = {"monster":"Wyvern","level":8, "melee":2,"ranged":5,"magic":1,"defense":5, "armor":{"tag":"empty","myType":"armor"},"weapon":{"tag":"empty","myType":"weapon"}, "gold":25,"exp":26};
var RockGiant = {"monster":"Rock Giant","level":11, "melee":6,"ranged":1,"magic":1,"defense":6, "armor":{"tag":"Giant Armor","myType":"armor"},"weapon":{"tag":"Giant Hammer","myType":"weapon"},"gold":33,"exp":33};

var levels = [0,64,125,216,343,512,729,1000,1331,1728,2197,2744,3375,4096,4913,5832,6859,8000,9261,10648,12167,13824,15625];

function loadMonster(){
	var monster;
	var random = Math.random() * 100;

	if (random <= 50)
		monster = ArmoredBoar;
	if ((random > 50) && (random <= 85))
		monster = Orc;
	if ((random > 85) && (random <= 95))
		monster = Wyvern;
	if (random > 95)
		monster = RockGiant;

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