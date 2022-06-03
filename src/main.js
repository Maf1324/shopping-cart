const products = document.getElementById('products')

let basket = JSON.parse(localStorage.getItem("data")) || [];

let render_products = (product_list) => {
    product_list.map((element) =>{
        let {id,img, name, desc, price} = element
        let search = basket.find(x => x.id === id) || []
        return products.innerHTML += `
        <div id="product-id-${id}" class="product_card">
            <div class="card_cover">
                <img class="cover_img" src="${img}" alt="${img}">
            </div>
            <div class="card_details">
                <h3 class="product_title">${name}</h3>
                <p class="product_description">${desc}</p>
                <div class="price_and_amount">
                    <span class="price">$${price}</span>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus btn_minus"></i>
                        <span id="${id}" class="product_amount">
                        ${search.item === undefined? 0 : search.item}
                        </span>
                        <i onclick="increment(${id})" class="fa-solid fa-plus btn_plus"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}

let increment = (selectedItem) => {
  let search = basket.find(element => element.id === selectedItem.id)
  
  if (search === undefined){
  basket.push({
    id : selectedItem.id,
    item : 1}
  )
  // update(selectedItem, 1)
} else {
  search.item += 1
  // update(selectedItem, search.item)
  }
  handleUpdate(selectedItem.id)
}

let decrement = (selectedItem) => {
  let search = basket.find(element => element.id === selectedItem.id)
  if (search === undefined || search.item === 0) return;
  else {
    search.item -= 1
  }
  handleUpdate(search.id)
}

// Updates the item amount and the total of itens in the shopping cart
let handleUpdate = (productId) => {
  let search = basket.find(x => x.id === productId)
  let itemAmount = document.getElementById(productId)
  basket = basket.filter(x => x.item > 0) 
  localStorage.setItem('data', JSON.stringify(basket))
  itemAmount.innerText = search.item
  updateCartItens();
}

// Update number of itens in the cart icon
let updateCartItens = ()=> {
  let cartAmount = document.querySelector('.cart_amount')
  cartAmount.innerText = basket.reduce((total, uniProdcut) => total + uniProdcut.item, 0)
}

render_products(data)
updateCartItens()