const CartCollection = JSON.parse(localStorage.getItem('cart')) || [];
// console.log(getCartCollection);

const cartContainer = document.getElementById('cart-container')
cartContainer.innerHTML = ''
for (let product of CartCollection) {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card bg-base-100 shadow-xl p-4 flex-row gap-4">
            <figure class="h-48 flex items-center justify-center bg-slate-100">
                <img src="${product.image}" class="h-full object-contain"/>
            </figure>
            <div class="card-body p-2">
                <h2 class="card-title text-lg">
                    ${product.title}
                </h2>
                <span class='p-1 bg-blue-200 rounded-full px-3 text-blue-700 inline-block w-fit'>${product.category}</span>
                <div class="">
                    <span class="font-bold text-lg">$${product.price}</span>
                </div>
                <div class="flex justify-between gap-3 mt-3">
                    <button onclick='getSingleProduct(${product.id})'
                    class="rounded-lg btn text-gray-700"><i class="fa-regular fa-eye"></i>Details</button>
                    <p class='text-right'><i class="fa-solid fa-star text-yellow-500"></i><span class='text-gray-500 font-medium'> ${product.rating.rate} (${product.rating.count})</span></p>
                </div>
            </div>
        </div>
        `;

    cartContainer.append(card);
}

const subTotal = CartCollection.reduce((acc, currentValue) => acc + currentValue.price, 0)
document.querySelector('#subtotal').innerText=`$${subTotal}`
document.querySelector('#total').innerText=`$${subTotal}`

