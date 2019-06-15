console.log("slideshow.js loaded");


//Get references to the slide images and put them in array:
const slides = document.getElementsByClassName("slideshow-img-hidden");
const texts = document.getElementsByClassName("slideshow-text-hidden");


//Change the first slide to visible
slides[0].classList.add("slideshow-img-visible");
texts[0].classList.add("slideshow-text-visible");

let currentSlide = 0;

const numSlides = 2; //actual num - 1

const onPrevClick = () =>
{
	//prev click
	
	//make the current slide hidden
	slides[currentSlide].classList.remove("slideshow-img-visible");
	texts[currentSlide].classList.remove("slideshow-text-visible");

	console.log("removed visible from " + currentSlide);
	currentSlide--;
	if (currentSlide < 0) {currentSlide = numSlides;}

	//make the new slide visible
	slides[currentSlide].classList.add("slideshow-img-visible");
	texts[currentSlide].classList.add("slideshow-text-visible");


	console.log("added visible to " + currentSlide);

}

const onNextClick = () =>
{
	//next click

		//make the current slide hidden
	slides[currentSlide].classList.remove("slideshow-img-visible");
	texts[currentSlide].classList.remove("slideshow-text-visible");


	console.log("removed visible from " + currentSlide);
	currentSlide++;
	if (currentSlide > numSlides) {currentSlide = 0;}

	//make the new slide visible
	slides[currentSlide].classList.add("slideshow-img-visible");
	texts[currentSlide].classList.add("slideshow-text-visible");


	console.log("added visible to " + currentSlide);
}