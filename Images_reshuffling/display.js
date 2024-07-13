"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchImages() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://picsum.photos/v2/list?page=2&limit=100');
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
            return yield response.json();
        }
        catch (error) {
            console.log(`Failed to fetch images: ${error}`);
            return [];
        }
    });
}
function displayImages(images) {
    const container = document.querySelector('#image-container');
    if (container) {
        container.innerHTML = '';
        images.slice(0, 12).forEach((image) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.download_url;
            imgElement.alt = image.author;
            imgElement.className = 'w-full h-60 object-cover rounded-lg shadow-md';
            container.appendChild(imgElement);
        });
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let currentImages = [];
function reshuffleImages() {
    return __awaiter(this, void 0, void 0, function* () {
        currentImages = shuffleArray(currentImages);
        displayImages(currentImages);
    });
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    currentImages = yield fetchImages();
    displayImages(currentImages);
    const reshuffleButton = document.getElementById('reshuffle-button');
    reshuffleButton === null || reshuffleButton === void 0 ? void 0 : reshuffleButton.addEventListener('click', reshuffleImages);
}));
