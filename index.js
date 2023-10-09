const slider = document.querySelector('.slider');

    let isTransitioning = false;

    function nextSlide() {
      if(isTransitioning) return;
      isTransitioning = true;

      slider.style.transform = 'translate (-100%)';

      setTimeout(()=> {
        const firstSlide = slider.children[0];
        slider.appendChild(firstSlide);
        slider.style.transform = 'translate(0)';
        isTransitioning = false;
      }, 500)
    }

    setInterval(nextSlide, 2000);