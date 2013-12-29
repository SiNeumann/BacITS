function takePic(){
      navigator.camera.getPicture( function( imageURI ) {
        alert( imageURI );
      },
      function( message ) {
        alert( message );
      },
      {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      });
    }