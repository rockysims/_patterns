window.addEventListener('load', () => {
    const allButtons = document.querySelectorAll('button');
    const firstButton = document.querySelector('button');
    const firstWithId = document.querySelector('#someId');
    const firstWithClass = document.querySelector('.someClass');
    const firstWithAttr = document.querySelector('[data-someAttr=someString]');

    ///////////////

    firstButton.addEventListener('click', () => {
        console.log('first button clicked');
    });

    for (let btn of allButtons) {
        btn.addEventListener('click', () => {
            console.log('button clicked');
        });
    }

    ///////////////

    document.querySelector('body').addEventListener('keydown', event => {
        console.log(event.key + ' key down');
    });

    const firstInput = document.querySelector('input');
    firstInput.addEventListener('input', event => {
        console.log('first input value changed to ' + firstInput.value);
    });

    const firstTextarea = document.querySelector('textarea');
    firstTextarea.addEventListener('input', event => {
        console.log('first textarea value changed to ' + firstTextarea.value);
    });

    ///////////////

    document.querySelector('#changeMe').innerHTML = '<i><b>has</b> changed</i>';

    ///////////////

    const elem = document.querySelector('#moveMe');
    elem.style.position = 'absolute';
    document.addEventListener('mousemove', event => {
        elem.style.left = event.clientX + 20 + 'px';
        elem.style.top = event.clientY + 20 + 'px';
    });

});