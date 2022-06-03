let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping_cart")
let basket = JSON.parse(localStorage.getItem("data")) || [];

let updateCartItens = ()=> {
  let cartAmount = document.querySelector('.cart_amount')
  cartAmount.innerText = basket.reduce((total, uniProdcut) => total + uniProdcut.item, 0)
}

let generateItemCards = () => {
    if (basket.length > 0){
        basket.map((prod)=> {
            let search = data.find((e) => e.id === prod.id)
            let {id,img, name, price} = search
            // TODO Fix the position of the title and price
            return shoppingCart.innerHTML += `
            <div id="product-id-${id}" class="cart_item">
                <div class="card_cover">
                    <img class="item_img" src="${img}" alt="${img}">
                </div>
                    <div class="title_price">
                        <h3 class="product_title">${name}</h3>
                        <span class="price">$${price}</span>
                    </div>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus btn_minus"></i>
                        <span id="${id}" class="product_amount">
                        ${prod.item === undefined? 0 : prod.item}
                        </span>
                        <i onclick="increment(${id})" class="fa-solid fa-plus btn_plus"></i>
                    </div>
            </div>
            `
        })
        
    }else {
        // label.innerHTML = ``
        shoppingCart.classList.add('empty_cart', 'flex')
        shoppingCart.innerHTML = `
        <h2>Your cart is empty 😢</h2>
        <a href="/">
            <button type="button"class="home_btn">Continue shopping</button>
        </a>
        `
    }
}

// TODO creat a new update function to change the final price of the order

updateCartItens()
generateItemCards()