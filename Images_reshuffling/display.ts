interface imageData {
    id: string;
    author: string;
    download_url: string;
}

async function fetchImages(): Promise<imageData[]> {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
        if (!response.ok){
         throw new Error(`HTTP error! status: ${response.status}`);
        }  
        return await response.json();
    } catch (error) {
        console.log(`Failed to fetch images: ${error}`);
        return [];
    }
}

function displayImages(images: imageData[]) {
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

function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
    
let currentImages: imageData[] = [];

async function reshuffleImages() {
    currentImages = shuffleArray(currentImages);
    displayImages(currentImages);
}

document.addEventListener('DOMContentLoaded', async () => {
    currentImages = await fetchImages();
    displayImages(currentImages);
    const reshuffleButton = document.getElementById('reshuffle-button');
    reshuffleButton?.addEventListener('click', reshuffleImages);
});
