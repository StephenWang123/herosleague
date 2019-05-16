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

			response.writeHead(200, {"Content-Type": "text/html"});
			url = url.substring(6, url.length);
			srcAndTag = url.split("%20");
			src = srcAndTag[0];
			tag = srcAndTag[1];
			console.log("SRC: " + src);
			console.log("TAG: " + tag);
			cmd = "UPDATE photoTags SET Tags = '";
			db.get("SELECT tags FROM photoTags WHERE fileName = '" + src + "'", function (err, rowData) {
	        	if (err) { console.log("thiserror: ",err); }
	        	else {
				var tags = rowData.tags;
				console.log("OLD TAGS: " + tags);
				tags = tags.replace(tag + ",", '');
				tags = tags.replace("," + tag, '');
				cmd = cmd.concat(tags + "' WHERE fileName = '" + src + "'");
				db.run(cmd, errorCallback);
			}
		
        	
			});
		
		}

		else if (url.substring(0, 9) == "register=") { // User register code

			console.log("someone is registering");

			response.writeHead(200, {"Content-Type": "text/html"});
			url = url.substring(9, url.length);
			usrAndPass = url.split("%20");
			usr = usrAndPass[0];
			pass = usrAndPass[1];
			console.log("USER: " + usr);
			console.log("PASS: " + pass);
			cmd = "INSERT INTO userPass (username, password) VALUES ('" + usr + "','" + pass + "')";
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
			



			
			/*
			db.get("SELECT tags FROM photoTags WHERE fileName = '" + src + "'", function (err, rowData) {
	        	if (err) { console.log("thiserror: ",err); }
	        	else {
				var tags = rowData.tags;
				console.log("OLD TAGS: " + tags);
				tags = tags.replace(tag + ",", '');
				tags = tags.replace("," + tag, '');
				cmd = cmd.concat(tags + "' WHERE fileName = '" + src + "'");
				db.run(cmd, errorCallback);
			}
			
        	
			});
			*/
		}

		else {

			file.serve(request, response, function (e, res) {
	        if (e && (e.status === 404)) { // If the file wasn't found
	            file.serveFile('/error.html', 404, {}, request, response); // Page not found!
	        }
	        });

		}	
	

    }).resume();

}

function errorCallback(err) {
    if (err) { console.log(err); }
}

var server = http.createServer(handler);
server.listen('3000', '0.0.0.0');
console.log(ip.address());

