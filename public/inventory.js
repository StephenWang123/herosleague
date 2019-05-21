var vals = JSON.parse(localStorage.getItem('userData'));
var emptyArmor = {"tag":"empty","myType":"armor"};
var emptyWeapon = {"tag":"empty","myType":"weapon"};


function loadInventory(){
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
		alert("This is left in inventory: " + vals.inventory[2].tag);
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
	
}

function slot5Equip(){
	
}

function slot6Equip(){
	
}

function slot7Equip(){
	
}

function slot8Equip(){
	
}

function slot9Equip(){
	
}

function slot10Equip(){
	
}