const books = [
  { title: 'The Midnight Library', author: 'Matt Haig', price: '$14.99' },
  { title: 'Atomic Habits', author: 'James Clear', price: '$12.49' },
  { title: 'Project Hail Mary', author: 'Andy Weir', price: '$16.00' },
  { title: 'Pachinko', author: 'Min Jin Lee', price: '$13.75' },
  { title: 'Educated', author: 'Tara Westover', price: '$11.95' },
  { title: 'Dune', author: 'Frank Herbert', price: '$10.99' }
];

const grid = document.getElementById('book-grid');

books.forEach((book) => {
  const card = document.createElement('article');
  card.className = 'book-card';
  card.innerHTML = `
    <h4>${book.title}</h4>
    <p>by ${book.author}</p>
    <p class="price">${book.price}</p>
  `;
  grid.appendChild(card);
});

const form = document.getElementById('newsletter-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();

  if (!email || !email.includes('@')) {
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  message.textContent = `Thanks for subscribing, ${email}!`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
