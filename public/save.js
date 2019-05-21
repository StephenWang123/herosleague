function saveResponse(){
	alert(this.responseText);
}

function save(){
	var vals = JSON.parse(localStorage.getItem('userData'));
	var url = "save=" + vals.player + " " + JSON.stringify(vals);

	var oReq = new XMLHttpRequest();

    oReq.open("GET", url);

    // setup callback
    oReq.addEventListener("load", saveResponse);

    // load event occurs when response comes back
    oReq.send();

}