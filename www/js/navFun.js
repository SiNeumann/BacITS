/**
 * 
 */


function displayMenu(txt)
{
	alert(txt);
	xmlDoc=loadXMLString(txt);
	var news= xmlDoc.getElementsByName('News');
	for(var i=0;i<news.length;i++)
		{
			element=document.getElementsById('newssite');
			element.InnerXml="Test";
		}
	 
	
}

function displayRealContent(txt)
{
	alert(txt);
}

function loadXMLDoc(XMLname)
{
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
	elem=document.getElementById(id);
	elem.innerHTML="";
	var xName="xmlfiles/"+id+".xml";
	var xDoc=loadXMLDoc("xmlfiles/"+id+".xml");
	var messages=xDoc.getElementsByTagName("Message");
	
	
	for(var i=1;i<7;i++)
		{
			//get latest Entries
			var message=messages.item(i-1);
			var header=message.getElementsByTagName("Headline");
			var div=document.createElement("div");
			div.setAttribute("class","infoUnit");
			var text=message.getElementsByTagName("Text");
			var myH1 = document.createElement("h1");
			var testTex= text.item(0).firstChild.data;
			var headLine=header.item(0).firstChild.data;
			var myText = document.createTextNode(headLine);
			var imag=document.createElement("img");
			var source='images/'+ id + i+'.jpg';
			imag.setAttribute("src", source);
			imag.setAttribute("onclick", "displayRealContent('"+source+"')");               
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