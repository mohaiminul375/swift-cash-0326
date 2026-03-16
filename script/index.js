// share javascript
// manage Spinner
const manageSpinner = (status) => {
  const spinner = document.getElementById('spinner');
  const cardContainer = document.getElementById('card-container');
  if (status) {
    if (spinner) {
      spinner.classList.remove('hidden');
      spinner.classList.add('flex');
    }
    if (cardContainer) {
      cardContainer.classList.add('hidden');
    }
  } else {
    if (spinner) {
      spinner.classList.add('hidden');
    }
    if (cardContainer) {
      cardContainer.classList.remove('hidden');
    }
  }
};

// get single product data by API
const getSingleProduct = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => displayModal(data));
};
const displayModal = (product) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
   <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-800">✕</button>
      </form>
      
<div class="card p-4 mt-5">
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
                <p class='text-gray-700'>${product.description}</p>
                <div class="">
                    <span class="font-bold text-lg">$${product.price}</span>
                </div>
                <div class="">
                    <button class="rounded-lg btn bg-[#4841d6] text-white w-full"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                </div>
            </div>
        </div>
`;
  document.getElementById("my_modal_3").showModal();
};