fetch('https://dummyjson.com/products').then(res => (res.json())).then((res) => {
    let data1 = "";
    data1 = res.products;
    let data2 = "";

    data1.map((values) => {

        data2 += ` <div class="card">
                <h1 class="title">${values.title}</h1>
                <p class="id">${values.id}</p>
                <img src=${values.images[0]}
                    alt="image" class="images">
                <p>${values.description}</p>
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>
                <p class="discountPercentage">${values.discountPercentage}</p>
                <p class="brand">${values.brand}</p>
                <button class="btn">view more </button>
            </div>`



        console.log(data1);

    });


    document.getElementById("cards").innerHTML = data2;


})
    .catch((err) => {
        console.log(err);
    })

