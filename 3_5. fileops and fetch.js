var fetch = require("node-fetch");
var http=require('http');  //opening localhost/8080 will show hello world when this file is running
var url = require("url");
var fs = require("fs");
var qs=require('querystring');
http.createServer(function(req,res){
    if(req.method =="POST"){  //other methods ignored
		var q = url.parse(req.url)  //parses incoming url into structured object
		var filename = q.pathname //will hold "/sample.txt"
		var body=[]
		req.on("data",(chunk)=>{ //searches for data in req triggered when chunk received
			body.push(chunk)
			console.log(chunk.toString())
		})
		.on("end",()=>{
			body= Buffer.concat(body).toString()  //combine all chunks into single buffer
			console.log(body);
			fs.appendFile(filename.substr(1),body,(err) => {  //removes leading "/"
                if (err) {
                    res.writeHead(500, { "Content-type": "text/plain" });
                    res.end("Error writing to file");
                } else {
                    res.writeHead(200, { "Content-type": "text/plain" });
                    res.end("Message saved in " + filename.substr(1));
                }
			})
			})
	}
    if(req.method == "GET"){
        var myurl = url.parse(req.url)
        var filename = myurl.pathname
        fs.readFile(filename.substr(1),"utf-8",function(err,data){
            if(err){
                res.writeHead(404,{"Content-type":"text/html"})
                res.write("<h2>File not found</h2>")
                return res.end()
            }
            else{
                res.writeHead(200,{"Content-type":"text/html"})
                //res.write(data)
                var obj = JSON.parse(data)
                var q = myurl.query
                var qobj = qs.parse(q)
                if(obj.srn==qobj.srn)
                    res.write(obj.name)
                return res.end()
            }
        })
    }
}).listen(8080);

//new entry only otherwise json become {...}{...}
async function newfunc(){
var res1=await fetch("http://localhost:8080/3_4_1_data.json",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({"name":"Vinay","srn":"102"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))


/*fetch("https://www.google.com")  //gives full script of google page
.then(res => res.text()) 
.then(text => console.log(text))*/

//output is like
//<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en-IN"><head><meta charset="UTF-8">
//<meta content="origin" name="referrer"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image">
//<title>Google</title><script nonce="KPFwn2odIQghh8N7PVMkDQ">window._hst=Date.now();
//performance&&performance.mark&&performance.mark("SearchHeadStart");</script><script 


let todo = {
    userId: 123,
    title: "welcome to post method ",
    completed: false
};

var res3 = await fetch("https://jsonplaceholder.typicode.com/users")  
.then(res => res.json()) 
.then(json => { console.log("First user in the array:");
console.log(json[0]); 
console.log("Name of the first user in the array:"); 
console.log(json[0].username); })

//post method 
var res4 = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: { "Content-Type": "application/json" }
}).then(res => res.json())
    .then(json => console.log(json));
/*
The jsonplaceholder.typicode.com API is a mock API intended for testing purposes. It does not persist data, meaning that any POST requests 
you make will not actually add data to the server or modify the existing data. Instead, it simulates the request and returns a response as 
if the data was successfully added.
For example, if you post a new todo, you’ll get a response like:
{
    "userId": 123,
    "title": "welcome to post method",
    "completed": false,
    "id": 201
}


*/
}
/*
async function fileops(){
    try {
        // Opening a File
        console.log("Going to open file");
        await fs.open('3_4_2.txt', 'r+', function(err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("data"+data);
            console.log("file Opened Successfully");
        });

        // Reading from the file (Async approach)
        console.log("Reading the contents of the file");
        await fs.readFile('3_4_2.txt', function(err, data) {
            if (err) throw err;
            console.log("asyn read "+data.toString());
        });

        // Synchronous read from file
        console.log("Reading the contents of the file (Sync)");
        var data = await fs.readFileSync('3_4_2.txt', 'utf8');
        console.log("sync read"+data);

        // Writing to a file
        console.log("Going to write into existing file");
        await fs.writeFile('3_4_3.txt', 'PES University', function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Data written successfully");
            console.log("Let's read newly written data");
            fs.readFile('3_4_3.txt', function(err, data) {
                if (err) throw err;
                console.log(data.toString());
                console.log("Asynchronous Read " +data.toString());
            });
        });
        // Opening file to truncate it
        console.log("Going to open file");
        await fs.open('3_4_4.txt', 'r+', function(err, fd) {
            if (err) {
                return console.error(err);
            }
            var buf = new Buffer(1024);
            console.log("file Opened Successfully");
            console.log("Going to truncate file after 3 bytes");

            // Truncate the opened file
            fs.ftruncate(fd, 3, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("File truncated successfully");
                console.log("Going to read the same file");

                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                    if (err) throw err;
                    if (bytes > 0) {
                        console.log(buf.slice(0, bytes).toString());
                    }
                    fs.close(fd, function(err) {
                        if (err) throw err;
                    });
                });
            });
        });

        // Deleting a file
        fs.unlink('3_4_xx.txt', function() {
            console.log("Write operation complete");
        });

    } catch (err) {
        console.error("An error occurred:", err);
    }
}
*/

const readline = require('readline');


// Promisified version of fs functions
function appendFileAsync(path, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
function openFileAsync(path, flags) {
    return new Promise((resolve, reject) => {
        fs.open(path, flags, (err, fd) => {
            if (err) reject(err);
            else resolve(fd);
        });
    });
}

function writeFileAsync(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
function readFileSyncAsync(path, encoding) {
    return new Promise((resolve, reject) => {
        try {
            const data = fs.readFileSync(path, encoding);
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}
function openFile(path, flags) {
    return new Promise((resolve, reject) => {
        fs.open(path, flags, (err, fd) => {
            if (err) reject(err);
            else resolve(fd);
        });
    });
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function writeFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function ftruncate(fd, length) {
    return new Promise((resolve, reject) => {
        fs.ftruncate(fd, length, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function unlinkFile(path) {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

async function fileops() {
    try {
        // Opening a File
        console.log("\n");
        console.log("Going to open file");
        let fd = await openFile('3_4_2.txt', 'r+');
        console.log("File Opened Successfully");

        // Reading from the file (Async approach)
        console.log("\n");
        console.log("Reading the contents of the file");
        let data = await readFile('3_4_2.txt');
        console.log("Async read: " + data.toString());

        // Synchronous read from file
        console.log("\n");
        console.log("Reading the contents of the file (Sync)");
        let syncData = fs.readFileSync('3_4_2.txt', 'utf8');
        console.log("Sync read: " + syncData);

        // Writing to a file
        console.log("\n");
        console.log("Going to write into existing file");
        await writeFile('3_4_3.txt', 'PES University');
        console.log("Data written successfully");

        // Reading the newly written data
        console.log("\n");
        let newData = await readFile('3_4_3.txt');
        console.log("New file data: " + newData.toString());

        // Opening file to truncate it
        console.log("\n");  
        console.log("Going to open file for truncation");
        fd = await openFile('3_4_4.txt', 'r+');
        console.log("File Opened Successfully");

        console.log("Going to truncate file after 3 bytes");
        await ftruncate(fd, 3);                                 //3_4_4 became "hel" only
        console.log("File truncated successfully");

        // Read the truncated file
        let buf = new Buffer(1024);
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if (err) throw err;
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
            fs.close(fd, (err) => {
                if (err) throw err;
            });
        });

        // Append to a file
        console.log("\nAppending to the file...");
        await appendFileAsync("3_5.txt", "\nContent to be Written is this again and again!!!");
        console.log("Append Successful!!!");

        // Open the file and write to it
        console.log("\nOpening file for writing...");
        let fd1 = await openFileAsync("3_5.txt", "w");
        fs.write(fd1, "Contents for writing this", function (err) {
            if (err) throw err;
            console.log("Saved!!");
        });

        // Reading the file synchronously
        console.log("\nReading contents from file (sync)");
        let data1 = fs.readFileSync("3_4_2.txt", 'utf-8');
        let lines = data1.split(/\r?\n/);
        lines.forEach((line) => {
            let words = line.split(',');
            console.log(words[1]);
        });

        // Reading line by line from file using readline
        console.log("\nReading contents from file line by line (async)");
        const r1 = readline.createInterface({
            input: fs.createReadStream("3_5.txt"),
            output: process.stdout,
            terminal: false
        });

        r1.on('line', function (line) {
            let words = line.split(',');
            console.log(words[1]);
        });

        // Reading from stdin using readline (interactive)
        console.log("\nReading from stdin...");
        const r2 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        r2.on('line', function (line) {
            let words = line.split(',');
            console.log(words[1]);
        });

        // Deleting a file
        await unlinkFile('3_4_xx.txt');
        console.log("File deletion complete");

    } catch (err) {
        console.error("An error occurred:", err);
    }
}

//fs.writeFile

/*fs.appendFile("test1.txt", 
    "\nContent to be Written is this again and again!!!",
    function (err){
        if(err) console.log(err)
        console.log("Write Sucessful!!!")
    }) 
    fs.open("test1.txt", "w", function(err,file){
        if(err) throw err;
        fs.write(file,"Contents for writing this", function(err){
            if(err) throw err;
            console.log("Saved!!")
        })
    })
    var data=fs.readFileSync("test.txt", 'utf-8')
    var lines=data.split(/\r?\n/)
    lines.forEach((line)=>{
        var words=line.split(',');
        console.log(words[1]);
    })
    readline=require('readline');
    r1=readline.createInterface({
        input:fs.createReadStream("test.txt"),
        output:process.stdout,
        terminal:false
    })
    r1.on('line',function(line){
        var words=line.split(',');
        console.log(words[1]);
    })
    readline=require('readline');
    r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout,
        terminal:false
    })
    r1.on('line',function(line){
        var words=line.split(',');
        console.log(words[1]);
    })

*/
async function main() {
    console.log("\n");
    console.log("Starting fetch operations...");
    await newfunc();
    console.log("\n");
    console.log("\nStarting file operations...");
    await fileops();
    console.log("\n");
    console.log("\nAll operations completed.");
}

// Call the main function
main();

