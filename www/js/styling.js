/*
* Javascript-Funktionen zur Unterst�tzung der CSS-Formatierungen
*/

/* Beim Laden des Fensters soll die H�he ermittelt werden.
*  Danach wird die H�he des Headers berechnet.
*/
jQuery(window).load(function setElementsLoad(){
	
	//Aktuelle H�he des Fensters/Bildschirmes
	$currentHeight = null;
	$currentHeight = $(window).height();	
	
	$HeightListElements = null;
	$HeightListElements = $(".ui-listview").height();
		
	//H�he des Headers in der Startseite
	$headerHeightMain = null;
	//H�he des Headers in den Unterseiten
	$headerHeightSub = null;
	
	
	/*
	* Berechnungen der H�he
	*/
	//Header in der Hauptseite soll 10% des Bildschirmes einnehmen
	$headerHeightMain = $currentHeight/10;
	//Header in den Unterseitten soll 5% des Bildschirmes einnehmen
	$headerHeightSub = $currentHeight/20;
	
	
	//ist der Header in der Hauptseite kleiner als 50 soll er auf 50px gesetzt werden
	if($headerHeightMain<55){
		$headerHeightMain = 55;
	}
	else if($headerHeightMain>100) {
		$headerHeightMain = 100;
	}

	//ist der Header in den Unterseiten kleiner als 45 soll er auf 45px gesetzt werden
	if($headerHeightSub<55){
		$headerHeightSub = 55;
	}
	else if($headerHeightSub>100) {
		$headerHeightSub = 100;
	}
	
	/*
	* Setzten der H�hen in der CSS-Anweisung
	*/
	$( "#appheader" ).css("height", $headerHeightMain+"px");
	$( ".header" ).css("height", $headerHeightSub+"px");

	
	$positionListElements = null;
	$positionListElements = ($currentHeight/2)-($HeightListElements/2.5);
	
	if($positionListElements<100){
		$positionListElements=100;
	}
	
	$( "#ListElement" ).css("padding-top", $positionListElements+"px");
	
});

/* Beim �ndern der Gr��e des Fensters (von hoch auf quer und 
*  umgekehrt) soll die H�he ermittelt werden.
*  Danach wird die H�he des Headers berechnet.
*/
jQuery(window).resize(function setHeaderHightResize(){
	
	//H�he des Headers in der Startseite
	$headerHeightMain = null;
	//H�he des Headers in den Unterseiten
	$headerHeightSub = null;
	
	//Aktuelle H�he des Fensters/Bildschirmes
	$currentHeight = null;
	$currentHeight = $(window).height();
	
	/*
	* Berechnungen der H�he
	*/
	//Header in der Hauptseite soll 10% des Bildschirmes einnehmen
	$headerHeightMain = $currentHeight/10;
	//Header in den Unterseitten soll 5% des Bildschirmes einnehmen
	$headerHeightSub = $currentHeight/20;
	
	//ist der Header in der Hauptseite kleiner als 50 soll er auf 50px gesetzt werden
	if($headerHeightMain<55){
		$headerHeightMain = 55;
	}
	else if($headerHeightMain>100) {
		$headerHeightMain = 100;
	}

	//ist der Header in den Unterseiten kleiner als 45 soll er auf 45px gesetzt werden
	if($headerHeightSub<55){
		$headerHeightSub = 55;
	}
	else if($headerHeightSub>100) {
		$headerHeightSub = 100;
	}
	
	/*
	* Setzten der H�hen in der CSS-Anweisung
	*/
	$( "#appheader" ).css("height", $headerHeightMain+"px");
	$( ".header" ).css("height", $headerHeightSub+"px");
		
	$HeightListElements = null;
	$HeightListElements = $(".ui-listview").height();
	
	$positionListElements = null;
	$positionListElements = ($currentHeight/2)-($HeightListElements/2.5);
		
	if($positionListElements<100){
		$positionListElements=100;
	}
	
	$( "#ListElement" ).css("padding-top", $positionListElements+"px");
	
});

jQuery(window).load(function setClickPicLoad(){

	$currentWidth = null;
	$currentWidth = $(window).width();
	
	//alert("current width: "+$currentWidth);
	
	$position = null;
	$position = $currentWidth/2;
	
	//alert("margin: "+$position);
	
	$( "#clickPic" ).css( "width", $currentWidth+"px");
	
	$( "#clickPic" ).css( "margin-left", "-"+$position+"px");

});


/*

	Setzt die Breite der Listenelemente gleich der Breite des Fensters

*/
jQuery(window).load(function setWidthNavBar(){

	$currentWindowWidth = null;
	$currentWindowWidth = $(window).width();
	$currentWidth = null;
	$currentWidth = $("#ListElement").width();
	
	//alert("current window width: "+$currentWindowWidth);
	//alert("current width: "+$currentWidth);
	
	$( "#ListElement" ).css( "width", $currentWindowWidth+"px");

});

/*

	Setzt die Breite der Listenelemente gleich der Breite des Fensters
	beim erneuten Laden der Seite/Schwenken des Ger�tes

*/
jQuery(window).resize(function setWidthNavBarResize(){

	$currentWindowWidth = null;
	$currentWindowWidth = $(window).width();
	$currentWidth = null;
	$currentWidth = $("#ListElement").width();
	
	//alert("current window width: "+$currentWindowWidth);
	//alert("current width: "+$currentWidth);
	
	$( "#ListElement" ).css( "width", $currentWindowWidth+"px");

});

jQuery(window).load(function setImagWidth() {

	$currentWindowWidth = null;
	$currentWindowWidth = $(window).width();
	$currentImagWidth = null;
	$currentImagWidth = $("#imag").width();
	$currentImagHeight = null;
	$currentImagHeight = $("#imag").height();
	$setWidth = null;
	$setHeight = null;
	
	// alert("Current: "+$currentImagWidth);
	
	if($currentImagWidth>$currentWindowWidth) {
		$setWidth = $currentWindowWidth - 10;
		
		if($currentImagWidth>$currentImagHeight) {
		
			$("#imag").css("width", $setWidth+"px");
			$ratio = width/height;
			$setHeight = setWidth/ratio;
			$("#imag").css("height", $setHeight+"px");
		
		}
		else{
		
			$("#imag").css("width", $setWidth+"px");
			$ratio = height/width;
			$setHeight = setWidth*ratio;
			$("#imag").css("height", $setHeight+"px");
		
		}
	}	
});

jQuery(window).load(function setHeaderStyle() {

	$fontSize = 24;
	$padd = 10;

	$("h1").css("font-size", $fontSize+"px");
	$("h1").css("padding", $padd+"px");
	
});

jQuery(window).ready(function setHeaderStyle() {

	$fontSize = 24;
	$padd = 10;

	$("h1").css("font-size", $fontSize+"px");
	$("h1").css("padding", $padd+"px");
	
});