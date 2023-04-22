fetch('https://dummyjson.com/products').then(res => (res.json())).then((res) => {
    let data1 = "";
    data1 = res.products;
    let data2 = "";
    let data3 = "";
    let data4 = "";

    data1.map((values) => {
        let counter =0;
        if(counter<10){
            data2 += ` <div class="card">
            <h1 class="title">${values.title}</h1>
            <img src=${values.images[0]}
                alt="image" class="images">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
            <p class="discountPercentage">${values.discountPercentage}</p>
            <p class="id">${values.id}</p>
            <p class="rating">${values.rating}</p>
            <p class="stock">${values.stock}</p>
            <p class="brand">${values.brand}</p>
        </div>`
        counter++;

        }

        if(counter>=10 && counter<20 ){
            data3 += ` <div class="card">
            <h1 class="title">${values.title}</h1>
            <img src=${values.images[0]}
                alt="image" class="images">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
            <p class="discountPercentage">${values.discountPercentage}</p>
            <p class="id">${values.id}</p>
            <p class="rating">${values.rating}</p>
            <p class="stock">${values.stock}</p>
            <p class="brand">${values.brand}</p>
        </div>`
        counter++;

        }
        

        if(counter>=20 && counter<30 ){
            data4 += ` <div class="card">
            <h1 class="title">${values.title}</h1>
            <img src=${values.images[0]}
                alt="image" class="images">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
            <p class="discountPercentage">${values.discountPercentage}</p>
            <p class="id">${values.id}</p>
            <p class="rating">${values.rating}</p>
            <p class="stock">${values.stock}</p>
            <p class="brand">${values.brand}</p>
        </div>`
        counter++;

        }
        
        


        // console.log(data1);

    });


    document.getElementById("swiper1").innerHTML = data2;
    document.getElementById("swiper2").innerHTML = data3;
    document.getElementById("swiper3").innerHTML = data4;
    document.getElementById("cards").innerHTML = swiper1;
    document.getElementById("cards").innerHTML = swiper2;
    document.getElementById("cards").innerHTML = swiper3;
    


})
    .catch((err) => {
        console.log(err);
    })

