const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    price: '$29.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=1',
    image2: 'https://source.unsplash.com/random/200x200?sig=11',
    discount: true
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    price: '$39.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=2',
    image2: 'https://source.unsplash.com/random/200x200?sig=12',
    discount: false
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is product 3',
    price: '$49.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=3',
    image2: 'https://source.unsplash.com/random/200x200?sig=13',
    discount: true
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is product 4',
    price: '$59.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=4',
    image2: 'https://source.unsplash.com/random/200x200?sig=14',
    discount: false
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is product 5',
    price: '$69.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=5',
    image2: 'https://source.unsplash.com/random/200x200?sig=15',
    discount: false
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is product 6',
    price: '$79.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=6',
    image2: 'https://source.unsplash.com/random/200x200?sig=16',
    discount: true
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is product 7',
    price: '$89.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=7',
    image2: 'https://source.unsplash.com/random/200x200?sig=17',
    discount: false
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is product 8',
    price: '$99.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=8',
    image2: 'https://source.unsplash.com/random/200x200?sig=18',
    discount: true
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is product 9',
    price: '$109.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=9',
    image2: 'https://source.unsplash.com/random/200x200?sig=19',
    discount: false
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'This is product 10',
    price: '$119.99',
    reviews: '★★★★☆',
    image1: 'https://source.unsplash.com/random/200x200?sig=10',
    image2: 'https://source.unsplash.com/random/200x200?sig=20',
    discount: false
  },
];

const productContainer = document.getElementById('product-container');
const showMoreContainer = document.getElementById('show-more-container');
const showMoreButton = document.getElementById('show-more');

let productsToShow = 4;

function renderProducts() {
  productContainer.innerHTML = '';
  for (let i = 0; i < productsToShow && i < products.length; i++) {
    const product = products[i];
    const productItem = `
      <div class="product-item">
        <div class="product-image">
          <div class="best-seller-badge">Best Seller</div>
          ${product.discount ? '<div class="discount-badge">15% Off</div>' : ''}
          <img src="${product.image1}" class="primary w-full h-48 object-cover rounded-lg" alt="${product.name}">
          <img src="${product.image2}" class="secondary w-full h-48 object-cover rounded-lg" alt="${product.name}">
        </div>
        <h2 class="text-lg font-semibold mt-4">${product.name}</h2>
        <p class="text-gray-600">${product.description}</p>
        <p class="text-yellow-500">${product.reviews} <span class="text-gray-600 italic text-sm">(1234 reviews)</span></p>
        <p class="text-gray-800 font-bold">${product.price}</p>
      </div>
    `;
    productContainer.innerHTML += productItem;
  }
}

function handleResize() {
  if (window.innerWidth <= 640) {
    productsToShow = 4;
    showMoreContainer.style.display = 'block';
  } else {
    productsToShow = products.length;
    showMoreContainer.style.display = 'none';
  }
  renderProducts();
}

showMoreButton.addEventListener('click', () => {
  productsToShow = products.length;
  renderProducts();
  showMoreButton.style.display = 'none';
});

window.addEventListener('resize', handleResize);

document.addEventListener('DOMContentLoaded', () => {
  handleResize();
});