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