const carouselInner = document.querySelector('.carousel-inner');

window.addEventListener('load', () => {
    getBanners();
});

function getBanners() {
    fetch('https://my-json-server.typicode.com/daryllaraya/slider-api/banners')
        .then(response => {
            // console.log(response);
            return response.json();
    }).then(data => {
        // console.log(data);
        let template = "";

        data.forEach((item, i) => {
            // console.log(item.imageURL);

            // if (i === 0) {
            //     template = `<div class="carousel-item active">`;
            // } else {
            //     template = `<div class="carousel-item">`;
            // }

            // ES6 if else
            i === 0 ? template = `<div class="carousel-item overlay active" data-bs-interval="1000">` : template = `<div class="carousel-item overlay" data-bs-interval="1000">`

            template += `
                <img src="${item.imageURL}" class="d-block w-100" alt="">
                    <div class="carousel-caption">
                        <h2>${item.title}</h2>
                        <p>${item.subtitle}</p>
                    </div>
                </div>
            `;

            carouselInner.insertAdjacentHTML("beforeend", template);
            
        });

    }).catch(error => {
        console.log(error);
    });
}