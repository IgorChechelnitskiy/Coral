let SlideIndex = 1;

function heroNextSlide() {
    ShowSlides(SlideIndex += 1);
}

function heroPreviousSlide() {
    ShowSlides(SlideIndex -= 1);
}

function ShowSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        SlideIndex = 1
    }
    if (n < 1) {
        SlideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[SlideIndex - 1].style.display = "block";
}


ShowSlides(SlideIndex);
