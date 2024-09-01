let simsubscreennum=0;
let temp=0;


	
function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();

	
	
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		blinkArrow(520,270,360,40);
		
	}
	
	
}
function message(){

	
		// Retrieve the values of the select tags
		var select1Value = document.getElementById("readable1");
		var select2Value = document.getElementById("signalStrength1");
		var select3Value = document.getElementById("tone1");
  
		// Create a paragraph element to display the values
		var resultParagraph = document.getElementById("RST");
		resultParagraph.innerHTML = + select1Value.options[select1Value.selectedIndex].text + " " + select2Value.options[select2Value.selectedIndex].text
		 + " " + select3Value.options[select3Value.selectedIndex].text;

       const RST={
		"R1":"Unreadable",
		"R2":"Barely readable,occasional words distinguishable",
		"R3":"Readable with pratically no difficulty",
		"R4":"Readable with practically no difficulty",
		"R5":"Perfectly readable",
		"S1":"Faint signals barely perceptible",
		"S2":"Very weak signals",
		"S3":"Weak signals",
		"S4":"Fair signals",
		"S5":"Fairly good signals",
		"S6":"Good signals",
		"S7":"Moderately good signals",
		"S8":"Strong signals",
		"S9":"Extremely strong signals",
		"T1":"Sixty-cycle ac or less, very rough and broad",
		"T2":"Very rough ac, vry harsh and broad",
		"T3":"Rough ac tone, rectified but not filtered",
		"T4":"Rough note,some trace of filtering",
		"T5":"Filtered rectified ac but strongly ripple-modulated",
		"T6":"Filtered tone,definite trace of ripple modulation",
		"T7":"Near puer tone,trace of ripple modulation",
		"T8":"Near perfect tone,slight trace of modulation",
		"T9":"Perfect tone, no trace of ripple or modulation of any ripple",

	   }

  //readablity
  var selectedOption=select1Value.value;
  let selectedR1=RST[selectedOption];
  console.log(selectedR1)
  

  document.getElementById("readR1").innerHTML=selectedR1;
//signal astrength
  var selectedOption=select2Value.value;
  let selectedS1=RST[selectedOption];
  console.log(selectedS1);

  document.getElementById("signalS1").innerHTML=selectedS1;

  //tone
  var selectedOption=select3Value.value;
  let selectedT1=RST[selectedOption];
  console.log(selectedT1);

  document.getElementById("toneT1").innerHTML=selectedT1;
	   if(select1Value.value === "r" || select2Value.value === "s" || select3Value.value === "t"){
		document.getElementById("error").innerHTML="Please select the appropriate values";
	   }
	   else{
		document.getElementById("subMit").addEventListener('click',function navNext() {

		
	 
	});
	navNext();
	  }
	}
 
 








function character(){
	console.log("submitbuttonclicked")

	var obj = document.getElementById("myselect");
	var warningMessage = document.getElementById("warningMessage");

	// Check if the selected value is an empty string
	if (obj.value === "selectchar") {
	  // Display a warning message in the <p> tag
	  warningMessage.innerHTML = "Please select an character.";
	} else {
	  // Clear the warning message
	//   warningMessage.innerHTML = "";
	  // Perform other actions based on the selection
	  // For example, you can process the selected value here
	  document.getElementById("submit").addEventListener('click',function navNext() {
		var obj = document.getElementById("myselect");
		document.getElementById("morse1").innerHTML = ("")+
		obj.options[obj.selectedIndex].text;

		var obj = document.getElementById("myselect");
		document.getElementById("dm1").innerHTML =
		obj.options[obj.selectedIndex].text;
		
		console.log(document.getElementById("myselect").value);

		});
         navNext();
	}
	
	   
}








	









	
	 
	
		

























