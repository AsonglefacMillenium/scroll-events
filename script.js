const scrollElements = document.querySelectorAll(".js-scroll");
const scrollOffset = 100;

// allowing default styling if javascript is disabled in browser.


scrollElements.forEach((el) => {
    el.style.opacity = 0
})


const elementInview = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= (window.innerHeight || document.documentElement.clientHeight)
}


//adding display

const displayScrollElement = (element) =>{
    scrollElements.classList.add('scrolled');
};

const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
  }

// using foreach method to call function on js-scroll elements

const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
    } else {
      hideScrollElement();
    }
  }
    

  // passing method to scroll event listener

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })