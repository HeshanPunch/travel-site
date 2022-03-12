var imageIndex = 0;
var imageArray = [];
var slideTimer = 4000;
var captionArray = [];
image = document.getElementById('slideShowImg');
caption = document.getElementById('caption1');

// photos from unsplash.com
imageArray[0] = "photos/photo1.avif";
imageArray[1] = "photos/photo2.avif";
imageArray[2] = "photos/photo3.avif";
imageArray[3] = "photos/photo4.avif";
imageArray[4] = "photos/photo5.jpg";
imageArray[5] = "photos/photo6.jpg";
imageArray[6] = "photos/photo7.avif";
imageArray[7] = "photos/photo8.avif";
imageArray[8] = "photos/photo9.avif";
imageArray[9] = "photos/photo10.avif";


captionArray[0] = "Kalsoy, Faroe Islands";
captionArray[1] = "Caves in Svalbard";
captionArray[2] = "Abisko, Sweden";
captionArray[3] = "Waves from Kuwait";
captionArray[4] = "Mountain Range by Jonathan Letniak";
captionArray[5] = "Sossusvlei, Namibia";
captionArray[6] = "Barn in the Mountains";
captionArray[7] = "Cabin in the Woods";
captionArray[8] = "Wild Buck";
captionArray[9] = "Winding Road";

// var opacity = document.getElementById('slideShowImg').style.opacity;
// console.log(opacity);

window.onload = slideShow; //call slideshow on load



function slideShow() {
    document.getElementById('slideShowImg').className += "fadeout";
    document.getElementById('caption1').className += "fadeout";
    setTimeout(function() {
        document.getElementById('slideShowImg').src = imageArray[imageIndex];
        document.getElementById('slideShowImg').className = "";
        document.getElementById("caption1").innerHTML = captionArray[imageIndex];
        document.getElementById("caption1").className = "";


    }, 1000);
    imageIndex++;
    if (imageIndex == imageArray.length) { imageIndex = 0; }
    setTimeout(slideShow, slideTimer);
}
slideShow();






// function fadeOut(){
//     console.log("fadeOut"); //testing
//     document.getElementById("slideShowImg").classList.toggle('fade');
// }





// some JS code adapted from http://jsfiddle.net/pdb4kb1a/2/