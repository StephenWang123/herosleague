var baseStats = {"player":"stuff","level":4,"gold":100,"melee":1,"ranged":1,"magic":1,"defense":1,"classType":"None","armor":{"tag":"empty","myType":"armor", "meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":0},"weapon":{"tag":"empty","myType":"weapon", "meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":0},"inventory":[{"tag":"Leather Armor","myType":"armor", "meleeBonus":0,"rangedBonus":0,"magicBonus":0,"defenseBonus":2 },{"tag":"Wooden Dagger","myType":"weapon","meleeBonus":2,"rangedBonus":0,"magicBonus":0,"defenseBonus":0}]};


var loadedStats = "";
// Level;Gold;Melee;Ranged;Magic;Defense;Class;EquipArmor;EquipWeapon;Inventory;

function goToRegister(){
	window.location.href = "/register.html";
}


function registerResponse () {
	alert(this.responseText);
	if (this.responseText == "Registration successful."){
		window.location.href = "/login.html";
	}
} 

function loginResponse () {
	loadedStats = decodeURIComponent(this.responseText);
	alert(loadedStats);
	if (loadedStats != "Invalid username/password combination"){
		localStorage.setItem('userData', loadedStats);
		window.location.href = "/main.html";
	}
} 

function loadStats(){

	save();

	var vals = JSON.parse(localStorage.getItem('userData'));
	document.getElementById("userVal").innerHTML = vals.player;
	document.getElementById("levelVal").innerHTML = vals.level;
	document.getElementById("goldVal").innerHTML = vals.gold;

	document.getElementById("meleeVal").innerHTML = vals.melee + vals.armor.meleeBonus + vals.weapon.meleeBonus;
	document.getElementById("rangedVal").innerHTML = vals.ranged + vals.armor.rangedBonus + vals.weapon.rangedBonus;
	document.getElementById("magicVal").innerHTML = vals.magic + vals.armor.magicBonus + vals.weapon.magicBonus;
	document.getElementById("defenseVal").innerHTML = vals.defense + vals.armor.defenseBonus + vals.weapon.defenseBonus;

	document.getElementById("classVal").innerHTML = vals.classType;
	document.getElementById("armorVal").innerHTML = vals.armor.tag;
	document.getElementById("weaponVal").innerHTML = vals.weapon.tag;

}

// Called when the user clicks login
function login() {

	var user = document.getElementById("userBox").value;
	var pass = document.getElementById("passBox").value;

	
	var url = "login=" + user + " " + pass;

	var oReq = new XMLHttpRequest();

    oReq.open("GET", url);

    // setup callback
    oReq.addEventListener("load", loginResponse);

    // load event occurs when response comes back
    oReq.send();
		

}

// Called when the user clicks register
function register() {

	//alert("Registering");

	var user = document.getElementById("userBox").value;
	var pass = document.getElementById("passBox").value;
	var confirm = document.getElementById("confirmBox").value;

	// Registration security code

	if ((user.length == 0) || (pass.length == 0)){
		alert("Invalid username and/or password.");
		return;
	}

	if (user.includes(" ") || pass.includes(" ")){
		alert("Username or password cannot contain spaces.");
		return;
	}

	if (pass.length < 6){
		alert("Password must be at least 6 characters.");
		return;
	}

	if (pass != confirm){
		alert("Passwords don't match");
		return;
	}

	baseStats.player = user;


    var url = "register=" + user + " " + pass + " " + JSON.stringify(baseStats);

    var oReq = new XMLHttpRequest();

    oReq.open("GET", url);

    // setup callback
    oReq.addEventListener("load", registerResponse);

    oReq.send();


}

function back(){
	window.location.href = "/login.html";
}

