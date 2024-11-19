console.log("Hello World")
const name1="Ram"
console.log("hello",name1)
setTimeout(()=>{
    console.log("Timer Stopped")
}, 2000)
console.log("timer Started")
/*const fs=require('fs')
fs.stat("U4_P1.js",(err,stats)=>{
    
    if(err) throw err
    console.log("stats of the file",JSON.stringify(stats))
})*/
/*const fs=require('fs')
fs.rename("U4_P1.js","New_U4_P1.js",(err)=>{
    console.log("Rename Sucessful")
    fs.stat("New_U4_P1.js",(err,stats)=>{
        if(err) throw err
        console.log("stats of the file",JSON.stringify(stats))
    })
})*/
/*const fs=require('fs')
fs.readFile("U4_P1.js","UTF-8", (err,data)=>{
    if(err) throw err
    console.log("Contents of file are",data)
})
   console.log("Reading the contents of the file")
 */
  /* const fs=require('fs')
    fs.readFile("U4_P1.js", (err,data)=>{
        if(err) throw err
        var text=data.toString()
        console.log("Contents of file are",text)
    })
        console.log("Reading the contents of the file") 
*/
/*const fs=require('fs')
const data=fs.readFileSync("U4_P1.js", "UTF-8")
console.log("Contents of the file are", data)
console.log("Reading the contents of the file")
console.log("File data ends here") */
console.log("\n\n");
var fs=require('fs')
fs.readFile("lib.js", function(err,data){
    if(err)
    {
        console.log(err)
    }
    setTimeout(()=>{
        console.log("PES University Display after 1 second")
    }, 1000)
    })
    console.log("Starts here")

    fs = require("fs")

    /*const fs = require("fs")
    fs.stat("timer.js",(err,stats)=>{
        if(err) throw err
        console.log("Statistics:",JSON.stringify(stats))
            
    })
    
    //synchronous readfile/Blocking i/O
    const data = fs.readFileSync("fileops.js","utf-8")
    console.log("Contents :",data)
    
    //Asynchronous read Non-BlockingI/O
    fs.readFile("fileops.js","utf-8",(err,data)=>{
        if(err)throw err
        console.log("Contents :",data)
    })
    
    //Append a file 
    fs.appendFile("hello.js","file operations using fs module",(err)=>{
        if(err)throw err
        console.log("Appended successfully")
    }) 
    
    //Open file 
    fs.open("hello1.js","w",(err,file)=>{
        if(err)throw err
        console.log("Opened Successfully")
    })
    
    //write file
    fs.writeFile("hello.js","This is a write function",(err)=>{
        if(err)throw err
        console.log("Written succesfully")
    })
    
    //rename a file 
    fs.rename("hello.js","sample.js",(err)=>{
        if(err)throw err
        console.log("Renamed succesfully")
    })
    
    //delete file 
    fs.unlink("hello1.js",(err)=>{
        if(err)throw err
        console.log("Deleted succesfully")
    })*/
    
    //truncate a file 
    /*fs.open("sample.js","r+",(err,fd)=>{
        if(err)throw err
        var buffer = Buffer.alloc(100)
        console.log("Going to truncate the file ")
        fs.ftruncate(fd,3,(err)=>{
            if(err)throw err
            console.log("Truncated successfully")
            //read from the truncated file from the buffer
        fs.read(fd,buffer,0,buffer.length,0,(err,bytes)=>{
            if(err)throw err
                if(bytes>0){
                    console.log(buffer.slice(0,bytes).toString())
                }
            fs.close(fd,(err)=>{if(err)throw err})
        })	
            
        })
    })*/
    
console.log(3+4);
console.log(x=10);
console.log(y=10.0);
console.log(x==y);
console.log(x===y);
add=x+y;
console.log("type of x is %s and y is %s",typeof(x),typeof(y));
console.log('result is '+x+y);
console.log('result is '+add);

const chalk = require('chalk');  //needed chalk b4 v5 so npm install chalk@4
console.log(chalk.blue('Hello world!'));

console.log(chalk.red("Hello chalk world ...."))

console.log(chalk.blue.bgRed.bold("Hello chalk world ...."))

console.log(chalk.red("I am red line" + chalk.blue.underline.bold("with blue substring") 
					+ "that becomes red again"))


//validation
const validator=require('validator')
//import val from 'validator';
//console.log(val.isEmail(email))

var email = 'xyz@pes.edu';
console.log(validator.isEmail(email)); 
email = 'xyz@.edu';
console.log(validator.isEmail(email)); 
var name = 'john';
console.log(validator.isLowercase(name));
name = 'JOHN';
console.log(validator.isLowercase(name)); 
var nameEmpty = '';
console.log(validator.isEmpty(nameEmpty)); 
name = 'Smith';
console.log(validator.isEmpty(name)); 


/*

LIB.JS

//module.exports= "Hello, this is a custom module"
//define an object
module.exports.message = "welcome again to custom mod" 

//define a function
module.exports.myadd = function add(a,b){return a+b}

module.exports.mydiff = function sub(a,b){return a-b}

module.exports.myDate = function (){return Date()}

//export a class
module.exports.Student = function(fname,lname){
	this.fname = fname
	this.lname = lname
	this.fullname = 
		function(){return this.fname+" "+this.lname}
}
*/


//core modules http fs assert path process os querystring url

console.log("\n\n");
var msg = require("./lib.js")
console.log(msg)
console.log(msg.message)
console.log("Sum of 40 & 30 is :",msg.myadd(40,30))
console.log("Difference of 40 & 30 is :",msg.mydiff(40,30))
console.log("Todays date is ",msg.myDate())

console.log("\n\n");
var student = new msg.Student("James","Bond")
console.log(student.fullname())
var student1 = new msg.Student("Shashank","Naik")
console.log(student1.fullname())

console.log("\n\n");
var http=require('http');  //opening localhost/8080 will show hello world when this file is running
var url = require("url");
var fs = require("fs");
var qs=require('querystring');

http.createServer(function(req,res){

    //1.
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.end("hello world");
    //res.end(text)

    //2.
    //res.writeHead(200,{'Content-Type':'text/html'});
    //var q = url.parse(req.url,true).query  //type http://localhost:8080/?year=2024&month=November
	//var text = q.year+ " " +q.month  //prints 2024 november
	//res.end(text)

    //3.
    //use curl -X POST -d "Hello from curl!" http://localhost:8080/sample.txt to test
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
			//res.end("Message saved in sample.txt") shouldn't be outside fd.appendfile callback is giving cannot send headers after send ig.
		})
	}
    //curl "http://localhost:8080/3_4_data.json?srn=12345"
    //File Not Found{curl "http://localhost:8080/nonexistent.json?srn=12345"}: Should return: <h2>File not found</h2>
    //Query Mismatch{curl "http://localhost:8080/3_4_data.json?srn=99999"}: Should return: (Empty or no output since the srn does not match).
    //Correct Match{curl "http://localhost:8080/3_4_data.json?srn=12345"}: Should return: John Doe.
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

console.log("\n\n");
const buf1=Buffer.alloc(10,'Hi welcome')
const buf2=Buffer.alloc(17,' to pes university');
console.log("Buffer1",buf1.toString());
console.log("Buffer2",buf2.toString());
const totallength=buf1.length+buf2.length;
console.log(totallength);
const buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
console.log(buf3.length);

const buf11=Buffer.alloc(10,'Hi welcome');
const buf21=Buffer.alloc(10,'hi welcome');
var result=buf11.compare(buf21);
if(result<0)
{
    console.log(buf11+ " comes before "+ buf21);
}
else if(result===0)
{
    console.log(buf11+ " is same as "+buf21);
}
else
{
    console.log(buf11+" comes after "+buf2);
}
var buf31=Buffer.alloc(25);
buf21.copy(buf31);
console.log("Buffer2 content is copied to Buffer 3 "+buf31.toString());
console.log(buf31.toString());
var buf1a = Buffer.alloc(50)
console.log(buf1a)
var buf2a = Buffer.from([10,20,30,40,50])
console.log(buf2a)
var buf3a = Buffer.from(buf2a)
console.log(buf3a)
//create a buffer string 
var buf4a =Buffer.alloc(50)
buf4a = Buffer.from("Good afternoon","utf-8")
console.log(buf4a.toString())

//write to abuffer
var buf4a =Buffer.alloc(50)
var len = buf4a.write("Happy Pooja holidays","utf-8")
console.log(len)

//read from a buffer
console.log(buf4a.toString("utf-8",0,20))

//copy from one buffer to another
var buf5a = Buffer.from("tothe")
var buf6a = Buffer.from("WelcomeatPESUniversity")
buf5a.copy(buf6a,7,2)
console.log(buf6a.toString())

//compare 2 buffers
var buf7a = Buffer.from("Goodmorning")
var buf8a = Buffer.from("Badmorning")
var op = Buffer.compare(buf7a,buf8a)
console.log(op)


var fs=require('fs')
var data='';
var rs=fs.createReadStream('3_4_2.txt');  //demonstrates using readtsream which allows reading large files in smaller chunks
rs.setEncoding('UTF-8');
rs.on('data',function(chunk){
    data+=chunk;    
});
rs.on('end',function(chunk){
    console.log("\n");
    console.log(data);
})
rs.on('err',(chunk)=>{
    console.log("\n");
    console.log(err.stack);
})

setTimeout(()=>{
    var fs=require('fs')
    var data=" You are learning Buffers and Streams"
    var ws=fs.createWriteStream('3_4_3.txt');
    ws.write(data,'UTF-8');
    ws.end();
    ws.on('finish',function(){
        console.log('Write Completed');
    })
    ws.on('error',function(err){
        console.log("\n");
        console.log(error.stack);
    })
    console.log("\n");
    console.log('program ended')
}, 2000)

setTimeout(()=>{
    console.log("\n");
    var fs = require('fs');
    var zlib = require('zlib');

    //compress the file data.txt to gz format
    var compressStream = fs.createReadStream('3_4_2.txt')
    .pipe(zlib.createGzip())  //pipe method - A convenient way to connect readable streams to writable streams.
    //Data from the read stream (3_4_4.txt) is passed through zlib.createGzip() & compressed output is written to 3_4_4.txt.gz.
    .pipe(fs.createWriteStream('3_4_4.txt.gz'));
    console.log('File compressed');

    //Decompress the file for reading
    compressStream.on('finish', () => {
        fs.createReadStream('3_4_4.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('3_4_4.txt'));
        console.log('File Decompressed');
    });
}, 3000)

/*localhost:8080/sample1.txt?srn=18. Server code now handles GET requests and attempts to read data from an HTML file, parsing it as JSON to return a user's name based on the student registration number (SRN) provided in the query string.*/
/*sample1.txt file contains multiple rows, this program handles multiple lines */

var url= require('url');
var http=require('http');
var fs=require('fs');
var qs=require('querystring')
http.createServer( function(request, response){
    if(request.method=='GET'){
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
        if(pathname=='/'){
            pathname="/index.html"
        }
   // response.write('Welcome to my domain!!!');
   //http://localhost:8080/sample1.txt?srn=1234
        fs.readFile(pathname.substring(1), 'utf-8',function(err,data){
            if(err){
                response.writeHead(404,{'Content-type':'text/html'});
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                response.writeHead(200,{'Content-type':'text/html'});
                var lines=data.split(/\r?\n/);
                    
                var query=myurl.query; //?srn=1234&& dept=cse
                var qobj= qs.parse(query) //{"srn":"1234"}
                for(var i in lines){
                    var obj=JSON.parse(lines[i]);
            // response.write(data);
                    if(obj.srn==qobj.srn)
                    response.write("<h1>"+obj.name+"</h1>");
                }
                response.end();
                }
        })
    }
    
}).listen(8088);

//piping methods 
//var  readstream = fs.createReadStream("file1.txt")
//var writestream = fs.createWriteStream("file2.txt")
//read from file1 and write to file2
//readstream.pipe(writestream)


console.log("Server is running");