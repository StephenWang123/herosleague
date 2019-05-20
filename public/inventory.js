var vals = JSON.parse(localStorage.getItem('userData'));

function loadInventory(){
	var slotName = "slotName";
	for (i = 1; i <= vals.inventory.length; i++){
		document.getElementById(slotName + i.toString()).innerHTML = vals.inventory[i - 1];
	}
}

function slot1Equip(){

}

function slot2Equip(){
	
}

function slot3Equip(){
	
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