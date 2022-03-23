const id = +window.location.href.split("?")[1].split('=')[1];
const products = [...featuredProducts, ...MoreProducts];
const selectedProducts = products.filter(product => product.id === id)
const selectedProduct = selectedProducts[0];
const imgContainer = document.getElementById('single-product-img-container');
imgContainer.firstElementChild.src = `assets/img/products/${selectedProduct.imgName}.jpg`

document.getElementById('oil-name').innerText = selectedProduct.name;
document.getElementById('oil-description').innerText = selectedProduct.description;
document.getElementById('single-product').innerText = selectedProduct.name;