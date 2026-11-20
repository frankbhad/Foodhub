const projectUrl = 'https://ferrncngjccdkgaphnyk.supabase.co';
const publishableKey = 'sb_publishable_6ou-cwhfsXPuEEh5j76bVQ_h-s8niMn';

const supabaseClient = window.supabase.createClient(
  projectUrl,
  publishableKey
);

// Login elements
const loginForm = document.querySelector('#admin-login-form');
const loginSection = document.querySelector('#login-section');
const signedInSection = document.querySelector('#signed-in-section');
const signedInMessage = document.querySelector('#signed-in-message');
const adminMessage = document.querySelector('#admin-message');
const signOutButton = document.querySelector('#sign-out');

// Food management elements
const foodForm = document.querySelector('#food-form');
const foodList = document.querySelector('#food-list');
const foodCount = document.querySelector('#food-count');
const formTitle = document.querySelector('#form-title');
const saveButton = document.querySelector('#save-food');
const cancelEditButton = document.querySelector('#cancel-edit');
const searchInput = document.querySelector('#admin-search');

let editingId = null;
let allFoods = [];

function showMessage(message) {
  adminMessage.textContent = message;
}

function updateLoginView(session) {
  const signedIn = Boolean(session);

  loginSection.hidden = signedIn;
  signedInSection.hidden = !signedIn;

  if (signedIn) {
    signedInMessage.textContent =
      `Signed in as ${session.user.email}.`;
  } else {
    signedInMessage.textContent = '';
    allFoods = [];
    foodList.replaceChildren();
    foodCount.textContent = '';
    searchInput.value = '';
    resetFoodForm();
  }
}

// Sign in
loginForm.addEventListener('submit', async event => {
  event.preventDefault();

  showMessage('');

  const email = document
    .querySelector('#admin-email')
    .value
    .trim();

  const passwordField = document.querySelector('#admin-password');

  try {
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password: passwordField.value
    });

    passwordField.value = '';

    if (error) {
      showMessage('Could not sign in. Check your email and password.');
    }
  } catch (error) {
    passwordField.value = '';
    showMessage('Could not connect. Check your internet connection.');
  }
});

// Sign out
signOutButton.addEventListener('click', async () => {
  const { error } = await supabaseClient.auth.signOut({
    scope: 'local'
  });

  if (error) {
    showMessage('Could not sign out. Please try again.');
  } else {
    showMessage('');
  }
});

// Reset the form after adding or editing
function resetFoodForm() {
  editingId = null;
  foodForm.reset();

  formTitle.textContent = 'Add food';
  saveButton.textContent = 'Add food';
  cancelEditButton.hidden = true;
}

cancelEditButton.addEventListener('click', resetFoodForm);

// Put an existing food into the form for editing
function startEditing(food) {
  editingId = food.id;

  document.querySelector('#food-name').value = food.name;

  document.querySelector('#food-description').value =
    food.description || '';

  document.querySelector('#food-price').value = food.price;

  document.querySelector('#food-restaurant').value =
    food.restaurant;

  document.querySelector('#food-cuisine').value =
    food.cuisine || '';

  document.querySelector('#food-category').value =
    food.category || '';

  document.querySelector('#food-image').value =
    food.image || '';

  document.querySelector('#food-featured').checked =
    Boolean(food.is_featured);

  // Clear any picture previously selected in the form.
  document.querySelector('#food-file').value = '';

  formTitle.textContent = 'Edit food';
  saveButton.textContent = 'Save changes';
  cancelEditButton.hidden = false;

  foodForm.scrollIntoView({ behavior: 'smooth' });
}

// Delete a food
async function deleteFood(food) {
  const confirmed = window.confirm(
    `Delete "${food.name}" from ${food.restaurant}?`
  );

  if (!confirmed) return;

  showMessage('');

  try {
    const { data, error } = await supabaseClient
      .from('foods')
      .delete()
      .eq('id', food.id)
      .select('id');

    if (error || !data || data.length === 0) {
      showMessage('Food could not be deleted. Check your admin access.');
      return;
    }

    if (editingId === food.id) {
      resetFoodForm();
    }

    showMessage('Food deleted.');
    await loadFoods();

  } catch (error) {
    showMessage('Could not connect. Please try again.');
  }
}

// Display foods in the dashboard
function renderFoods(foods) {
  foodList.replaceChildren();

  foodCount.textContent =
    `Showing ${foods.length} of ${allFoods.length} food items.`;

  if (foods.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No foods found.';
    foodList.append(message);
    return;
  }

  foods.forEach(food => {
    const row = document.createElement('article');
    row.className = 'food-row';

    const title = document.createElement('h3');
    title.textContent = food.name;

    const restaurant = document.createElement('p');
    restaurant.textContent = food.restaurant;

    const category = document.createElement('p');
    category.textContent = food.category || 'No category';

    const price = document.createElement('p');
    price.textContent =
      `₦${Number(food.price).toLocaleString('en-NG')}`;

    const actions = document.createElement('div');
    actions.className = 'food-actions';

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'Edit';

    editButton.addEventListener('click', () => {
      startEditing(food);
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    deleteButton.addEventListener('click', () => {
      deleteFood(food);
    });

    actions.append(editButton, deleteButton);
    row.append(title, restaurant, category, price, actions);
    foodList.append(row);
  });
}

// Search by food name, restaurant, or category
function searchFoods() {
  const searchText = searchInput.value.trim().toLowerCase();

  const results = allFoods.filter(food => {
    const details = [
      food.name,
      food.restaurant,
      food.category
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return details.includes(searchText);
  });

  renderFoods(results);
}

searchInput.addEventListener('input', searchFoods);

// Load foods from Supabase
async function loadFoods() {
  const { data, error } = await supabaseClient
    .from('foods')
    .select('*')
    .order('name');

  if (error) {
    showMessage('Could not load foods. Please refresh and try again.');
    return;
  }

  allFoods = data || [];
  searchFoods();
}

// Add or update a food
foodForm.addEventListener('submit', async event => {
  event.preventDefault();
  showMessage('');

  const food = {
    name: document.querySelector('#food-name').value.trim(),

    description: document
      .querySelector('#food-description')
      .value
      .trim(),

    price: Number(
      document.querySelector('#food-price').value
    ),

    restaurant: document
      .querySelector('#food-restaurant')
      .value,

    cuisine: document
      .querySelector('#food-cuisine')
      .value
      .trim() || null,

    category: document
      .querySelector('#food-category')
      .value
      .trim(),

    image: document
      .querySelector('#food-image')
      .value
      .trim() || null,

    is_featured: document
      .querySelector('#food-featured')
      .checked
  };

  if (!food.name || !food.restaurant || !food.category) {
    showMessage('Please fill in the required fields.');
    return;
  }

  if (
    !Number.isInteger(food.price) ||
    food.price < 0 ||
    food.price > 2147483647
  ) {
    showMessage('Please enter a valid price.');
    return;
  }

  saveButton.disabled = true;

  try {
    const imageFile = document.querySelector('#food-file').files[0];

    // Upload a new picture if one was selected.
    if (imageFile) {
      const allowedTypes = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp'
      };

      const extension = allowedTypes[imageFile.type];

      if (!extension) {
        showMessage('Please choose a JPG, PNG, or WebP image.');
        return;
      }

      if (imageFile.size > 5000000) {
        showMessage('Please choose an image smaller than 5 MB.');
        return;
      }

      const fileName = `${crypto.randomUUID()}.${extension}`;

      const { error: uploadError } = await supabaseClient.storage
        .from('food-images')
        .upload(fileName, imageFile, {
          contentType: imageFile.type,
          upsert: false
        });

      if (uploadError) {
        console.error('Image upload failed:', uploadError);

        showMessage('Image could not be uploaded. Please try again.');
        return;
      }

      const { data } = supabaseClient.storage
        .from('food-images')
        .getPublicUrl(fileName);

      food.image = data.publicUrl;
    }

    let result;

    if (editingId) {
      result = await supabaseClient
        .from('foods')
        .update(food)
        .eq('id', editingId)
        .select('id');
    } else {
      result = await supabaseClient
        .from('foods')
        .insert(food)
        .select('id');
    }

    if (result.error || !result.data || result.data.length === 0) {
      showMessage('Food could not be saved. Check your admin access.');
      return;
    }

    resetFoodForm();
    showMessage('Food saved successfully.');

    await loadFoods();

  } catch (error) {
    console.error('Food save failed:', error);
    showMessage('Could not complete the request. Please try again.');

  } finally {
    saveButton.disabled = false;
  }
});

// Update the dashboard when login status changes
supabaseClient.auth.onAuthStateChange((event, session) => {
  updateLoginView(session);

  if (session) {
    setTimeout(() => loadFoods(), 0);
  }
});