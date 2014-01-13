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
	if($headerHeightMain<50){
		$headerHeightMain = 50;
	}

	//ist der Header in den Unterseiten kleiner als 45 soll er auf 45px gesetzt werden
	if($headerHeightSub<45){
		$headerHeightSub = 45;
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
	if($headerHeightMain<50){
		$headerHeightMain = 50;
	}

	//ist der Header in den Unterseiten kleiner als 45 soll er auf 45px gesetzt werden
	if($headerHeightSub<45){
		$headerHeightSub = 45;
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
	$currentWidth = $(".ui-btn").width();
	
	//alert("current window width: "+$currentWindowWidth);
	//alert("current width: "+$currentWidth);
	
	$( ".ui-btn" ).css( "width", $currentWindowWidth+"px");
	

});