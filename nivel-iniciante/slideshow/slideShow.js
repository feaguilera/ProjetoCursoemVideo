'use strict';

const images = [
    { 'id': '1', 'url':'./img/chrono.png'},
    { 'id': '2', 'url':'./img/inuyasha.png'},
    { 'id': '3', 'url':'./img/ippo.png'},
    { 'id': '4', 'url':'./img/tenchi.png'},
    { 'id': '5', 'url':'./img/tenjhotenge.png'},
    { 'id': '6', 'url':'./img/yuyuhakusho.png'},
];

const containerItems = document.querySelector('#container-items');
const containerIndicators = document.querySelector('.indicators');


const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}' alt='${image.id}'>
            </div>
        `;
    });
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
