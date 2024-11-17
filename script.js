document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el clic en los botones de búsqueda y carrito
    const handleIconClick = (iconName) => {
        alert(`Has hecho clic en el icono de ${iconName}. Esta funcionalidad aún no está implementada.`);
    };

    // Agregar event listeners a los botones de búsqueda y carrito
    const searchButton = document.querySelector('button[aria-label="Search"]');
    const cartButton = document.querySelector('button[aria-label="Cart"]');

    searchButton.addEventListener('click', () => handleIconClick('búsqueda'));
    cartButton.addEventListener('click', () => handleIconClick('carrito'));

    // Función para manejar el hover en las imágenes de productos
    const handleProductHover = (event) => {
        const img = event.currentTarget.querySelector('img');
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = event.type === 'mouseenter' ? 'scale(1.05)' : 'scale(1)';
    };

    // Agregar event listeners a los productos
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseenter', handleProductHover);
        product.addEventListener('mouseleave', handleProductHover);
    });
});



//ADIDAS1



document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const sizeBtns = document.querySelectorAll('.size-btn');
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQuantity');
    const increaseBtn = document.getElementById('increaseQuantity');
    const addToCartForm = document.getElementById('addToCartForm');

    // Image gallery
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.getAttribute('data-image');
        });
    });

    // Size selection
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Quantity adjustment
    decreaseBtn.addEventListener('click', function() {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    // Form submission
    addToCartForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedSize = document.querySelector('.size-btn.selected');
        if (!selectedSize) {
            alert('Por favor, selecciona una talla.');
            return;
        }
        const size = selectedSize.getAttribute('data-size');
        const quantity = quantityInput.value;
        alert(`Agregado al carrito: ${quantity} ROLEX TEE(s) de talla ${size}`);
    });

    // Buy now button
    document.querySelector('.buy-now').addEventListener('click', function() {
        const selectedSize = document.querySelector('.size-btn.selected');
        if (!selectedSize) {
            alert('Por favor, selecciona una talla.');
            return;
        }
        const size = selectedSize.getAttribute('data-size');
        const quantity = quantityInput.value;
        alert(`Comprando ahora: ${quantity} ROLEX TEE(s) de talla ${size}`);
    });
});


let indiceActual = 0;
const slides = document.querySelectorAll('.carrusel__slide');
const totalSlides = slides.length;

function moverSlide(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) {
        indiceActual = totalSlides - 1;
    } else if (indiceActual >= totalSlides) {
        indiceActual = 0;
    }
    document.getElementById('contenedorCarrusel').style.transform = `translateX(-${indiceActual * 100}%)`;
}



