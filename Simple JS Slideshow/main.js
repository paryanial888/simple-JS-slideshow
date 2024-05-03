// Alexander Paryani
// 3 MAY 2024
// Simple JS Slideshow

let i = 0; // Start point
const images = [];
const time = 3000; // 3000 milliseconds = 3 seconds

// Image array
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';

// Image captions array
const captions = ['Forest', 'Beach', 'Icy Land Scape', 'Jungle Village', ] ;

// Change Image
function changeImg(){
    document.slide.src = images[i];
    const myCaption = document.querySelector('#image-caption');
    myCaption.innerHTML = captions[i];

    if(i < images.length - 1){
        i++; // Increase index number for the image by 1 each time the function runs
    } else {
        i = 0;
    } // End of if statement

    setTimeout("changeImg()", time);
    // End of changeImg ( ) function
}

window.onload = changeImg;

