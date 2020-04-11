# polaroid-generator

# Description 
This web app captures a photo by fetching the current video and drawing it into a canvas then converting it into a PNG. The app takes the photo and  manipulates it to look like a polaroid. Users can save the photo as well if they right click on the polaroid photo. 

# Instructions 
To take a photo all you have to do is let the application access your webcam and hit the blue button on the 'comeseekevin' camera. Then you will have a polaroid! To save the photo, just right click the photo and you will be able to download the original copy.  

# Built With
- HTML 
- CSS
- JS

## Project Inspiration
The idea for this project came from my girlfriend, who loves using her polaroid camera. After her camera ran out of film I wanted to see if I could make a program that could mimic what a polaroid camera does. Funny enough, being on reddit a lot also, I saw a polaroid camera from https://www.reddit.com/r/css/comments/f2r45b/how_i_recreated_a_polaroid_camera_with_css/" from u/speckz that inspired me to make one of my own. I didn't want to focus too much on the design of the camera, instead I wanted to see if I could make it work. So instead of going out and buying film I decided to build this instead, I hope you enjoy it!

# How Does It Work?
## HTML&CSS
To build the camera I used a lot of div tags to customize sizing and every little feature of the camera.

#### Camera Body
This was the parent element that nested all of my child div tags. I wanted the other elements to be trapped inside the parent component. All of the sizing from the other components were done with vanilla CSS.
#### Canvas
This tag serves itself as a container for the graphics, I had to use JavaScript to draw the graphics.

#### Output
This is where the final result of the polaroid and where the filters would be applied. Inside this div tag, I nested a photo tag. If users 'right-clicked' on the image of the polaroid they could download it on their computer.
  
#### Video
This is where the person gets to see what they look like with no filter, capturing the video alone. When they are happy with the pose they can capture the image. I did this, so people could see what they looked like. With conventional polaroid cameras, you're taking the gamble on not seeing what you look like and wasting film which is kind of funny, but I just wanted to give users the option.
            
## JavaScript 

1. First, create a function where I can set the width of the polaroid container and let the computer determine the height based on the input stream.
2. Second, use <strong>var</strong> to declare our HTML elements and use a startup function to control them.
3. Third, I used a <strong>navigator.MediaDevices.getUserMedia()</strong> method to prompt the user for permission to use their media input(webcam).
4. Finally, the photo is captured by fetching the current video from the media input and draws it into a canvas. From there, it converts it into a PNG, and the size has the ability to change since it is drawn on a offscreen canvas. </p>

# More
If you are interested in knowing more about how it works, my source code is fairly well documented if you want to check it out.
OR... Contact Me!


# Author
Kevin Quinn - csk.



