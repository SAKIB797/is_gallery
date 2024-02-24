

//for carousel

document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById('carouselContainer');
    const photos = [
        'slider_photos/slider_1.jpg',
        'slider_photos/slider_2.jpg',
        'slider_photos/slider_3.jpg',
        'slider_photos/slider_4.jpg'
    ];

    photos.forEach((photo, index) => {
        if (index === 2) {
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


//for photo grid
document.addEventListener("DOMContentLoaded", function () {
    const parentGrid = document.getElementById('parentGrid');
    const imageUrls = [
        "grid_16.jpg",
        "grid_1.jpg",
        "grid_2.jpg",
        "grid_4.jpg",
        "grid_23.jpg",
        "grid_11.jpg",
        "grid_12.jpg",
        "grid_20.jpg",
        "grid_5.jpg",
        "grid_6.jpg",
        "grid_17.jpg",
        "grid_18.jpg",
        "grid_19.jpg",
        "grid_7.jpg",
        "grid_8.jpg",
        "grid_21.jpg",
        "grid_22.jpg",
        "grid_24.jpg",
        "grid3.jpg",
        "grid_9.jpg",
        "grid_10.jpg",
        "grid_13.jpg",
        "grid_14.jpg",
        "grid_15.jpg",
        

    ];

    imageUrls.forEach((imageUrl) => {

        parentGrid.innerHTML += `<div class="grid_photo"> <img class="h-auto max-w-full rounded-lg" src="grid_photos/${imageUrl}" alt=""> </div>`;

    });
});

