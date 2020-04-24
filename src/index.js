import _ from 'lodash';
import './style.css';
import imageSamurai from './samurai7.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the img to our existing div.
    const myImage = new Image();
    myImage.src = imageSamurai;

    element.appendChild(myImage);
    console.log(Data);

    return element;
}

document.body.appendChild(component());