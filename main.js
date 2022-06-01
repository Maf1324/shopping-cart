let data = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
    {
      id: "thiecbawdjksadjk",
      name: "Mens Tie",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-5.png",
    },
    {
      id: "iuertrywebncdjksadjk",
      name: "Casual shoes",
      price: 200,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-6.png",
    },
    {
      id: "thierytbvcbvzdhadjk",
      name: "black suit",
      price: 450,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-7.png",
    },
    {
      id: "trfoiwfcnbcawdjksadjk",
      name: "polo shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-8.png",
    },
    {
      id: "cbvxbcvsceldk",
      name: "denim shirt",
      price: 85,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-9.png",
    },
    {
      id: "oiopijmjkhuihb",
      name: "denim pants",
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-10.png",
    },
    {
      id: "oiopijewyiohbjhib",
      name: "basic cap",
      price: 35,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-11.png",
    },
    {
      id: "rtytytuyuytyytbvncv",
      name: "leather boots",
      price: 350,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-12.png",
    },
  ];

const products = document.getElementById('products')

let basket = [];

render_products = (product_list) => {
    product_list.map((element) =>{
        let {id,img, name, desc, price} = element
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
                        <span id="${id}" class="product_amount">0</span>
                        <i onclick="increment(${id})" class="fa-solid fa-plus btn_plus"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}

increment = (selectedItem) => {
  let search = basket.find(element => element.id === selectedItem.id)
  
  if (search === undefined){
  basket.push({
    id : selectedItem.id,
    item : 1}
  )
  update(selectedItem, 1)
} else {
  search.item += 1
  update(selectedItem, search.item)
  }
}

decrement = (selectedItem) => {
  let search = basket.find(element => element.id === selectedItem.id)

  if (search === undefined || search.item === 0){
    console.log('Product already at 0 itens');
} else {
  search.item -= 1
  update(selectedItem, search.item)
  }
}

update = (selectedItem, updated) => {
  selectedItem.innerText = updated
}

render_products(data)