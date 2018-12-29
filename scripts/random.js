var request = new XMLHttpRequest();
var url = 'http://www.ifmate.com/myf/visit.php';
request.open("GET",url,true);
		
request.send();
		
// window.onload = function(){
// 	var color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
// 	  document.body.style.backgroundColor=color;
// 	  }
		
setInterval(test, 1000);
 function test(){
	// var color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
	//  document.body.style.backgroundColor=color;
	var Num1="";
	for(var i=0;i<9;i++)
		{
		Num1+=Math.floor(Math.random()*10);
		}
	document.getElementById("NumBe").innerHTML=Num1;
	}