fetch('https://dummyjson.com/products').then(res =>(res.json())) .then((res) => {
    let data1="";
    data1= res.products;
    let data2="";
    data1.map((values)=>{
        data2+=` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.images}
            alt="image" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    
    // console.log(data1);

    });
    document.getElementById("cards").innerHTML= data2;


}) 
.catch((err) => {
    console.log(err);
})

