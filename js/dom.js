document.addEventListener('DOMContentLoaded', () => {
    const allButtons = document.querySelectorAll('button');
    const firstButton = document.querySelector('button');
    const firstWithId = document.querySelector('#someId');
    const firstWithClass = document.querySelector('.someClass');
    const firstWithAttr = document.querySelector('[data-some-attr=someString]');

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

    document.querySelector('#changeMe').innerHTML = '<em><strong>has</strong> changed</em>';

    ///////////////

    const moveElem = document.querySelector('#moveMe');
    moveElem.style.position = 'absolute';
    document.addEventListener('mousemove', event => {
        moveElem.style.left = event.clientX + 20 + 'px';
        moveElem.style.top = event.clientY + 20 + 'px';
    });

    ///////////////

    const elemWithAttr = document.querySelector('[data-some-attr=someString]');
    const attrValue = elemWithAttr.getAttribute('data-some-attr');
    elemWithAttr.setAttribute('data-some-attr', 'someNewString');

});