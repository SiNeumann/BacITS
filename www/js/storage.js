/*mögliche types:
	
	News
	Studiengang
	Projekte
	Termine
	Jobs

*/

 var identifier = new Array("News"); //,"Studiengang","Projekte","Termine","Jobs");



function getStorage(type){
	var x = localStorage.getItem(type);
	return x;
}

function writeStorage(type, value){
	localStorage.setItem(type, value);
	
}

function textToXML ( text ) {
      try {
        var xml = null;

        if ( window.DOMParser ) {

          var parser = new DOMParser();
          xml = parser.parseFromString( text, "text/xml" );

          var found = xml.getElementsByTagName( "parsererror" );

          if ( !found || !found.length || !found[ 0 ].childNodes.length ) {
		  //alert("xml was created");
            return xml;
          }

          return null;
        } 
		else {

          xml = new ActiveXObject( "Microsoft.XMLDOM" );

          xml.async = false;
          xml.loadXML( text );
		  //alert("xml was created IE");
          return xml;
        }
      } catch ( e ) {
        // suppress
      }
    }

	/**
	Wandelt ein XML zu einem String (zum Speichern)
	*/
	function XMLtoText(xml){
	
		var x = (new XMLSerializer()).serializeToString(xml);
		return x;
	}



function downloadContent(type){
	
	
	$.ajax({
      type: "GET",
      url: "http://its.fh-salzburg.ac.at/mobileAppInterface/Controller.class.php?Section=" + type,
      dataType: "xml",
      success: function (xml) {

      var sXML = XMLtoText(xml);
      writeStorage(type, sXML);
		return xml;
      }, //success

      error: function(xhr, ajaxOptions, thrownError){
      		//alert(thrownError);
      		//alert(xhr.status);
		return getLocalContent(type);
      }//Error
      });
}

function getLocalContent(type){
 if( typeof( window.localStorage) !== "undefined" ){
	//Wenn der localStorage schon exisitert, werden die Daten vorerst hier entnommen:
      //var xml2s = getStorage("news");
	  var xml2s = getStorage(type);
	  var xml = textToXML(xml2s);
	  return xml;
    }
	 //Heißt, dass noch nichts im localStorage liegt, also laden...
    else{
	  //downloadContent();
    }
}
