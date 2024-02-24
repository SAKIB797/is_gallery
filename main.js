
document.addEventListener("DOMContentLoaded", function () {
    const parentGrid = document.getElementById('parentGrid');
    const imageUrls = [
        'grid_photos/grid_1.jpg',
        'grid_photos/grid_2.jpg',
        'grid_photos/grid_3.jpg',
        // Add more image URLs as needed
    ];

    imageUrls.forEach((imageUrl) => {
        const childDiv = document.createElement('div');
        childDiv.innerHTML = `<img class="h-auto max-w-full rounded-lg" src="${imageUrl}" alt="">`;
        parentGrid.appendChild(childDiv);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById('carouselContainer');
    const photos = ['slider_photos/slider_1.jpg', 'slider_photos/slider_2.jpg', 'slider_photos/slider_3.jpg', 'slider_photos/slider_4.jpg'];

    photos.forEach((photo, index) => {
        if (index === 2) { // Corrected the condition here
            carouselContainer.innerHTML += `
            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="${photo}" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
            </div>`;
        }
        else {
            carouselContainer.innerHTML += `
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="${photo}" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
            </div>`;
        }
    });
});


