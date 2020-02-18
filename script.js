(function () {

    /*We will set the width to the value defined here, but the height will be calculated based on the ratio of the input stream*/

    var width = 300; //photo width of the polaroid container
    var height = 0; //computed based on input stream


    var streaming = false;

    /*need to control the html elements with a startup()
 function*/
    var video =null;
    var canvas = null;
    var photo = null;
    var camerabutton = null;

    function startup() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        camerabutton = document.getElementById('camerabutton');

        navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function(stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });
    
        video.addEventListener('canplay', function(ev){
          if (!streaming) {
            height = 350;
          
            if (isNaN(height)) {
              height = width / (4/3);
            }
          
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
          }
        }, false);
        
        camerabutton.addEventListener('click', function(ev){
            takepicture();
            ev.preventDefault();
        }, false);

        clearphoto();
    }

    //Fill the photo with an indication 

    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0,0, canvas.width, canvas.height)

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    /* Capturing a photo by fetching the current video and drawing it into a canvas then converting that to a PNG. Size has the ability to change because it is drawn on a offscreen canvas */

    function takepicture() {
        var context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
          
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
          } else {
            clearphoto();
          }
        }
      
        //Set up event listener to run the startup
        window.addEventListener('load', startup, false);
      })();