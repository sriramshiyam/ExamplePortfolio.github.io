let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);

    let scrollPercentRounded = Math.round(scrollPercent * 100);

    two.style.opacity = scrollPercentRounded >= 33 ? '1' : '0.5';
    three.style.opacity = scrollPercentRounded >= 65 ? '1' : '0.5';
    four.style.opacity = scrollPercentRounded == 100 ? '1' : '0.5';

});

