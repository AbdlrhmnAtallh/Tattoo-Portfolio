document.addEventListener('DOMContentLoaded', function () {
    const backgrounds = [
        'Images/1.jpeg',
        'Images/2.jpeg',
        'Images/4.jpeg',
        'Images/3.jpeg',
        'Images/6.jpeg',
        // Add more background image paths as needed
    ];

    let currentBackgroundIndex = 0;
    const backgroundSlideshow = document.createElement('div');
    backgroundSlideshow.classList.add('background-slideshow');
    document.body.appendChild(backgroundSlideshow);

    function changeBackground() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        backgroundSlideshow.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    }

    // Change background every 10 seconds
    setInterval(changeBackground, 10000);

    // Initial background
    changeBackground();
});
