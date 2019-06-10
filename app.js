// Requires
var myStatic = require('node-static');
var sqlite3 = require('sqlite3').verbose();
var file = new myStatic.Server('./public');
var http = require('http');
var fs = require('fs');  // file access module
var ip = require('ip');

// Globals
var dbFileName = "users.db"; 
var db = new sqlite3.Database(dbFileName); 

function callback(user, pass){

}

/*
 *  This is our server's function handler. The request obj
 *  comes from the browser to the server, and the response
 *  obj gets sent to the browser from the server.
 *
 */
function handler(request, response) {
    request.addListener('end', function () {

    	var url = request.url;
    	url = url.replace("/","");
    	console.log(url);

    	if (url.substring(0, 6) == "login=") { // User login code

    		console.log("someone is logging in");

			response.writeHead(200, {"Content-Type": "text/html"});
			url = url.substring(6, url.length);
			usrAndPass = url.split("%20");
			usr = usrAndPass[0];
			pass = usrAndPass[1];
			console.log("USER: " + usr);
			console.log("PASS: " + pass);
			
			db.get("SELECT * FROM userPass WHERE username = '" + usr + "' AND password = '" + pass + "'", function (err, row) {

				if (row == undefined) { // Username/password combination doesn't exist in database
					response.write("Invalid username/password combination");
					response.end();
				}
				else {
					console.log("Login info correct:");
					response.write(row.stats);
					response.end();
				}

			});
		
		}

		else if (url.substring(0, 9) == "register=") { // User register code

			console.log("someone is registering");

			response.writeHead(200, {"Content-Type": "text/html"});
			url = url.substring(9, url.length);

			arr = url.split('%20'),
    		usrAndPass = arr.slice(0, 2);

			usrAndPass.push(arr.slice(2).join(' '));

			usr = usrAndPass[0];
			pass = usrAndPass[1];
			stats = usrAndPass[2];
			console.log("USER: " + usr);
			console.log("PASS: " + pass);
			console.log("BASESTATS: " + stats);
			cmd = "INSERT INTO userPass (username, password, stats) VALUES ('" + usr + "','" + pass + "','" + stats +"')";
			db.get("SELECT 1 FROM userPass WHERE username = '" + usr + "'", function (err, row) {

				if (row != undefined) { // Username already exists in database
					response.write("The username '" + usr + "' is already taken!");
					response.end();
				}
				else {
					db.run(cmd, errorCallback);
					response.write("Registration successful.");
					response.end();
				}

			});
			
			
		}

		else if (url.substring(0, 5) == "save=") { // save progress
			console.log("saving progress");
			response.writeHead(200, {"Content-Type": "text/html"});

			url = url.substring(5, url.length);

			arr = url.split('%20'),
    		usrAndVals = arr.slice(0, 1);

			usrAndVals.push(arr.slice(1).join(' '));
			console.log("USER: " + usrAndVals[0]);
			console.log("CURRENT STATS: " + usrAndVals[1]);
			cmd = "UPDATE userPass SET stats = '" + usrAndVals[1] + "' WHERE username = '" + usrAndVals[0] + "'";

			db.run(cmd, errorCallback);
			response.write("Saved progress.");
			response.end();

		}

		else if (url.substring(0, 7) == "getNum=") { // get number of users
			response.writeHead(200, {"Content-Type": "text/html"});

			//cmd = "SELECT COUNT(*) FROM userPass";
			cmd = "SELECT * FROM userPass";

			db.all(cmd, function(err, rows){
				response.write(rows.length.toString());
				response.end();
			});
			

		}

		else {

			
	            file.serve(request, response, function (e, res) {
	            if (e && (e.status === 404)) { // If the file wasn't found
	                file.serveFile('/login.html', 404, {}, request, response); // Serve default page
	            }
            	});
        }	
	

    }).resume();

}

function errorCallback(err) {
    if (err) { console.log(err); }
}

var server = http.createServer(handler);
server.listen(process.env.PORT || 3000);
console.log(ip.address());

