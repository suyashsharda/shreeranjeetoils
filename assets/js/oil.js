const oilListEl = document.getElementById('products');
oilListEl.addEventListener('click', (event) => {
    const selectedOilId = event.target.closest('.single-product-item').getAttribute('id'),
    pageName = window.location.pathname.split("/")[1];
    let newHref = window.location.href.replace(pageName, `single-product.html?id=${selectedOilId}`);
    const hashIndex = newHref.indexOf('#');
    newHref = newHref.slice(0, hashIndex);
    window.location.href = newHref;
})

navigateToContact = function (event) {
    event.stopPropagation();
    window.location.href = "#contact";
}

document.getElementById('menu-list').addEventListener('click', (event)=>{
    const liEl = document.getElementsByClassName('current-list-item');
    liEl[0].classList.remove('current-list-item');
    event.target.closest('li').classList.add('current-list-item');
})

createProducts = function (productsList, containerId) {
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    productsList.forEach( product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-lg-3', 'col-md-6', 'text-center');
        const productItemDiv = document.createElement('div');
        productItemDiv.classList.add('single-product-item');
        productItemDiv.setAttribute('id', product.id);
        const productImgContainer = document.createElement('div');
        productImgContainer.classList.add('product-image');
        const productImgEl = document.createElement('img');
        productImgEl.src = `assets/img/products/${product.imgName}.jpg`;
        productImgContainer.append(productImgEl);
        const productNameEl = document.createElement('h3');
        productNameEl.innerText = product.name;
        const productDescEl = document.createElement('p');
        productDescEl.innerText = product.shortDescription;
        const shopEl = document.createElement('a');
        shopEl.addEventListener('click', navigateToContact);
        shopEl.classList.add("cart-btn");
        const shopIconEl = document.createElement('i');
        shopIconEl.classList.add('fas', 'fa-shopping-cart');
        shopEl.append(shopIconEl);
        shopEl.append(document.createTextNode('shop'));
        productItemDiv.append(productImgContainer,productNameEl,productDescEl, shopEl);
        productDiv.append(productItemDiv);
        divRow.append(productDiv);
    })
    const containerEl = document.getElementById(containerId);
    containerEl.append(divRow);
}

createProducts(featuredProducts, 'featured-products-container');
createProducts([MoreProducts[0], MoreProducts[1], MoreProducts[2],MoreProducts[3]], 'oil-list');
createProducts([MoreProducts[4], MoreProducts[5], MoreProducts[6],MoreProducts[7]], 'oil-list');
createProducts([MoreProducts[8], MoreProducts[9]], 'oil-list');

