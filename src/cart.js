let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping_cart")
let basket = JSON.parse(localStorage.getItem("data")) || [];
let finalPrice = document.querySelector('.full_price')

let updateCartItens = ()=> {
  let cartAmount = document.querySelector('.cart_amount')
  cartAmount.innerText = basket.reduce((total, uniProdcut) => total + uniProdcut.item, 0)
}

let generateItemCards = () => {
    shoppingCart.innerHTML = ""
    if (basket.length > 0){
        basket.map((product)=> {
            let {id:uniqID, item} = product
            let uniqueProduct = data.find((i) => i.id === uniqID)
            let {id, name, price, img} = uniqueProduct
            shoppingCart.innerHTML += `
            <div id="item-id-${id}" class="cart_item">
                <img src="${img}" alt="${name}" title="${name}" class="cart_item_cover">
                <div class="details">
                    <div class="name_price_x">
                        <div class="name_price">
                            <span class="item_title">${name}</span>
                            <span class="item_price">$ ${price}</span>
                        </div>
                        <i onclick="delet(${id})" class="fa-solid fa-x del_btn"></i>
                    </div>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus btn_minus"></i>
                        <span id="${id}" class="product_amount">
                            ${item === undefined? 0 : item}
                        </span>
                        <i onclick="increment(${id})" class="fa-solid fa-plus btn_plus"></i>
                    </div>
                    <h3>Subtotal(${item} itens): $
                        <span class="subtotal">
                            ${setSubTotal(product)}
                        </span>
                    </h3>
                </div>
            </div>
            `    
        })
        
    } else {
        // label.innerHTML = ``
        shoppingCart.classList.add('empty_cart', 'flex')
        shoppingCart.innerHTML = `
        <h2>Your cart is empty 😢</h2>
        <a href="/">
            <button type="button"class="home_btn">Continue shopping</button>
        </a>
        `
    }
    setFinalValue()
}

let setSubTotal = (basketProduct) => {
    let {id, item} = basketProduct
    let price = data.find((e) => e.id === id)
    return price.price * item
}

let setFinalValue = () => {
    price = 0
    basket.map((e)=> {
        let {id, item} = e
        product = data.find((i) => i.id === id)
        price += product.price * item
    })
    finalPrice.innerText = `${price}`
}

let decrement = (obj) => {
    let search = basket.find(element => element.id === obj.id)
    if (search === undefined || search.item === 0) return;
    else {
      search.item -= 1
    }
    handleUpdates()
}

let increment = (obj) => {
    let search = basket.find(e => e.id === obj.id)
    console.log(obj);
    search.item += 1
    obj.innerText = search.item
    handleUpdates()
}

let delet = (obj) => {
    let search = basket.find(element => element.id === obj.id)
    search.item = 0
    handleUpdates()
}

let handleUpdates = () => {
    basket = basket.filter(e => e.item >0)
    localStorage.setItem('data', JSON.stringify(basket))
    updateCartItens()
    setFinalValue()
    generateItemCards()
}

updateCartItens()
generateItemCards()