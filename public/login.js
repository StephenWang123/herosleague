var baseStats = "1;"

function registerResponse () {
	alert(this.responseText);
} 

function loginResponse () {
	photos = JSON.parse(this.responseText);
	reactContainer = document.getElementById("react");
	ReactDOM.render(React.createElement(App),reactContainer);

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


    var url = "register=" + user + " " + pass;

    var oReq = new XMLHttpRequest();

    oReq.open("GET", url);

    // setup callback
    oReq.addEventListener("load", registerResponse);

    oReq.send();


}

