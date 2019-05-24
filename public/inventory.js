var vals = JSON.parse(localStorage.getItem('userData'));
var emptyArmor = {"tag":"empty","myType":"armor","meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":0};
var emptyWeapon = {"tag":"empty","myType":"weapon","meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":0};


function loadInventory(){
	save();
	var slotName = "slotName";
	vals = JSON.parse(localStorage.getItem('userData'));

	document.getElementById("armorSlot").innerHTML = vals.armor.tag;
	document.getElementById("weaponSlot").innerHTML = vals.weapon.tag;

	if (document.getElementById("armorSlot").innerHTML == "empty")
		document.getElementById("unequipButton1").disabled = true;
	else
		document.getElementById("unequipButton1").disabled = false;

	if (document.getElementById("weaponSlot").innerHTML == "empty")
		document.getElementById("unequipButton2").disabled = true;
	else
		document.getElementById("unequipButton2").disabled = false;


	for (i = 1; i <= vals.inventory.length; i++){
		document.getElementById(slotName + i.toString()).innerHTML = vals.inventory[i - 1].tag;
		document.getElementById("button" + i.toString()).disabled = false;
	}

	for (i; i <= 10; i++){
		document.getElementById("button" + i.toString()).disabled = true;
	}


}

function armorUnequip(){
	if (vals.inventory.length == 10){
		alert("Inventory full!");
		return;
	}
	else{
		vals.inventory.push(vals.armor);
		vals.armor = emptyArmor;
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";

}

function weaponUnequip(){
	if (vals.inventory.length == 10){
		alert("Inventory full!");
		return;
	}
	else{
		vals.inventory.push(vals.weapon);
		vals.weapon = emptyWeapon;
	}
	
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot1Equip(){
	var temp;
	if (vals.inventory[0].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[0];
		vals.inventory.splice(0, 1);
		//alert("This is left in inventory: " + vals.inventory[0].tag);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[0];
		vals.inventory.splice(0, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";


}

function slot2Equip(){
	var temp;
	if (vals.inventory[1].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[1];
		vals.inventory.splice(1, 1);
		//alert("This is left in inventory: " + vals.inventory[1].tag);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[1];
		vals.inventory.splice(1, 1);
		//alert("This is left in inventory: " + vals.inventory[0].tag);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot3Equip(){
	var temp;
	if (vals.inventory[2].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[2];
		vals.inventory.splice(2, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[2];
		vals.inventory.splice(2, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot4Equip(){
	var temp;
	if (vals.inventory[3].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[3];
		vals.inventory.splice(3, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[3];
		vals.inventory.splice(3, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";

}

function slot5Equip(){
	var temp;
	if (vals.inventory[4].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[4];
		vals.inventory.splice(4, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[4];
		vals.inventory.splice(4, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot6Equip(){
	var temp;
	if (vals.inventory[5].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[5];
		vals.inventory.splice(5, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[5];
		vals.inventory.splice(5, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot7Equip(){
	var temp;
	if (vals.inventory[6].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[6];
		vals.inventory.splice(6, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[6];
		vals.inventory.splice(6, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot8Equip(){
	var temp;
	if (vals.inventory[7].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[7];
		vals.inventory.splice(7, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[7];
		vals.inventory.splice(7, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot9Equip(){
	var temp;
	if (vals.inventory[8].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[8];
		vals.inventory.splice(8, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[8];
		vals.inventory.splice(8, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function slot10Equip(){
	var temp;
	if (vals.inventory[9].myType == "armor"){
		temp = vals.armor;
		vals.armor = vals.inventory[9];
		vals.inventory.splice(9, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}

	}
	else {
		temp = vals.weapon;
		vals.weapon = vals.inventory[9];
		vals.inventory.splice(9, 1);
		if (temp.tag != "empty"){
			vals.inventory.push(temp);
		}
	}

	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/inventory.html";
}

function back(){
	window.location.href = "/main.html";
}