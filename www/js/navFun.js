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
	for(var i=0;i<6;i++)
		{
			//get latest Entries
			
			var myH1 = document.createElement("h1");
			var myText = document.createTextNode("Das neuste vom neuen");
			var imag=document.createElement("img");
			var source='images/news'+i+'.jpg';
			imag.setAttribute("src", source);
			imag.setAttribute("id","clickPic");
			myH1.setAttribute("id","Headline");
			myH1.appendChild(myText);
			elem.appendChild(myH1);
			elem.appendChild(imag);
		
		}
}