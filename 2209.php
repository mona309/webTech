<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>


    <script>		
		function init(){
		 v1=document.querySelector("#v1");
		 v1.play();
		 setInterval(fun,5000);
         c1=document.querySelector("#c1");
		 ctx=c1.getContext("2d");
		 ctx.fillStyle="#FF0000";
		 ctx.arc(100,100,80,0, 2*Math.PI,1);
		 ctx.fill();
		 ctx.font = "30px Arial";
         ctx.fillText("Hello World",200,50);
		 ctx.moveTo(200, 0);
		 ctx.lineTo(300, 100);
		 ctx.stroke();
		 ctx.rect(300, 100, 50, 50);
		 ctx.stroke();
		 }
		function fun() {
		tmp=Math.floor(Math.random()*(v1.duration-5));
		console.log(tmp);
		v1.currentTime=tmp;
		
		}
		function init1(){
			
		p1=document.querySelector("#p");
		p1.value+=20;
		if(p1.value!=100)
		setInterval(init1,1000);
		}
		
		
	</script>
    <script type="text/javascript">
		function getpos(){
			navigator.geolocation.watchPosition(show,error);
			}
		function show(position){
			ps=position;
            c1=document.querySelector("#c2");
			c1.innerHTML="Current Position:"+position.coords.latitude+ " "+position.coords.longitude;
			}
		function error(error) {
			e=error;
						}
		
		</script>
	<script>
        $(document).ready(function(){
         $("p#c3").click(function(){
          $(this).hide();
          });
        });
        $(document).ready(function(){
        $("button#b1").click(function(){
          $("p#c3").hide();
          });
          });
          $(document).ready(function(){
        $("button#b2").click(function(){
          $("p#c3").show();
          });
          });
    </script>
    <script>

		$(document).ready(handle);
		function handle(){
			$("li.b1").click(function(){
			$(this).hide();
			});
		}
		$(document).ready(function(){
			$("li.b1:even").css("color","blue");
            var g13p=$("li#3").html()
			console.log(g13p);
			$("li#3").html(g13p+"->AFLL");
			$("p#1").text("Hello World");
			newli=document.createElement("li");
            newli.className="b1";
			$(newli).html("5. Math");
			newli1=document.createElement("li");
			$(newli1).html("6. Math1");
			$("li.b1:last").after(newli);
			$("li.b1:last").before(newli);
			$("li#3").after(newli);
			$("ul#2").append(newli,newli1);
			$("li.b1:first").appendTo("ul#2");
			
		});
	    $(document).ready(function(){
		 $("#hide").click(function(){
			$("li").hide(5000);
		 });
		 $("#show").click(function(){
			$("li").show("slow");
		 });
		});
        $(document).ready(function(){
		 $("#hide1").click(function(){
			$("li.b1").hide(5000);
		 });
		 $("#show1").click(function(){
			$("li.b1").show("slow");
		 });
		});
		
		
		</script>
    <script>


		$(document).ready(function(){
		$("p.b2").click (function(){
		$(this).css("color","blue").html("I was Clicked");
					
		})
		});		
		$(document).ready(function(){
		$("p.b2h").on("click mouseover", function(){
		$(this).css("color","red").html("I was Hovered");
		})
		});


		$(document).ready(function(){
		$("p.b22").on("click", function(event){
		$(event.target).css("color","blue").html("I was Clicked");
		})
		$("p.b22h").mouseover (function(){
			$("ul.b2").slideToggle("slow");
			$("button.b2").toggle().html("hidden");
		})
		});
        
        
		$(document).ready(function(){
		$("p.b222").on("click", function(event){
		$(event.target).css("color","blue").html("I was Clicked");
		});
		$("p.b222h").mouseover (function(){
			$("ul.b2").slideToggle("slow");
			if($("button.b2").attr("visible"))
			  $("button.b2").hide().html("Hidden");
			else
				$("button.b2").show().html("Show");
		})
		$("li.g2").click(function(){
			if($(this).css("opacity")==1)
				$(this).animate({
					left:"100px",
					opacity:0.4,
					fontSize:"3em"
				 }, 1000);
			else
				$(this).animate({
					left:"0px",
					opacity:1,
					fontSize:"3em"
				 }, 1000);
						
		});
		$("li.g22").click(function(){
			$(this).fadeOut(1000,function(){
				$(this).fadeIn(1000);
			})
		})
		$("li.g222").click(function(){
			$(this).fadeOut(1000,function(){
				$(this).fadeIn(2000, function(){
				$(this).click();
			});
			})
		})
		});
		</script>
    <script>
		var date=new Promise(
			function(resolve,reject){
				setTimeout( function(){
				weather=true;  //api call based on date and area
				if(weather){
					const dateDetails={
						name:'Cubana Restaurent',
						location:'55th street',
						table:5
					}
						resolve(dateDetails)
				}
				else
			
					reject( new Error('Bad weather'))
				}, 10000);
			}
			)
			date
				.then (function(details){
					console.log(details);
					console.log("Yay! Going on a date");
				})
							
				.catch (function(error){
					console.log(error.message)
				
				})
		
		
	   </script>
    <script>
        function loaddata(){
            let xhr=new XMLHttpRequest();
            xhr.open("get","sample.txt",true);
            xhr.onreadystatechange=showdata;
            xhr.responseType="text";
            xhr.send();
        }
        function showdata(){
            console.log("In Showdata");
            if(this.readyState==4&&this.status==200){
                console.log("Inside if");
                document.querySelector("#container").innerHTML=this.responseText
            }
        }
    </script>
    <script>
		function loaddata1(){
		xhr1=new XMLHttpRequest();
		xhr1.open("get","sample.json",true);
		xhr1.onreadystatechange=showdata1;
		xhr1.responseType="json";
		xhr1.send();
		}
		function showdata1(){
			console.log("In showdata");
			if(this.readyState==4 && this.status==200){
				console.log("inside if");
                console.log(this.response);
				//this.response or responseText or responseXML
			/*document.querySelector("#container1").innerHTML=
			this.response.getElementsByTagName("srn")[1].firstChild.nodeValue;*/
			//this.response=JSON.parse(this.responseText);
			document.querySelector("#container1").innerHTML=this.response['srn'];
			}
		}
		
		
	   </script>
    <script>
		function senddata(){
		xhr2=new XMLHttpRequest();
		xhr2.open("post","dummy.php",true);
		xhr2.onreadystatechange=showdata2;
		xhr2.responseType="json";
		xhr2.setRequestHeader("Content-type",
		"application/x-form-url-encoded");
		//str=myform.children[i].value
		let fd=new FormData();
		fd.append("name","Sujay");
		fd.append("srn","PES2UG20CS247");
		//xhr2.send("name=Sujay&srn=PES2UG20CS247");
		xhr2.send(fd);
		}
		function showdata2(){
			console.log("In showdata");
			if(this.readyState==4 && this.status==200){
                console.log(xhr2);
				console.log("inside if");
				//this.response or responseText or responseXML
			/*document.querySelector("#container2").innerHTML=
			this.response.getElementsByTagName("srn")[1].firstChild.nodeValue;*/
			//this.response=JSON.parse(this.responseText);
			document.querySelector("#container2").innerHTML=this.response['srn'];
			}
            else{console.error(xhr2);
    }
            }
		
		
		
	   </script>
    <script>
		function getvideo(){
		xhr=new XMLHttpRequest();
		xhr.open("get","Avengers.mp4?p=" + (new Date).getTime(),true);
		xhr.onreadystatechange=showdata3;
		xhr.responseType="blob";
		xhr.setRequestHeader("Content-type",
		"application/x-form-url-encoded");
		
		
		xhr.send();
		}
		function showdata3(){
			console.log("In showdata");
            
			if(this.readyState==4 && this.status==200){
				console.log("inside if");
				//this.response or responseText or responseXML
			/*	document.querySelector("#container").innerHTML=
			this.response.getElementsByTagName("srn")[1].firstChild.nodeValue;*/
			//this.response=JSON.parse(this.responseText);
			/*document.querySelector("#container").innerHTML=this.response['srn'];*/
			let v1= document.createElement("video");

v1.setAttribute('width', '10%');
v1.setAttribute('height', '10%');
			v1.src=URL.createObjectURL(this.response);
			v1.controls=true;
			document.querySelector("#container3").appendChild(v1);
		
        }else{console.log(xhr);}
		}
		
		
	   </script>
       <script>
        function loaddata4(){
            let xhr=new XMLHttpRequest();
            xhr.open("get","sample.xml",true);
            xhr.onreadystatechange=showdata4;
            xhr.responseType="document";
            xhr.send();
        }
        function showdata4(){
            console.log("In Showdata");
            if(this.readyState==4&&this.status==200){
                console.log("Inside if");
                document.querySelector("#container4").innerHTML=this.response.getElementsByTagName("srn")[0].firstChild.nodeValue;

            }
        }
    </script>
    <script>
        function fetchdata(){
            mydiv=document.querySelector("#containerz");
            fetch('sample.json')
            .then(function(response){
                return response.json();
            })
            .then(function(obj){
                mydiv.innerHTML=JSON.stringify(obj);
            })
            .catch(function(error){
                console.log(error.message);
            })
        }
            
    
   </script>
   <script>
    function fetchdata1(){
        mydiv=document.querySelector("#containerz1");
        fetch('Avengers.mp4')
        .then(function(response){
            return response.blob();
        })
        .then(function(data){
            vid=document.createElement("video");
            vid.setAttribute('width', '10%');
            vid.setAttribute('height', '10%');   
            vid.controls=true;
            vid.src=URL.createObjectURL(data);
            mydiv.appendChild(vid);
        })
        .catch(function(error){
            console.log(error.message);
        })
    }
        

</script>
<script>
    function fetchdata2(){
        mydiv=document.querySelector("#containerz2");
        fetch('sample.txt')
        .then(function(response){
            return response.text();
        })
        .then(function(text){
            mydiv.innerHTML=text;
        })
        .catch(function(error){
            console.log(error.message);
        })
    }
        

</script>
<script>
    function getdata(){
    /*	$.ajax({
            url:'files/sample.txt',
            method:'get',
            success: function (result){
                $("#container").html(result);
            }
        })
        $.ajax('submit.php',{
            method:'post',
            data:{mydata:'this is my data',srn:'123'},
            success:function(result,status,xhr){
                $("#container").html(result+" "+status);
            },
            error:function(xhr,textstatus, errMsg){
                console.log("Error:"+errMsg);
            }
        })	
        $.getJSON('files/sample.json',
            {name:'sujay', srn:'1'},
            function (result,status,xhr){
                $("#container").html(result.name+" "+status);
            }
        );*/
        $("#containerz3").load('sample.txt',
        
            function(result,status,xhr){
                console.log("status:"+status)
            }
        );
    }
        

</script>
</head>
<body onload="init()">
	<video id="v1"  autoplay muted controls="c1" height="200px" width="400px">
	<source src="Avengers.mp4" type="video/mp4"/>
	</video><br/>
    <audio preload id="a1"  controls="c2" >
	<source src="Jai Ho.mp3" type="audio/mp3"/>
	</audio><br/>		
	<label for="p1"> Progress done on activity</label>
	<progress id="p" value="30" max="100">
	</progress><br/>
    <canvas id="c1" width="400px" height="200px" 
		style="border:1px solid #000000;">
		
		</canvas>
		<svg width="400px"  height="200px" 
		style="border:1px solid #000000";>
		<!--<circle cx="100" cy="80" r="80" stroke="green"
			stroke-width="4" fill="red">-->
	<text x="15" y="15" fill="red" transform="rotate(30 20,40)">
	I love SVG </text>

		</circle>
		</svg><br/>
        <button onclick="getpos()"> Get Current Position</button>
        <p id="c2"></p>
        <p id="c3"> Click me, I will disappear</p>
        <p id="c3"> Click me Away</p>
        <p id="c3"> Click me too</p>
        <br/>
        <button id="b1"> Click me to hide all Paragragh</button><br/>
        <button id="b2"> Click me to unhide all Paragragh</button>
        <div>
            <p>original:    </p>
            <p> Subjects</p>
		<ul>
			<li> Data Structures</li>
			<li id="g1">Web Technologies </li>
			<li> Data Science</li>
			<li> DDCO</li>
		</ul>
		<button id="hide"> Click button to hide all list elements</button>
		<button id="show"> Click button to show all list elements</button>
        </div>
        <p id="1"> Subjects</p>
		<ul id="2">
			<li class="b1"> 1. Data Structures</li>
			<li class="b1" id="3">2. Web Technologies </li>
			<li class="b1"> 3. Data Science</li>
			<li class="b1"> 4. DDCO</li>
		</ul>
		<button id="hide1"> Click button to hide all list elements</button>
		<button id="show1"> Click button to show all list elements</button>
    
        <div class="b2"></div>
		<p class="b2"> Subjects</p>

		<p class="b22"> Subjects</p>

		<p class="b222"> Subjects</p>
        <p class="b2h"> hover Subjects</p>

		<p class="b22h"> hover Subjects</p>

		<p class="b222h"> hover Subjects</p>
		<ul class="b2">
				<li class="g2"> Data Structures </li>
				<li class="g22"> Web Technologies</li>
				<li class="g222"> Data Science</li>
				<li class="b2"> AFLL </li>
		</ul>
		<button class="b2">Click</button>
		</div>
<pre>











</pre>
<button onclick="loaddata()">Load Data</button>
<div id="container"></div>
<button onclick="loaddata1()">Load Data</button>
<div id="container1"></div>
<button onclick="senddata()">Send Data</button>
<div id="container2"></div>
<button onclick="getvideo()">Get Video</button>
	<div id="container3"></div>
    <button onclick="loaddata4()">Load Data</button>
<div id="container4"></div>
<pre>


    JSON AND XML PARSER


</pre>
    <p id="demo1"></p>
    <p id="demo2"></p>
    
<script>
  var str= '{"name": "Thor: Ragnarok", "cast": "Chris Hemsworth, Tom Hiddleston"}';
  
  var obj=JSON.parse(str);
  
  document.getElementById("demo1").innerHTML=obj.name;
  
  obj.year="2021"
  obj.rating="7.5"
  str=JSON.stringify(obj);
  
  document.getElementById("demo2").innerHTML=str;
      
</script>  
<p id="demo11"></p>
		<p id="demo21"></p>
		
	<script>
	    
	  text = 
			"<bookstore>"+
				"<book>" +
					"<title>Everyday Italian</title>" +
					"<author>Giada De Laurentiis</author>" +
					"<year>2005</year>" +
				"</book>"+
			"</bookstore>";
			
	 	var parser=new DOMParser();
		xmlDOM=parser.parseFromString(text,"text/xml");
		
		title=xmlDOM.getElementsByTagName("title")[0];
		title.childNodes[0].nodeValue += "-Modified";
		
		document.getElementById("demo11").innerText=title.childNodes[0].nodeValue;
        console.log(text);
		title1=xmlDOM.getElementsByTagName("author")[0];
		title1.childNodes[0].nodeValue += "-Modified";
		
		document.getElementById("demo21").innerText=title1.childNodes[0].nodeValue;
		var oSerializer = new XMLSerializer();
		var sXML = oSerializer.serializeToString(xmlDOM);
		console.log(sXML);
		
	</script>  
    <pre>


        JSON AND XML JQ
    
    
    </pre>
<button onclick="fetchdata()">Fetch Data</button>
<div id="containerz"></div>
<button onclick="fetchdata1()">Fetch Data</button>
<div id="containerz1"></div>
<button onclick="fetchdata2()">Fetch Data</button>
<div id="containerz2"></div>
<button onclick="getdata()">Fetch Data</button>
<div id="containerz3"></div>
</body>
</html>