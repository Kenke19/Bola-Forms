document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        alert(`${productName} added to cart!`);
    
    });
});
// FLASH BUTTON
const buttons = document.querySelectorAll('.flashButton');

buttons.forEach(button => {
    const originalColor = window.getComputedStyle(button).backgroundColor;

    setInterval(()=> {
        button.style.backgroundColor = button.style.backgroundColor === 'red'? originalColor:'red';
    },1000);
});

// ADD TO CART 
let cartCount = 0;

function addToCart(){
    cartCount++;
    document.getElementById("cartCounter").innerText = cartCount;
    console.log('Cart count updated:', cartCount);
}
addToCart();