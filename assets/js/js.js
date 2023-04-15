
const data = JSON.parse(localStorage.getItem("cards")) || [];

function appendNeItemIntoCards(value ) {

    const cards = document.querySelector(".cards");
    const card = document.querySelector(".card");

    const p1 = document.querySelector(".brand");
    const p2 = document.querySelector(".category");
    const p3 = document.querySelector(".description");
    const p4 = document.querySelector(".discountPercentage");
    const p5 = document.querySelector(".id");
    
    const img0 = document.querySelector(".img0");
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
 
    const p6 = document.querySelector(".price");
    const p7 = document.querySelector(".rating");
    const p8 = document.querySelector(".stock");
    const p9 = document.querySelector(".title");
    




    const brand = document.createElement("p");
    brand.innerText = value.brand;


    const category = document.createElement("p");
    category.innerText = value.category;


    const description = document.createElement("p");
    description.innerText = value.description;


    const discountPercentage = document.createElement("p");
    discountPercentage.innerText = value.discountPercentage;


    const id = document.createElement("p");
    id.innerText = value.id;


    const img00 = document.createElement("img");
    img00.innerHTML = value.images[0];


    const img11 = document.createElement("img");
    img11.innerHTML = value.images[1];


    const img22 = document.createElement("img");
    img22.innerHTML = value.images[2];


    const img33 = document.createElement("img");
    img33.innerHTML = value.images[3];


    const price = document.createElement("p");
    price.innerText = value.price;


    const rating = document.createElement("p");
    rating.innerText = value.rating;


    const stock = document.createElement("p");
    stock.innerText = value.stock;


    const title = document.createElement("p");
    title.innerText = value.title;



    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = "view more";

    button.addEventListener("click", function (event) {
        event.fetchproducts();


    });

    p1.appendChild(brand);
    card.appendChild(p1);

    p2.appendChild(category);
    card.appendChild(p1);

    p3.appendChild(description);
    card.appendChild(p1);

    p4.appendChild(discountPercentage);
    card.appendChild(p1);

    p5.appendChild(id);
    card.appendChild(p1);

    img0.appendChild(img00);
    card.appendChild(img0);

    img1.appendChild(img11);
    card.appendChild(img1);

    img2.appendChild(img22);
    card.appendChild(img2);

    img3.appendChild(img33);
    card.appendChild(img3);

    p6.appendChild(price);
    card.appendChild(p6);

    p7.appendChild(rating);
    card.appendChild(p7);

    p8.appendChild(title);
    card.appendChild(p8);

    
    card.appendChild(button);
    cards.appendChild(card);

}



async function fetchproducts() {
    let data = [];
    await fetch('https://dummyjson.com/products')
        .then(res => (res.json())).then((res) => {
            res.lenght()= 10;
            data = res;
        })
    data.forEach(item => {
        appendNeItemIntoCards(item);
    })
}
fetchproducts()