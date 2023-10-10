const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

const container = document.querySelector(".container");

/* console.log(container); */

let html = "";

for (let i =0; i < products.length; i++){

    let displayPrice = "Not Defined"

    if (products[i].price) {
        displayPrice = products[i].price;
    }

    html += `<div class="container">
            <h4>${products[i].name}</h4>
            <b>${displayPrice}</b>
            <b>${products[i].soldOut}</b>
            </div>
`;
console.log(html);
}

container.innerHTML = html;