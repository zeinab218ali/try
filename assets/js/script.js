fetch('https://dummyjson.com/products').then(res => (res.json())).then((res) => {
    let data1="";
    res.map((values)=>{
        data1+=` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.images}
            alt="image" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`

    });
    document.getElementById("cards").innerHTML= data1;


}).catch((err) => {
    console.log(err);
})

