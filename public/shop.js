var shopCount = 4;
var currentGold = 0;
var vals;

function inInventory(item, vals){

	var inventory = vals.inventory;

	for (j = 0; j < inventory.length; j++){
		//alert("Comparing: " + item + " with " + inventory[j].tag);
		if (item == inventory[j].tag)
			return true;
	}

	if ((item == vals.armor.tag) || (item == vals.weapon.tag))
		return true;


	return false;
}

function loadShop(){

	save();

	vals = JSON.parse(localStorage.getItem('userData'));

	var slotName = "slotName";
	currentGold = vals.gold;

	document.getElementById("goldTitle").innerHTML = "Gold: " + currentGold;

	// FOR INVENTORY

	for (i = 1; i <= vals.inventory.length; i++){
		document.getElementById(slotName + i.toString()).innerHTML = vals.inventory[i - 1].tag;
		document.getElementById("button" + i.toString()).disabled = false;
	}

	for (i; i <= 10; i++){
		document.getElementById("button" + i.toString()).disabled = true;
	}

	// FOR SHOP

	for (i = 1; i <= shopCount; i++){
		if (inInventory(document.getElementById("shopItem" + i.toString()).innerHTML, vals)){
			document.getElementById("buy" + i.toString()).disabled = true;
			document.getElementById("buy" + i.toString()).innerHTML = "Owned";
		}
	}

}

function buy1(){
	if (document.getElementById("shopItemVal1").innerHTML > currentGold){
		alert("Need " + document.getElementById("shopItemVal1").innerHTML + " gold to purchase " + document.getElementById("shopItem1").innerHTML);
		return;
	}
	else {
		vals.gold = currentGold - document.getElementById("shopItemVal1").innerHTML;
		vals.inventory.push({"tag":"Leather Armor","myType":"armor","meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":2});
		localStorage.setItem('userData', JSON.stringify(vals));
		window.location.href = "/shop.html";
		alert("Purchased Leather Armor");
	}
}

function buy2(){
	if (document.getElementById("shopItemVal2").innerHTML > currentGold){
		alert("Need " + document.getElementById("shopItemVal2").innerHTML + " gold to purchase " + document.getElementById("shopItem2").innerHTML);
		return;
	}
	else {
		vals.gold = currentGold - document.getElementById("shopItemVal2").innerHTML;
		vals.inventory.push({"tag":"Wooden Dagger","myType":"weapon","meleeBonus":2,"rangedBonus":0,"magicBonus":0,"defenseBonus":0});
		localStorage.setItem('userData', JSON.stringify(vals));
		window.location.href = "/shop.html";
		alert("Purchased Wooden Dagger");
	}

}

function buy3(){
	if (document.getElementById("shopItemVal3").innerHTML > currentGold){
		alert("Need " + document.getElementById("shopItemVal3").innerHTML + " gold to purchase " + document.getElementById("shopItem3").innerHTML + " You have: " + currentGold);
		return;
	}
	else {
		vals.gold = currentGold - document.getElementById("shopItemVal3").innerHTML;
		vals.inventory.push({"tag":"Knight Armor","myType":"armor", "meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":3});
		localStorage.setItem('userData', JSON.stringify(vals));
		window.location.href = "/shop.html";
		alert("Purchased Knight Armor");
	}
}

function buy4(){
	if (document.getElementById("shopItemVal4").innerHTML > currentGold){
		alert("Need " + document.getElementById("shopItemVal4").innerHTML + " gold to purchase " + document.getElementById("shopItem4").innerHTML);
		return;
	}
	else {
		vals.gold = currentGold - document.getElementById("shopItemVal4").innerHTML;
		vals.inventory.push({"tag":"Knight Sword","myType":"weapon", "meleeBonus":3,"rangedBonus":0,"magicBonus":0,"defenseBonus":0});
		localStorage.setItem('userData', JSON.stringify(vals));
		window.location.href = "/shop.html";
		alert("Purchased Knight Sword");
	}
}

function slotSell1(){
	var temp = vals.inventory[0];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(0, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell2(){
	var temp = vals.inventory[1];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(1, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell3(){
	var temp = vals.inventory[2];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(2, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell4(){
	var temp = vals.inventory[3];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(3, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell5(){
	var temp = vals.inventory[4];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(4, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell6(){
	var temp = vals.inventory[5];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(5, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell7(){
	var temp = vals.inventory[6];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(6, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell8(){
	var temp = vals.inventory[7];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(7, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell9(){
	var temp = vals.inventory[8];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(8, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function slotSell10(){
	var temp = vals.inventory[9];
	for (i = 1; i <= shopCount; i++){
		if (temp.tag == document.getElementById("shopItem" + i.toString()).innerHTML)
			vals.gold = vals.gold + parseInt(document.getElementById("shopItemVal" + i.toString()).innerHTML);
	}

	vals.inventory.splice(9, 1);
	localStorage.setItem('userData', JSON.stringify(vals));
	window.location.href = "/shop.html";

}

function back(){
	window.location.href = "/main.html";
}

