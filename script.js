// Restaurant data

const restaurants = [
  {
    id: 'Mama T`s Kitchen',
    name: 'Mama T’s Kitchen',
    description: 'Comforting Nigerian favourites, made for sharing.',
    cuisine: 'Nigerian favourites',
    rating: '4.8',
    fee: 800,
    time: '25–35 min',
    hours: '9:00 AM – 9:00 PM',
    image: 'image/Mama T.png'
  },
  {
    id: 'The jollof pot',
    name: 'The Jollof Pot',
    description: 'Rice dishes, grills and street-food classics.',
    cuisine: 'Rice, grills & local dishes',
    rating: '4.7',
    fee: 700,
    time: '30–40 min',
    hours: '10:00 AM – 10:00 PM',
    image: 'image/pot.png'
  },
  {
    id: 'Taraba global-table',
    name: 'Taraba Global Table',
    description: 'A selection of familiar international favourites.',
    cuisine: 'International favourites',
    rating: '4.6',
    fee: 1000,
    time: '30–45 min',
    hours: '11:00 AM – 10:00 PM',
    image: 'image/Taraba Global table.png'
  }
];
 
// Food menu data

const dishes = [
  {
    name: 'Jollof rice & chicken',
    description: 'Smoky rice served with grilled chicken.',
    price: 4800,
    restaurant: 'Mama T’s Kitchen',
    cuisine: 'Nigerian',
    category: 'Rice',
    image: 'image/Jollof Rice with Grilled Chicken.jpg'
  },
  {
    name: 'Egusi & pounded yam',
    description: 'Rich melon seed soup with soft pounded yam.',
    price: 5200,
    restaurant: 'Mama T’s Kitchen',
    cuisine: 'Nigerian',
    category: 'Swallows',
    image: 'image/Fufu and Egusi soup.jpg'
  },
  {
    name: 'Spicy beef suya',
    description: 'Grilled beef with aromatic suya spices.',
    price: 3800,
    restaurant: 'The Jollof Pot',
    cuisine: 'Nigerian',
    category: 'Grills',
    image: 'image/spicy beef.jpg'
  },
  {
    name: 'Fried rice & chicken',
    description: 'Colourful fried rice with seasoned chicken.',
    price: 4500,
    restaurant: 'The Jollof Pot',
    cuisine: 'Nigerian',
    category: 'Rice',
    image: 'image/Nigerian Fried Rice.jpg'
  },
  {
    name: 'Margherita pizza',
    description: 'Tomato, cheese and basil on a crisp crust.',
    price: 6200,
    restaurant: 'The Global Table',
    cuisine: 'International',
    category: 'Pizza',
    image: 'image/Pizza Margherita.jpg'
  },
  {
    name: 'Classic beef burger',
    description: 'A juicy burger with fresh toppings.',
    price: 4800,
    restaurant: 'The Global Table',
    cuisine: 'International',
    category: 'Burgers',
    image: 'image/Classic burger.jpg'
  },
  {
    name: 'Creamy pasta',
    description: 'Pasta tossed in a smooth, savoury sauce.',
    price: 4500,
    restaurant: 'The Global Table',
    cuisine: 'International',
    category: 'Pasta',
    image: 'image/Creamy Pasta.jpg'
  },
  {
    name: 'Sushi selection',
    description: 'A selection of bite-sized sushi rolls.',
    price: 6500,
    restaurant: 'The Global Table',
    cuisine: 'International',
    category: 'Sushi',
    image: 'image/Sushi.jpg'
  }
 ];
// Additional menu items for the restaurant pages.
const moreDishes = [

  [
  'Ghana Jellof Rice',
  'Smoky tomato rice served with chicken, beef or fish.',
  5500,
  2,
  'Ghanaian',
  'image/ghana jellof.jpg'
],

[
  'Assorted Gari Foto',
  'Rice and beans served with traditional accompaniments.',
  4500,
  2,
  'Ghanaian',
  'image/Gari Foto.jpg'
],

[
  'Kenkey',
  'Fermented corn dough with pepper sauce and fried fish.',
  4500,
  2,
  'Ghanaian',
  'image/kenkey and pepper.jpg'
],

[
  'Banku and Okro',
  'Soft farmented cassava banku served with fresh okro soup.',
  3999,
  2,
  'Ghanaian',
  'image/banku and okro.jpg'
],

[
  'Braised rice',
  'Rice cooked in rich tomato stew, served with chicken, beef or fish.',
  4499,
  2,
  'Ghanaian',
  'image/assorted braised rice.jpg'
],

[
  'Red red',
  'Ghanaian bean stew served with fried plantain.',
  4000,
  2,
  'Ghanaian',
  'image/red red.jpg'
],

[
  'Rice ball and groundnut soup',
  'Soft rice balls served with thick, creamy Ghanaian groundnut soup and meat or fish.',
  5500,
  2,
  'Ghanaian',
  'image/rice ball with gnut.jpg'
],
  [
  'Coconut rice',
  'Fragrant rice cooked with coconut.',
  3600,
  0,
  'Rice',
  'image/COCONUT.jpg'
],

   [
  'Ofada rice',
  'Local rice with savoury pepper sauce.',
  4000,
  0,
  'Rice',
  'image/Ofada Rice and Sauce.jpg'
],

     [
  'White rice and stew',
  'White rice served with tomato stew.',
  3200,
  0,
  'Rice',
  'image/white rice and stew.jpg'
],

     [
  'Ogbono soup',
  'Ground ogbono seeds in a rich soup.',
  4000,
  0,
  'Soups',
  'image/Ogbono Soup is life.jpg'
],
     [
  'Okra soup',
  'Okra soup with a comforting savoury flavour.',
  3500,
  0,
  'Soups',
  'image/Okro Soup.jpg'
],
     [
  'Efo riro',
  'Tasty vegetable soup with peppers, palm oil, meat and fish.',
  3800,
  0,
  'Soups',
  'image/Efo Riro.jpg'
],
     [
  'Afang soup',
  'Leafy afang and waterleaf soup.',
  4200,
  0,
  'Soups',
  'image/Afang Soup.jpg'
],
   [
  'Edikang ikong',
  'Vegetable soup made with leafy greens.',
  4200,
  0,
  'Soups',
  'image/Edikaikong soup.jpg'
],
     [
  'Eba',
  'A serving of garri swallow.',
  1200,
  0,
  'Swallows',
  'image/eba.JPG'
],
     [
  'Fufu And Egusi Soup',
  'A soft serving of fermented cassava swallow.',
  3000,
  0,
  'Swallows',
  'image/Egusi F.jpg'
],
     [
  'Semovita',
  'A smooth semolina swallow.',
  3200,
  0,
  'Swallows',
  'image/semo.jpg'
],
     [
  'Pounded yam and vegetable soup',
  'A smooth portion of pounded yam served with a vegetable soup.',
  3200,
  0,
  'Swallows',
  'image/pounded yam.jpg'
],

     [
  'Moi moi',
  'Steamed savoury bean pudding.',
  2100,
  0,
  'Sides',
  'image/moi moi.jpg'
],
     [
  'Akara',
  'Golden fried bean cakes.',
  1500,
  0,
  'Snacks',
  'image/Akara.jpg'
],
     [
  'Yam porridge',
  'Yam simmered in a pepper sauce.',
  3000,
  0,
  'Meals',
  'image/Yam.jpg'
],
     [
  'Beans and plantain',
  'Stewed beans with fried plantain.',
  2800,
  0,
  'Meals',
  'image/beans with plantain.jpg'
],
     [
  'Abacgha',
  'cassava salad with traditional seasonings.',
  3000,
  0,
  'Meals',
  'image/abacha.jpg'
],
     [
  'Asun',
  'Peppery grilled goat meat.',
  5000,
  1,
  'Grills',
  'image/Asun.jpg'
],
     [
  'Grilled chicken',
  'Seasoned grilled chicken.',
  5000,
  1,
  'Grills',
  'image/Grilled Chicken.jpg'
],
     [
  'Peppered beef',
  'Tender beef in pepper sauce.',
  3600,
  1,
  'Grills',
  'image/Peppered Meat.jpg'
],
     [
  'Grilled fish',
  'Grilled fish with seasoning.',
  5000,
  1,
  'Grills',
  'image/Grilled Fish.jpg'
],
     [
  'Puff-puff',
  'Soft golden fried dough bites.',
  1200,
  1,
  'Grills',
  'image/Puffpuff.jpg'
],
     [
  'Meat pie',
  'A pastry filled with seasoned meat.',
  1800,
  1,
  'Snacks',
  'image/meat pie.jpg'
],
     [
  'Nkwobi',
  'Spiced cow foot in a savoury sauce.',
  4800,
  1,
  'Meals',
  'image/Nkwobi.jpg'
],
     [
  'Isi ewu',
  'Seasoned goat head served with sauce.',
  5500,
  1,
  'Meals',
  'image/Isiewu.jpg'
],
     [
  'Peppered soup',
  'A warming spiced meat broth.',
  4000,
  1,
  'Soups',
  'image/Pepper soup.jpg'
],
     [
  'Bole and fish',
  'Roasted plantain with fish.',
  3500,
  1,
  'Meals',
  'image/bole and Fish.jpg'
],

  ['Zobo', 'A refreshing hibiscus drink.', 1000, 1, 'Drinks', 'image/Zobo.jpg'],
     [
  'Kunu',
  'A traditional grain-based drink.',
  1000,
  1,
  'Drinks',
  'image/kuku.jpg'
],
     [
  'Chapman',
  'A fruity Nigerian mocktail.',
  1800,
  1,
  'Drinks',
  'image/Chapman.jpg'
],
     [
  'Fresh fruit Juice',
  'A refreshing fruit juice.',
  1500,
  1,
  'Drinks',
  'image/fresh fruit juice.jpg'
],
     [
  'Lasagna',
  'Layered pasta with savoury sauce.',
  5800,
  2,
  'Italian',
  'image/Lasagna.jpg'
],

[
  'Risotto',
  'Creamy Italian-style rice.',
  5600,
  2,
  'Italian',
  'image/Risotto.jpg'
],

[
  'French Fries',
  'Golden fried potato chips.',
  4500,
  2,
  'American',
  'image/French Fries.jpg'
],
     [
  'Sandwich',
  'A freshly prepared sandwich.',
  5000,
  2,
  'American',
  'image/Sandwiches.jpg'
],
     [
  'Fried chicken',
  'Crisp seasoned chicken pieces.',
  5200,
  2,
  'American',
  'image/Fried Chicken.jpg'
],
  ['Noodles', 'Seasoned noodles with vegetables.', 3500, 2, 'Asian', 'image/Noodles.jpg'],
     [
  'Stir-fried rice',
  'Rice stir-fried with vegetables.',
  3798,
  2,
  'Asian',
  'image/stir fried rice.jpg'
],
    [
  'Shawarma',
  'A wrapped filling with sauce and vegetables.',
  5500,
  2,
  'International',
  'image/shawarma.jpg'
],
    [
  'Tacos',
  'Filled tortillas with fresh toppings.',
  4700,
  2,
  'International',
  'image/Tacos.jpg'
],
    [
  'Salad',
  'A fresh mix of vegetables.',
  4200,
  2,
  'International',
  'image/salad.jpg'
],

  ].map(([
  name,
  description,
  price,
  restaurantIndex,
  category,
  imagePath
]) => ({
  name,
  description,
  price,
  category,

  restaurant: restaurants[restaurantIndex].name,

  image: imagePath || `image/${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}.jpg`
}));


// =========================================
// 3. Search and filtering
// =========================================
if (document.querySelector('#dish-list')) {
let selectedCategory = 'All';
let searchText = '';

const dishList = document.querySelector('#dish-list');

const restaurantList = document.querySelector(
  '#restaurant-list'
);

const searchStatus = document.querySelector('#search-status');
const searchInput = document.querySelector('#search-input');

const categoryButtons = document.querySelectorAll('.category');


function formatPrice(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}


function renderRestaurants() {
  restaurantList.innerHTML = restaurants.map(restaurant => `
    <article class="restaurant-card">

      <div
        class="restaurant-photo photo"
        data-placeholder="${restaurant.name}"
      >
        <img
          src="${restaurant.image}"
          alt="Food from ${restaurant.name}"
          loading="lazy"
        >
      </div>

      <div class="restaurant-info">

        <h3>${restaurant.name}</h3>

        <p>${restaurant.cuisine}</p>

        <span class="restaurant-meta">
          ★ ${restaurant.rating}
          &nbsp; · &nbsp;
          ${restaurant.time}
          &nbsp; · &nbsp;
          ${formatPrice(restaurant.fee)} delivery
        </span>

        <br>

        <a
          class="text-link"
          href="restaurant-details.html?id=${restaurant.id}"
        >
          View menu ↗
        </a>

      </div>

    </article>
  `).join('');

  hideMissingImages(restaurantList);
}


function renderDishes() {
  const results = dishes.filter(dish => {
    const matchesCategory =
      selectedCategory === 'All' ||
      dish.cuisine === selectedCategory ||
      dish.category === selectedCategory;

    const details = `
      ${dish.name}
      ${dish.restaurant}
      ${dish.cuisine}
      ${dish.category}
    `.toLowerCase();

    return matchesCategory && details.includes(searchText);
  });

  dishList.innerHTML = results.map(dish => `
    <article class="dish-card">

      <div
        class="dish-photo photo"
        data-placeholder="${dish.name}"
      >
        <img
          src="${dish.image}"
          alt="${dish.name}"
          loading="lazy"
        >
      </div>

      <div class="dish-info">

        <h3>${dish.name}</h3>

        <p>${dish.description}</p>

        <span class="dish-price">
          ${formatPrice(dish.price)}
        </span>

        <span class="dish-restaurant">
          ${dish.restaurant}
        </span>
        <button
  class="add-to-cart"
  type="button"
  data-add-name="${dish.name}"
  data-add-restaurant="${dish.restaurant}"
>
  Add to cart
</button>

      </div>

    </article>
  `).join('');

  if (results.length === 0) {
    searchStatus.textContent =
      'No dishes found. Try another search or category.';
  } else if (searchText) {
    searchStatus.textContent =
      `${results.length} dish(es) found.`;
  } else {
    searchStatus.textContent = '';
  }

  hideMissingImages(dishList);
}


function selectCategory(category) {
  selectedCategory = category;

  categoryButtons.forEach(button => {
    const active = button.dataset.filter === category;

    button.classList.toggle('active', active);

    button.setAttribute(
      'aria-pressed',
      String(active)
    );
  });

  renderDishes();
}


categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectCategory(button.dataset.filter);
  });
});


document.querySelector('#food-search').addEventListener(
  'submit',
  event => {
    event.preventDefault();

    searchText = searchInput.value.trim().toLowerCase();

    selectCategory('All');

    document.querySelector('#dishes').scrollIntoView({
      behavior: 'smooth'
    });
  }
);


searchInput.addEventListener('input', () => {
  searchText = searchInput.value.trim().toLowerCase();
  selectCategory('All');
});


document.querySelectorAll('[data-cuisine]').forEach(link => {
  link.addEventListener('click', () => {
    searchText = '';
    searchInput.value = '';

    selectCategory(link.dataset.cuisine);
  });
});

const loginDialog = document.querySelector('#login-dialog');
const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');

const nameField = document.querySelector('#name-field');
const customerName = document.querySelector('#customer-name');
const password = document.querySelector('#password');

let isSignUp = false;


function setAuthMode(signUp) {
  isSignUp = signUp;

  // Clear the form when switching modes.
  loginForm.reset();

  loginMessage.hidden = true;

  // Show the name field only for sign-up.
  nameField.hidden = !signUp;
  customerName.required = signUp;

  password.autocomplete = signUp
    ? 'new-password'
    : 'current-password';

  document.querySelector('#login-title').textContent = signUp
    ? 'Join TARABAEat.'
    : 'Good to see you.';

  document.querySelector('#login-description').textContent = signUp
    ? 'Create an account to find your favourite meals.'
    : 'Log in to find your next favourite meal.';

  document.querySelector('#submit-login').textContent = signUp
    ? 'Create account'
    : 'Log in';

  document.querySelector('#switch-label').textContent = signUp
    ? 'Already have an account?'
    : "Don't have an account?";

  document.querySelector('#switch-auth').textContent = signUp
    ? 'Log in'
    : 'Sign up';
}


// Open the pop-up.
document.querySelector('#open-login').addEventListener(
  'click',
  () => {
    setAuthMode(false);
    loginDialog.showModal();
  }
);


// Close the pop-up with the X button.
document.querySelector('#close-login').addEventListener(
  'click',
  () => {
    loginDialog.close();
  }
);


// Close the pop-up when the background is clicked.
loginDialog.addEventListener('click', event => {
  if (event.target === loginDialog) {
    loginDialog.close();
  }
});


// Switch between Log in and Sign up.
document.querySelector('#switch-auth').addEventListener(
  'click',
  () => {
    setAuthMode(!isSignUp);
  }
);


// Show a preview message when the form is submitted.
loginForm.addEventListener('submit', event => {
  event.preventDefault();

  password.value = '';

  loginMessage.textContent = isSignUp
    ? 'Sign-up is a preview. No account has been created yet.'
    : 'Login is a preview. No account has been signed in.';

  loginMessage.hidden = false;
});


// Google sign-in preview.
document.querySelector('#google-login').addEventListener(
  'click',
  () => {
    loginMessage.textContent =
      'Google sign-in will be connected in a later phase.';

    loginMessage.hidden = false;
  }
);


// Clear the password when the pop-up closes.
loginDialog.addEventListener('close', () => {
  password.value = '';
});

// Hide an image if its file has not been added yet.
function hideMissingImages(container) {
  container.querySelectorAll('img').forEach(image => {

    image.addEventListener('error', () => {
      image.hidden = true;
    });

    if (image.complete && image.naturalWidth === 0) {
      image.hidden = true;
    }

  });
}


// Move the navigation underline while scrolling.
const navigationLinks = document.querySelectorAll('.nav-links a');

const sections = Array.from(
  navigationLinks,
  link => document.querySelector(link.getAttribute('href'))
);


function updateActiveLink() {
  const headerHeight =
    document.querySelector('.site-header').offsetHeight;

  const marker = window.scrollY + headerHeight + 100;

  let activeIndex = 0;

  sections.forEach((section, index) => {
    if (section && section.offsetTop <= marker) {
      activeIndex = index;
    }
  });

  const atBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 5;

  if (atBottom) {
    activeIndex = sections.length - 1;
  }

  navigationLinks.forEach((link, index) => {
    const active = index === activeIndex;

    link.classList.toggle('active', active);

    if (active) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}


window.addEventListener('scroll', updateActiveLink, {
  passive: true
});


// Display the homepage content.
hideMissingImages(document);
renderRestaurants();
renderDishes();
updateActiveLink();
}
// =========================================
// Restaurant discovery and menus — Phase 3
// =========================================

function money(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}


// Show a placeholder if an image has not been added.
function hideUnavailableImages(container) {
  container.querySelectorAll('img').forEach(image => {

    image.addEventListener('error', () => {
      image.hidden = true;
    });

    if (image.complete && image.naturalWidth === 0) {
      image.hidden = true;
    }

  });
}


// Create one restaurant card.
function restaurantCard(restaurant) {
  return `
    <article class="place-card">

      <div
        class="place-photo photo"
        data-placeholder="${restaurant.name}"
      >
        <img
          src="${restaurant.image}"
          alt="Food from ${restaurant.name}"
        >
      </div>

      <div class="place-info">

        <h2>${restaurant.name}</h2>

        <p>${restaurant.cuisine}</p>

        <div class="place-meta">
          <span>★ ${restaurant.rating}</span>
          <span>${restaurant.time}</span>
          <span>${money(restaurant.fee)} delivery</span>
        </div>

        <a
          class="menu-link"
          href="restaurant-details.html?id=${restaurant.id}"
        >
          View menu ↗
        </a>

      </div>

    </article>
  `;
}


// Display the list of restaurants.
const directoryList = document.querySelector('#directory-list');

if (directoryList) {
  directoryList.innerHTML = restaurants
    .map(restaurantCard)
    .join('');

  hideUnavailableImages(directoryList);
}


// Create one food card.
function dishCard(dish) {
  return `
    <article class="menu-card">

      <div
        class="menu-photo photo"
        data-placeholder="${dish.name}"
      >
        <img
          src="${dish.image}"
          alt="${dish.name}"
          loading="lazy"
        >
      </div>

      <div class="menu-info">

        <h3>${dish.name}</h3>

        <p>${dish.description}</p>

        <span class="menu-price">
          ${money(dish.price)}
        </span>

        <span class="availability">
          Available. 
        </span>
        <button
  class="add-to-cart"
  type="button"
  data-add-name="${dish.name}"
  data-add-restaurant="${dish.restaurant}"
>
  Add to cart
</button>

      </div>

    </article>
  `;
}


// Display the selected restaurant and its menu.
const detailArea = document.querySelector('#restaurant-details');

if (detailArea) {

  const restaurantId = new URLSearchParams(
    window.location.search
  ).get('id');

  const restaurant = restaurants.find(item => {
    return item.id === restaurantId;
  });

  if (!restaurant) {

    detailArea.innerHTML = `
      <h1>Restaurant not found.</h1>

      <p class="directory-intro">
        Choose a kitchen from our list.
      </p>

      <a class="menu-link" href="restaurants.html">
        ← View restaurants
      </a>
    `;

  } else {

    // Combine the original dishes with the extra dishes.
    const menu = [...dishes, ...moreDishes].filter(dish => {
      return dish.restaurant === restaurant.name;
    });

    // Find the different categories in this menu.
    const menuCategories = [
      ...new Set(menu.map(dish => dish.category))
    ];

    detailArea.innerHTML = `

      <div
        class="detail-cover photo"
        data-placeholder="${restaurant.name}"
      >
        <img
          src="${restaurant.image}"
          alt="Food from ${restaurant.name}"
        >
      </div>

      <p class="eyebrow">${restaurant.cuisine}</p>

      <h1>${restaurant.name}</h1>

      <p class="detail-description">
        ${restaurant.description}
      </p>

      <div class="place-meta">
        <span>★ ${restaurant.rating}</span>
        <span>${restaurant.time}</span>
        <span>${money(restaurant.fee)} delivery</span>
        <span>Hours: ${restaurant.hours}</span>
      </div>

      <p class="directory-note">
        Restaurant information and prices.
      </p>

      ${menuCategories.map(category => `

        <section class="menu-section">

          <h2>${category}</h2>

          <div class="menu-grid">
            ${menu
              .filter(dish => dish.category === category)
              .map(dishCard)
              .join('')}
          </div>

        </section>

      `).join('')}
    `;

    document.title = restaurant.name + ' | TARABAEat';

    hideUnavailableImages(detailArea);
  }

}
// Phase 4: Search, filter and sort restaurants

if (document.querySelector('#directory-search') && directoryList) {
  const search = document.querySelector('#directory-search');

  const cuisine = document.querySelector('#filter-cuisine');

  const price = document.querySelector('#filter-price');

  const rating = document.querySelector('#filter-rating');

  const time = document.querySelector('#filter-time');

  const sort = document.querySelector('#sort-restaurants');

  const status = document.querySelector('#directory-status');

  const controls = [
    search,
    cuisine,
    price,
    rating,
    time,
    sort
  ];

  // Combine the original dishes with the extra menu items.
  const allDishes = [...dishes, ...moreDishes];

  function updateDirectory() {
    const query = search.value.trim().toLowerCase();

    const results = restaurants.filter(restaurant => {
      // Find the dishes belonging to this restaurant.
      const menu = allDishes.filter(dish => {
        return dish.restaurant === restaurant.name;
      });

      // Find the cuisine type for this restaurant.
      const cuisineTypes = dishes
        .filter(dish => {
          return dish.restaurant === restaurant.name;
        })
        .map(dish => dish.cuisine);

      // Combine restaurant and dish names for searching.
      const searchText = [
        restaurant.name,
        restaurant.cuisine,
        ...menu.map(dish => dish.name)
      ]
        .join(' ')
        .toLowerCase();

      const lowestPrice = Math.min(
        ...menu.map(dish => dish.price)
      );

      // Use the highest number in the delivery-time range.
      const deliveryNumbers =
        restaurant.time.match(/\d+/g) || [];

      const longestTime = Math.max(
        ...deliveryNumbers.map(Number)
      );

      const matchesSearch = searchText.includes(query);

      const matchesCuisine =
        cuisine.value === 'all' ||
        cuisineTypes.includes(cuisine.value);

      const matchesPrice =
        price.value === 'all' ||
        lowestPrice <= Number(price.value);

      const matchesRating =
        rating.value === 'all' ||
        Number(restaurant.rating) >= Number(rating.value);

      const matchesTime =
        time.value === 'all' ||
        longestTime <= Number(time.value);

      return (
        matchesSearch &&
        matchesCuisine &&
        matchesPrice &&
        matchesRating &&
        matchesTime
      );
    });

    // Sort by highest rating.
    if (sort.value === 'rating') {
      results.sort((a, b) => {
        return Number(b.rating) - Number(a.rating);
      });
    }

    // Sort by lowest delivery fee.
    if (sort.value === 'fee') {
      results.sort((a, b) => {
        return a.fee - b.fee;
      });
    }

    // Display the matching restaurant cards.
    directoryList.innerHTML = results
      .map(restaurantCard)
      .join('');

    if (results.length > 0) {
      const word =
        results.length === 1 ? 'restaurant' : 'restaurants';

      status.textContent =
        `${results.length} ${word} found.`;
    } else {
      status.textContent =
        'No restaurants found. Try changing or clearing your filters.';
    }

    hideUnavailableImages(directoryList);
  }

  // Update the results whenever a control changes.
  controls.forEach(control => {
    control.addEventListener('input', updateDirectory);
  });

  // Reset all controls.
  document
    .querySelector('#clear-filters')
    .addEventListener('click', () => {
      search.value = '';

      [cuisine, price, rating, time].forEach(control => {
        control.value = 'all';
      });

      sort.value = 'popular';

      updateDirectory();

      search.focus();
    });

  // Show the initial results.
  updateDirectory();
}
// Shopping cart and simulated checkout

(function () {
  const storageKey = 'TARABAEat-cart-v1';

  const menu = [...dishes, ...moreDishes];

  const cartContent = document.querySelector('#cart-content');

  const checkoutContent =
    document.querySelector('#checkout-content');

  let cart = [];

  // Find a dish using its name and restaurant.
  function findDish(name, restaurant) {
    return menu.find(dish => {
      return (
        dish.name === name &&
        dish.restaurant === restaurant
      );
    });
  }

  // Load saved cart items from the browser.
  try {
    const saved = JSON.parse(
      localStorage.getItem(storageKey) || '[]'
    );

    if (Array.isArray(saved)) {
      cart = saved.filter(item => {
        return (
          item &&
          findDish(item.name, item.restaurant) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0 &&
          item.quantity <= 99
        );
      });

      if (cart.length) {
        cart = cart.filter(item => {
          return item.restaurant === cart[0].restaurant;
        });
      }
    }
  } catch (error) {
    cart = [];
  }

  // Save cart items and update the number in the navigation.
  function saveCart() {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(cart)
      );
    } catch (error) {
      showCartMessage(
        'Cart could not be saved in this browser.'
      );
    }

    updateCount();
  }

  function updateCount() {
    const total = cart.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);

    document
      .querySelectorAll('[data-cart-count]')
      .forEach(count => {
        count.textContent = total;
      });
  }

  // Show a short message when a meal is added.
  function showCartMessage(message) {
    let notice = document.querySelector('#cart-message');

    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'cart-message';
      notice.className = 'cart-message';
      notice.setAttribute('role', 'status');

      document.body.appendChild(notice);
    }

    notice.textContent = message;

    clearTimeout(showCartMessage.timer);

    showCartMessage.timer = setTimeout(() => {
      notice.textContent = '';
    }, 3500);
  }

  // Calculate subtotal, delivery fee and total.
  function getTotals() {
    const subtotal = cart.reduce((sum, item) => {
      const dish = findDish(item.name, item.restaurant);

      return sum + dish.price * item.quantity;
    }, 0);

    const restaurant = restaurants.find(item => {
      return cart.length && item.name === cart[0].restaurant;
    });

    const delivery = restaurant ? restaurant.fee : 0;

    return {
      subtotal,
      delivery,
      total: subtotal + delivery
    };
  }

  function totalsMarkup() {
    const totals = getTotals();

    return `
      <div class="cart-totals">
        <div>
          <span>Subtotal</span>
          <strong>${money(totals.subtotal)}</strong>
        </div>

        <div>
          <span>Delivery</span>
          <strong>${money(totals.delivery)}</strong>
        </div>

        <div class="cart-total">
          <span>Total</span>
          <span>${money(totals.total)}</span>
        </div>
      </div>
    `;
  }

  // Add a dish to the cart.
  function addDish(name, restaurant) {
    if (!findDish(name, restaurant)) {
      return;
    }

    // One restaurant is allowed per checkout.
    if (
      cart.length &&
      cart[0].restaurant !== restaurant
    ) {
      const replace = window.confirm(
        `Your cart contains food from ${cart[0].restaurant}. ` +
        `Replace it with food from ${restaurant}? ` +
        `Select Cancel to keep your cart.`
      );

      if (!replace) {
        return;
      }

      cart = [];
    }

    const existing = cart.find(item => {
      return (
        item.name === name &&
        item.restaurant === restaurant
      );
    });

    if (existing) {
      if (existing.quantity >= 99) {
        showCartMessage('Maximum quantity is 99.');
        return;
      }

      existing.quantity += 1;
    } else {
      cart.push({
        name,
        restaurant,
        quantity: 1
      });
    }

    saveCart();

    showCartMessage(`${name} added to your cart.`);
  }

  // Display the shopping cart.
  function renderCart() {
    if (!cartContent) {
      return;
    }

    if (!cart.length) {
      cartContent.innerHTML = `
        <section class="cart-panel cart-empty">
          <h2>Your cart is empty.</h2>

          <p class="cart-muted">
            Find something delicious to get started.
          </p>

          <a class="primary-button" href="restaurants.html">
            Browse restaurants ↗
          </a>
        </section>
      `;

      return;
    }

    cartContent.innerHTML = `
      <div class="cart-layout">

        <section class="cart-panel">
          <h2>${cart[0].restaurant}</h2>

          ${cart.map((item, index) => {
            const dish = findDish(
              item.name,
              item.restaurant
            );

            return `
              <article class="cart-item">
                <div>
                  <h3>${dish.name}</h3>

                  <p>${money(dish.price)} each</p>

                  <strong>
                    ${money(dish.price * item.quantity)}
                  </strong>
                </div>

                <div>
                  <div class="quantity-actions">
                    <button
                      type="button"
                      data-cart-action="decrease"
                      data-index="${index}"
                      aria-label="Decrease ${dish.name} quantity"
                    >
                      −
                    </button>

                    <span>${item.quantity}</span>

                    <button
                      type="button"
                      data-cart-action="increase"
                      data-index="${index}"
                      aria-label="Increase ${dish.name} quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    class="cart-remove"
                    type="button"
                    data-cart-action="remove"
                    data-index="${index}"
                  >
                    Remove
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <p>
            <button
              class="cart-secondary"
              type="button"
              data-cart-action="clear"
            >
              Clear cart
            </button>
          </p>
        </section>

        <aside class="cart-panel">
          <h2>Order summary</h2>

          ${totalsMarkup()}

          <a class="primary-button" href="checkout.html">
            Go to checkout ↗
          </a>

          <p class="cart-muted">
            proceed to place order.
          </p>
        </aside>

      </div>
    `;
  }

  // Display the checkout form.
  function renderCheckout() {
    if (!checkoutContent) {
      return;
    }

    if (!cart.length) {
      checkoutContent.innerHTML = `
        <section class="cart-panel cart-empty">
          <h2>Your cart is empty.</h2>

          <p class="cart-muted">
            Add a meal before checking out.
          </p>

          <a class="primary-button" href="restaurants.html">
            Browse restaurants ↗
          </a>
        </section>
      `;

      return;
    }

    checkoutContent.innerHTML = `
      <div class="cart-layout">

        <section class="cart-panel">
          <h2>Delivery details</h2>

          <p class="checkout-note">
            Please Enter Information Correctly.
          </p>

          <form id="checkout-form" class="checkout-form">

            <label for="checkout-name">Name</label>
            <input
              id="checkout-name"
              name="name"
              autocomplete="off"
              required
            >

            <label for="checkout-phone">Phone number</label>
            <input
              id="checkout-phone"
              name="phone"
              type="tel"
              autocomplete="off"
              required
            >

            <label for="checkout-address">
              Delivery address
            </label>

            <textarea
              id="checkout-address"
              name="address"
              autocomplete="off"
              required
            ></textarea>

            <label for="checkout-instructions">
              Delivery instructions (optional)
            </label>

            <textarea
              id="checkout-instructions"
              name="instructions"
              autocomplete="off"
            ></textarea>

            <label for="checkout-payment">
              Payment method
            </label>

            <select id="checkout-payment" name="payment">
              <option>Cash on delivery </option>
              <option>Bank transfer </option>
              <option>Paystack </option>
            </select>

            <button class="primary-button" type="submit">
              Place Order ↗
            </button>
          </form>
        </section>

        <aside class="cart-panel">
          <h2>Order summary</h2>

          <p class="cart-muted">${cart[0].restaurant}</p>

          ${cart.map(item => {
            return `<p>${item.quantity} × ${item.name}</p>`;
          }).join('')}

          ${totalsMarkup()}
        </aside>

      </div>
    `;
  }

  // Handle add, increase, decrease, remove and clear buttons.
  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add-name]');

    if (addButton) {
      addDish(
        addButton.dataset.addName,
        addButton.dataset.addRestaurant
      );
    }

    const actionButton =
      event.target.closest('[data-cart-action]');

    if (!actionButton || !cartContent) {
      return;
    }

    const action = actionButton.dataset.cartAction;

    const index = Number(actionButton.dataset.index);

    if (action === 'clear') {
      const confirmed = window.confirm(
        'Clear all items from your cart?'
      );

      if (!confirmed) {
        return;
      }

      cart = [];
    } else if (cart[index]) {
      if (action === 'increase') {
        cart[index].quantity = Math.min(
          cart[index].quantity + 1,
          99
        );
      }

      if (action === 'decrease') {
        cart[index].quantity -= 1;
      }

      if (
        action === 'remove' ||
        cart[index].quantity <= 0
      ) {
        cart.splice(index, 1);
      }
    }

    saveCart();
    renderCart();
  });

  // Complete a simulated order.
  if (checkoutContent) {
    checkoutContent.addEventListener('submit', event => {
      if (event.target.id !== 'checkout-form') {
        return;
      }

      event.preventDefault();

      if (!cart.length) {
        renderCheckout();
        return;
      }

      const total = getTotals().total;

      cart = [];
      saveCart();

      checkoutContent.innerHTML = `
        <section
          class="cart-panel cart-empty"
          role="status"
        >
          <p class="eyebrow">Order COMPLETE</p>

          <h2>Order placed!</h2>

          <p>
            Your order total was ${money(total)}.
          </p>

          <a class="primary-button" href="restaurants.html">
            Browse restaurants ↗
          </a>
        </section>
      `;
    });
  }

  updateCount();
  renderCart();
  renderCheckout();
})();