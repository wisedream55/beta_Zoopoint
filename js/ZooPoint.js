const products = [{
        id: 1,
        TM: '1stChoice',
        description: '1st Choice Adult Toy&Small Lamb&Fish ФЕСТ ЧОЙС ВЗРОСЛЫЙ МИНИ ЯГНЕНОК РЫБА сухой суперпремиум корм для собак мини и малых пород',
        weight: 7,
        price: 1928,
        article: "ФЧСВММЯР7",
        imgUrl: './picture/800.jpg'
    },
    {
        id: 2,
        TM: 'Versele-Laga Complete',
        description: 'Versele-Laga Complete Crock Apple ВЕРСЕЛЕ-ЛАГА КОМПЛИТ ЯБЛОКО лакомство для кроликов и грызунов',
        weight: 0.05,
        price: 108.60,
        article: "613023",
        imgUrl: './picture/Complete.jpg'
    },
    {
        id: 3,
        TM: 'CattyMan',
        description: 'CattyMan Deli Cube Salmon КЭТТИМЕН КОНФЕТЫ КУБИКИ ДЕЛИ С ЛОСОСЕМ лакомство для котов',
        weight: 0.03,
        price: 89,
        article: "Z1588",
        imgUrl: './picture/CattyMan.jpg'
    },
    {
        id: 4,
        TM: 'Versele-Laga Crispy',
        description: 'Versele-Laga Crispy Muesli Hamster ВЕРСЕЛЕ-ЛАГА КРИСПИ МЮСЛИ ХОМЯК корм для хомяков, крыс, мышей, песчанок',
        weight: 1,
        price: 174,
        article: "617212",
        imgUrl: "./picture/Crispy.jpg"
    },
    {
        id: 5,
        TM: 'Cat Leader',
        description: 'Cat Leader Classic Wild Nature КЭТ ЛИДЕР КЛАССИК АРОМАТ ДИКОЙ ПРИРОДЫ супер впитывающий наполнитель в кошачий туалет',
        weight: 5,
        price: 260,
        article: "801328",
        imgUrl: "./picture/CatLeader.jpg"
    },
    {
        id: 6,
        TM: 'Versele-Laga Crispy',
        description: 'Flamingo Foam Livia Ring ФЛАМИНГО КОЛЬЦО игрушка для собак',
        weight: 1,
        price: 413,
        article: "617212",
        imgUrl: "./picture/Flamingo.jpg"
    }
];

const productsDetalies = [{
    id: 2,
    description: 'asdwdas',
    header: 'asdsd',
}];
let selectedProduct = null;

document.addEventListener("DOMContentLoaded", function () {
    drawProducts(products);
    let searchBtm = document.querySelector('.search-btm-products');
    searchBtm.addEventListener('click', function () {
        console.log('1');
        const filteredProducts = products.filter(s => s.id > 3);
        drawProducts(filteredProducts);
    });
});

function drawProducts(inputProducts) {
    let container = document.querySelector('.all-cards-products')
    container.innerHTML = '';
    for (let i = 0; i < inputProducts.length; i++) {
        let product = products[i];
        let cardProduct = document.createElement('div');
        let card = document.createElement('div');
        let imgProducts = document.createElement('img');
        let tmProducts = document.createElement('div');
        let articleProducts = document.createElement('div');
        let descriptionProducts = document.createElement('div');
        let priceProducts = document.createElement('div');
        let weighsProducts = document.createElement('div');
        let weighsOLegend = document.createElement('legend')
        let weighsSelect = document.createElement('select');
        let weighsOption = document.createElement('option');
        let btmProducts = document.createElement('div');
        // let btmMore = document.createElement('button');
        const btmMore = createElement('button', 'btm-more', 'Подробнее');
        let btmBuy = document.createElement('button');

        cardProduct.className = 'card-products col-4'
        imgProducts.src = product.imgUrl;
        imgProducts.className = "img-products";
        tmProducts.innerText = products[i].TM;
        tmProducts.className = 'tm-products';
        articleProducts.innerText = 'Артикул: ' + products[i].article;
        articleProducts.className = 'article-products';
        descriptionProducts.innerText = products[i].description;
        descriptionProducts.className = 'description-products';
        priceProducts.innerText = products[i].price + ' грн';
        priceProducts.className = 'price-products';
        weighsOption.innerText = products[i].weight + ' кг'
        weighsOLegend.innerText = 'Вес'
        weighsProducts.className = 'weighs-products';
        btmProducts.className = 'btm-products';
        // btmMore.className = 'btm-more';
        // btmMore.innerText = 'Подробнее';
        btmBuy.className = 'btm-buy';
        btmBuy.innerText = 'Купить';

        card.append(imgProducts);
        cardProduct.append(card);
        cardProduct.append(tmProducts);
        cardProduct.append(articleProducts);
        cardProduct.append(descriptionProducts);
        cardProduct.append(priceProducts);
        weighsProducts.append(weighsOLegend);
        weighsSelect.append(weighsOption);
        weighsProducts.append(weighsSelect);
        cardProduct.append(weighsProducts);
        btmProducts.append(btmMore);
        btmProducts.append(btmBuy);
        cardProduct.append(btmProducts);
        container.appendChild(cardProduct);
    }
}

function createElement(elem, className, innerText) {
    const element = document.createElement(elem);
    element.className = className;
    element.innerText = innerText;
    return element;
}




// document.addEventListener('DOMContentLoaded', function () {
//     let container = document.getElementById('products-container');
//     for (let i = 0; i < products.length; i++) {
//         let product = products[i];
//         let cards = document.createElement('div');

//         let card = `<div class='card-products col-4'>
//         <div class="img-products"><img src=${product.imgUrl}>
//         </div>
//         <div class="tm-products">
//             ${product.TM}
//         </div>
//         <div class="article-products ">Артикул:${product.article}</div>
//         <div class="description-products">${product.description}
//         </div>
//         <div class="price-products">${product.price}грн</div>
//         <div class="weighs-products">
//             <legend>Вес</legend>
//             <select name="Вес">
//                 <option>${product.weight}</option>
//             </select>
//         </div>
//         <div class="btm-products">
//             <button class="btm-more">Подробнее</button>
//             <button class="btm-buy">Купить</button>
//         </div>
//         </div>`

//         cards.innerHTML += card;
//         container.innerHTML += cards.innerHTML;
//     }

// });