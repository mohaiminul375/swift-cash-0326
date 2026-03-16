// javascript for products page
// get category data by API
const getCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data));
};
// display categories
const displayCategory = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    for (let category of categories) {
        const btnDiv = document.createElement("button");
        btnDiv.classList.add("btn", "rounded-2xl", "px-7");
        btnDiv.addEventListener("click", () => {
            getProductsCategory(category);
        });
        btnDiv.innerText = category;
        categoryContainer.append(btnDiv);
    }
};
// get all product data by API
const getProductsAll = () => {
    manageSpinner(true)
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) =>
            showCard(data)
        );
};
// get product (by category) data by API
const getProductsCategory = (category) => {
    manageSpinner(true)
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => showCard(data));
};
// show Product card
const showCard = (products) => {
    const productContainer = document.getElementById("card-container");
    productContainer.innerHTML = "";
    for (let product of products) {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card bg-base-100 shadow-xl p-4">
            <figure class="h-48 flex items-center justify-center bg-slate-100">
                <img src="${product.image}" class="h-full object-contain"/>
            </figure>
            <div class="card-body p-2">
            <div class='flex justify-between items-center'>
            <span class='p-1 bg-blue-200 rounded-full px-3 text-blue-700'>${product.category}</span>
            <p class='text-right'><i class="fa-solid fa-star text-yellow-500"></i><span class='text-gray-500 font-medium'> ${product.rating.rate} (${product.rating.count})</span></p>
            </div>
                <h2 class="card-title text-lg">
                    ${product.title.slice(0, 20)}...
                </h2>
                <div class="">
                    <span class="font-bold text-lg">$${product.price}</span>
                </div>
                <div class="flex justify-between gap-3 mt-3">
                    <button onclick='getSingleProduct(${product.id})'
                    class="rounded-lg btn text-gray-700"><i class="fa-regular fa-eye"></i>Details</button>

                    <button class="rounded-lg btn bg-[#4841d6] text-white"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                </div>
            </div>
        </div>
        `;
        productContainer.append(card);
    }
    manageSpinner(false)
};
// call func
getProductsAll();
getCategory();