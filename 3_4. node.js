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
var fs=require('fs')
fs.readFile("U4_P1.js", function(err,data){
    if(err)
    {
        console.log(err)
    }
    setTimeout(()=>{
        console.log("PES University Display after 2 seconds")
    }, 2000)
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


var msg = require("./lib.js")
console.log(msg)
console.log(msg.message)
console.log("Sum of 40 & 30 is :",msg.myadd(40,30))
console.log("Difference of 40 & 30 is :",msg.mydiff(40,30))
console.log("Todays date is ",msg.myDate())

var student = new msg.Student("James","Bond")
console.log(student.fullname())
var student1 = new msg.Student("Shashank","Naik")
console.log(student1.fullname())

var http=require('http');  //opening localhost/8080 will show hello world when this file is running
var url = require("url")
var fs = require("fs")

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.end("hellow world");
    var q = url.parse(req.url,true).query  //type http://localhost:8080/?year=2024&month=November
	var text = q.year+ " " +q.month  //prints 2024 november
	res.end(text)
}).listen(8080);
console.log("Server is running");