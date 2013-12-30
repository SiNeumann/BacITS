/**
 * 
 */
//http://www.youtube.com/watch?v=PgWuIAP7olU

var actPage;
var Maxcount;



function removeElements(elem)
{

	while(elem.firstChild)
		{
		   elem.removeChild(elem.firstChild);
		}
}




function replaceCdata( text)
{
	text  = text.replace("<![CDATA[", "").replace("]]>", "");
	return text;
}

function ImageExist(url) 
{
	//inspired http://stackoverflow.com/questions/3646914/how-do-i-check-if-file-exists-in-jquery-or-javascript
   var img = new Image();
   img.src = url;
  
   img.onerror = function () {
     
     this.src ='images/default.jpg'; // place your error.png image instead
   };
   return img;

}

function scanCode(){
	try{
var scanner = cordova.require("cordova/plugin/BarcodeScanner");

scanner.scan(
   function (result) {
       alert("We got a barcode\n" +
             "Result: " + result.text + "\n" +
             "Format: " + result.format + "\n" +
             "Cancelled: " + result.cancelled);
   }, 
   function (error) {
       alert("Scanning failed: " + error);
   }
);
	}
	catch(ex)
	{
		alert("qr geht nicht");
		alert(ex);
	}
}

function testswipe(txt)
{
	//alert("worked");
	 var ifno=document.getElementsByClassName("showcontent").item(0);
	 var newText=ifno.id;
	// $.mobile.changePage("#p1", {transition: "slide",allowSamePageTransition :"true"});


	 if(txt=="left")
	 {
		var split=actPage.split(" ");
		var count=split[1];
		count=parseInt(count)+1;
		var id=split[0];
		$.mobile.changePage("#showpage2", {allowSamePageTransition :"true"});
		if(count>0)
		{
			 
			 displayRealContent(id+" "+count);
		}
	}
	 if(txt=="right")
		 {
		 var split=actPage.split(" ");
			var count=split[1];
			count=parseInt(count)-1;
			var id=split[0];
			if(count<=Maxcount)
			{
				
				displayRealContent(id+" "+count);
			}
		 }
	// $.mobile.changePage("#showpage2", {transition: "slide",allowSamePageTransition :"true"});
	
}


function GetElement(tag,container)
{
	try{
	var message=container.getElementsByTagName(tag);
	
	if(message.item(0).firstChild.data!=null)
		{
		 var rtext=message.item(0).firstChild.data;
		 rtext=replaceCdata( rtext);
		 var textnode=document.createTextNode(rtext);
		 var retDiv=document.createElement("div");
		 retDiv.innerHTML=rtext;
		 return retDiv;
		}
	else
	{
		emptyDiv=document.createElement("div");
		return emptyDiv;
	}
	}
	catch(ex)
	{
		emptyDiv=document.createElement("div");
		return emptyDiv;

	}
}

function displayRealContent(txt)
{

	/*if((frame!="showIt1")&&(frame!="showIt3"))
		{
			frame="showIt2";
		}*/
	var split=txt.split(" ");
	var count=split[1];
	var id=split[0];
	var xName="xmlfiles/"+id+".xml";
	
	//var xDoc=loadXMLDoc("xmlfiles/"+id+".xml");
	var xDoc = getLocalContent('News');
	
	if(xDoc == null){
		xDoc = downloadContent();
	}
	/*Andi Ende*/
	
	//Message ist eine Einheit im XML mit Text und Headline
	var messages=xDoc.getElementsByTagName("Entry");
	
	var message=messages.item(count-1);
	var bodyText=GetElement("body",message);
	var headLine=GetElement("title",message);
	var shortText=GetElement("shorttext",message);
	
	var image=message.getElementsByTagName("image");
	var div=document.createElement("div");//Erzeuge ein div anschließen Klasse auf infoUnit setzen
	div.setAttribute("class","showcontent");
	div.setAttribute("id",txt);
	actPage=txt;
	var elem=document.getElementById("showIt2");
	removeElements(elem);
	
	

	if(image.item(0)!=null){
	var zImage=image.item(0).firstChild.data;
	}

	var imag=document.createElement("img");

	var source=ImageExist('http://its.fh-salzburg.ac.at/uploads/pics/'+zImage); 
		
		//"http://its.fh-salzburg.ac.at/uploads/pics/"+zImage;
	//...und anschließend in neue erzeugte Elemente gesetzt
	//die Elemente brauchen dringend eine besseres CSS als aktuell die infoUnit
	imag.setAttribute("src", source);
	imag.setAttribute("class","sc_img")

	headLine.setAttribute("id","Headline");
	div.appendChild(headLine);
	div.appendChild(imag);
	div.appendChild(shortText);
	div.appendChild(bodyText);
	elem.appendChild(div);
	
	
	
}

function loadXMLDoc(XMLname)
{
	
	//hier wird das XML geladen, gefunden auf Stackoverflow
	//Als Request vorgesehen damit XML online geladen werden können
	//http://stackoverflow.com/questions/12566809/parsing-xml-file-with-javascript
    var xmlDoc;
    if (window.XMLHttpRequest)
    {
        xmlDoc=new window.XMLHttpRequest();
        //var uri='http//:its.fh-salzburg.ac.at/mobileAppInterface/Controller.class.php?Section=';
        xmlDoc.overrideMimeType('text/xml');
        xmlDoc.open("GET",XMLname,false);
        xmlDoc.send("");
        var x=xmlDoc.responseXML;
        return xmlDoc.responseXML;
    }
    // IE 5 and IE 6
    else if (ActiveXObject("Microsoft.XMLDOM"))
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async=false;
        xmlDoc.load(XMLname);
        return xmlDoc;
    }
    alert("Error loading document!");
    return null;
}

function loadXMLString(txt)
{
	//http://www.w3schools.com/dom/dom_loadxmldoc.asp
	//wird ersetzt durch loadXMLDoc
if (window.DOMParser)
  {
  parser=new DOMParser();
  xmlDoc=parser.parseFromString(txt,"text/xml");
  }
else // Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.loadXML(txt);
  }
return xmlDoc;
}
function AddContent(id)
{
	//nimmt ID eines Elements 
	elem=document.getElementById(id);
	//Rücksetzen des Inhalts soll anschließend geladen werden
	elem.innerHTML="";
	//Hoffentlich ist das XMLFile vorhanden, sonst ist die Seite leer
	var xName="xmlfiles/"+id+".xml";
	
		
	//var xDoc=loadXMLDoc("xmlfiles/"+id+".xml");
	var xDoc = getLocalContent('News');
	
	if(xDoc == null){
		xDoc = downloadContent();
	}
	/*Andi Ende*/
	
	//Message ist eine Einheit im XML mit Text und Headline
	var messages=xDoc.getElementsByTagName("Entry");
	//var image=message.getElementsByTagName("image");
	Maxcount=messages.length-1;
	//Schleife anpassen nach länge von Messages
	for(var i=1;i<Maxcount;i++)
		{
			//get latest Entries
			var message=messages.item(i-1);
			var header=message.getElementsByTagName("title");
			var image=message.getElementsByTagName("image");
			var zImage=image.item(0).firstChild.data;
			var div=document.createElement("a");//Erzeuge ein div anschließen Klasse auf infoUnit setzen
			div.setAttribute("class","infoUnit");
			div.setAttribute("href","#showpage2");
			
			//XML Element werden hier ausgelesen...
			var text=message.getElementsByTagName("shorttext");
			var myH1 = document.createElement("h1");
			
			var testTex= text.item(0).firstChild.data;
			var headLine=header.item(0).firstChild.data;
			var myText = document.createTextNode(headLine);
			var imag=document.createElement("img");
			imag=ImageExist('http://its.fh-salzburg.ac.at/uploads/pics/'+zImage); 
			//...und anschließend in neue erzeugte Elemente gesetzt
			//die Elemente brauchen dringend eine besseres CSS als aktuell die infoUnit
			imag.setAttribute("src", source);
			div.setAttribute("onclick", "displayRealContent('"+id+" "+i+"')");            
			imag.setAttribute("id","clickPic");
			myH1.setAttribute("id","Headline");
			
			myH1.appendChild(myText);
			div.appendChild(myH1);
			div.appendChild(imag);
			elem.appendChild(div);
		
		}
	var Endnode = document.createElement("h1");
	Endnode.setAttribute("class","endnode");
	//var somet=document.createTextNode("ssss");
	Endnode.appendChild(somet);
	elem.appendChild(Endnode);
}
