/**
 * 
 */


function displayMenu(txt)
{
	//hier hab ich ein bißchen gebastelt, kann weg
	alert(txt);
	xmlDoc=loadXMLString(txt);
	var news= xmlDoc.getElementsByName('News');
	for(var i=0;i<news.length;i++)
		{
			element=document.getElementsById('newssite');
			element.InnerXml="Test";
		}
	 
	
}


function testswipe()
{
	alert("worked");
}

function displayRealContent(txt)
{
	var split=txt.split(" ");
	var count=split[1];
	var id=split[0];
	var xName="xmlfiles/"+id+".xml";
	var xDoc=loadXMLDoc("xmlfiles/"+id+".xml");
	//Message ist eine Einheit im XML mit Text und Headline
	var messages=xDoc.getElementsByTagName("Message");
	var message=messages.item(id-1);
	var header=message.getElementsByTagName("Headline");
	var div=document.createElement("div");//Erzeuge ein div anschließen Klasse auf infoUnit setzen
	div.setAttribute("class","showcontent");
	var elem=document.getElementById("showIt");
	if(elem.childElementCount>0)
	{
			var max=childElementCount;
			for(var i=0;i<max;i++)
				{
					elem.removeChild(elem.childNodes[0]);
				}
	}

	//XML Element werden hier ausgelesen...
	var text=message.getElementsByTagName("Text");
	var myH1 = document.createElement("h1");
	var myInnerdiv=document.createElement("div");
	var testTex= text.item(0).firstChild.data;
	var headLine=header.item(0).firstChild.data;
	var myHeadline = document.createTextNode(headLine);
	var myText=document.createTextNode(testTex);
	var imag=document.createElement("img");
	var source='images/'+ id + count+'.jpg';
	//...und anschließend in neue erzeugte Elemente gesetzt
	//die Elemente brauchen dringend eine besseres CSS als aktuell die infoUnit
	imag.setAttribute("src", source);
	//imag.setAttribute("onclick", "displayRealContent('"+id+" "+i+"')");               
	//imag.setAttribute("id","clickPic");
	div.setAttribute("swipeleft","testswipe()");
	myH1.setAttribute("id","Headline");
	myInnerdiv.appendChild(myText);
	myH1.appendChild(myHeadline);
	div.appendChild(myH1);
	div.appendChild(imag);
	div.appendChild(myText);
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
	var xDoc=loadXMLDoc("xmlfiles/"+id+".xml");
	//Message ist eine Einheit im XML mit Text und Headline
	var messages=xDoc.getElementsByTagName("Message");
	
	//Schleife anpassen nach länge von Messages
	for(var i=1;i<7;i++)
		{
			//get latest Entries
			var message=messages.item(i-1);
			var header=message.getElementsByTagName("Headline");
			var div=document.createElement("a");//Erzeuge ein div anschließen Klasse auf infoUnit setzen
			div.setAttribute("class","infoUnit");
			div.setAttribute("href","#showpage");
			//XML Element werden hier ausgelesen...
			var text=message.getElementsByTagName("Text");
			var myH1 = document.createElement("h1");
			
			var testTex= text.item(0).firstChild.data;
			var headLine=header.item(0).firstChild.data;
			var myText = document.createTextNode(headLine);
			var imag=document.createElement("img");
			var source='images/'+ id + i+'.jpg';
			//...und anschließend in neue erzeugte Elemente gesetzt
			//die Elemente brauchen dringend eine besseres CSS als aktuell die infoUnit
			imag.setAttribute("src", source);
			imag.setAttribute("onclick", "displayRealContent('"+id+" "+i+"')");               
			imag.setAttribute("id","clickPic");
			myH1.setAttribute("id","Headline");
			
			myH1.appendChild(myText);
			div.appendChild(myH1);
			div.appendChild(imag);
			elem.appendChild(div);
		
		}
	var Endnode = document.createElement("h1");
	Endnode.setAttribute("class","endnode");
	var somet=document.createTextNode("ssss");
	Endnode.appendChild(somet);
	elem.appendChild(Endnode);
}
