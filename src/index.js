// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const calcProduct = price.innerText * quantity.value;
  const getSubTotal = product.querySelector('.subtotal span');
  getSubTotal.innerText = calcProduct;
  return calcProduct;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  const productsArray = [...products] // converting to an array
  // use maop to get the return from the funtion updateSubtotal() into an array
  const subtotalValuesArray = productsArray.map(product => updateSubtotal(product));
  
  // ITERATION 3
  //... your code goes here
  //reduce to calc the total
  const totalValue = subtotalValuesArray.reduce((sum, subtotal) => sum + subtotal, 0);
  document.querySelector('#total-value span').innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const getParent = target.parentNode.parentNode
  const cloneProduct = getParent.cloneNode(true);
  
  const resetQuantity = cloneProduct.querySelector('.quantity input')
  resetQuantity.value = 0

  const getTableBody = target.parentNode.parentNode.parentNode


  getParent.parentNode.removeChild(getParent)
  getTableBody.appendChild(cloneProduct)

  // add event listener to listen to the recently appended <tr>
  // or else the new products will not be identified by the click event listener within the 'load' event listener

  const removeNewButtons = document.querySelectorAll('.btn-remove');
  removeNewButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  })

  calculateAll()
}
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  })
  //... your code goes here
});
