var baseStats = ";4;100;1;1;1;1;None;None;None;LeatherArmor;WoodenDagger";
var loadedStats = "";
// Level;Gold;Melee;Ranged;Magic;Defense;Class;EquipArmor;EquipWeapon;Inventory;

function goToRegister(){
	window.location.href = "/register.html";
}

function hidePass(){
	document.getElementById
}

function registerResponse () {
	alert(this.responseText);
	if (this.responseText == "Registration successful."){
		window.location.href = "/login.html";
	}
} 

function loginResponse () {
	alert(this.responseText);
	loadedStats = this.responseText;
	if (this.responseText != "Invalid username/password combination"){
		localStorage.setItem('userData', this.responseText);
		window.location.href = "/main.html";
	}
} 

function loadStats(){
	//alert(localStorage.getItem('userData'));
	var vals = localStorage.getItem('userData').split(";");
	document.getElementById("userVal").innerHTML = vals[0];
	document.getElementById("levelVal").innerHTML = vals[1];
	document.getElementById("goldVal").innerHTML = vals[2];

	document.getElementById("meleeVal").innerHTML = vals[3];
	document.getElementById("rangedVal").innerHTML = vals[4];
	document.getElementById("magicVal").innerHTML = vals[5];
	document.getElementById("defenseVal").innerHTML = vals[6];

	document.getElementById("classVal").innerHTML = vals[7];
	document.getElementById("armorVal").innerHTML = vals[8];
	document.getElementById("weaponVal").innerHTML = vals[9];

}

// Called when the user clicks login
function login() {

	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	
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

	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

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

	baseStats = user + baseStats;

    var url = "register=" + user + " " + pass + " " + baseStats;

    var oReq = new XMLHttpRequest();

    oReq.open("GET", url);

    // setup callback
    oReq.addEventListener("load", registerResponse);

    oReq.send();


}

