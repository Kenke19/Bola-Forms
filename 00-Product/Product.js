// Change Main Image
function changeImage(src) {
    document.getElementById('main-image').src = src;
  }

// Select Color
function selectColor(color) {
  const swatches = document.querySelectorAll('.swatch');
  swatches.forEach(swatch => swatch.classList.remove('selected'));
  document.querySelector(`.swatch.${color}`).classList.add('selected');
}
  
// Add to Cart Animation
function addToCart() {
  const button = document.querySelector('.add-to-cart');
  button.textContent = 'Added to Cart!';
  button.style.backgroundColor = '#4CAF50';
  setTimeout(() => {
    button.textContent = 'Add to Cart';
    button.style.backgroundColor = '#ff6f61';
  }, 3000);
}