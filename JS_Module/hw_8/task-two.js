const users = [
  {
    name: 'Joey',
    basket: [],
  },
  {
    name: 'Chandler',
    basket: [],
  },
  {
    name: 'Monica',
    basket: [],
  },
  {
    name: 'Rachel',
    basket: [],
  },
  {
    name: 'Phoebe',
    basket: [],
  },
  {
    name: 'Ross',
    basket: [],
  },
];
const products = [
  {
    name: 'Shampoo',
    price: 13,
  },
  {
    name: 'Laptop',
    price: 1030,
  },
  {
    name: 'Tea',
    price: 5,
  },
  {
    name: 'Coffee',
    price: 7,
  },
];

function getUserInfo(userName, cb) {
  const userData = users.filter((user) => user.name === userName)[0];
  cb(userData);
}

function addProduct(userName, product, cb) {
  const userBasket = users.filter((user) => user.name === userName)[0].basket;
  cb(userBasket, product);
}

// addProduct('Rachel', products[1], (userBasket, product) =>
//   userBasket.push(product),
// );
// addProduct('Rachel', products[3], (userBasket, product) =>
//   userBasket.push(product),
// );
// addProduct('Rachel', products[1], (userBasket, product) =>
//   userBasket.push(product),
// );
// getUserInfo('Rachel', (userData) => console.log('After adding products',userData));

function getBasketInfo(userName, cb) {
  const userBasket = users.filter((user) => user.name === userName)[0].basket;
  cb(userBasket);
}

// getBasketInfo('Rachel', (userBasket) => {
//   const info = { list: '', totalPrice: 0 };
//   userBasket.forEach((product) => {
//     info.totalPrice += product.price;
//   });
//   console.log(info)
// });

function buyProducts(userName, cb) {
  let userBasket = users.filter((user) => user.name === userName)[0].basket;
  cb(userBasket);
}

// buyProducts('Rachel', (userBasket) => {
//   console.log('Thank you for purchase!');
//   userBasket.length = 0;
// });
// getUserInfo('Rachel', (userData) => console.log('After buying products ', userData));

async function getUserInfoPromise(userName) {
  const userData = users.filter((user) => user.name === userName)[0];
  if (!userData) {
    throw new Error('Ops, user not found!');
  }
  return userData;
}

async function addProductPromise(userName, product) {
  const userBasket = users.filter((user) => user.name === userName)[0].basket;
  userBasket.push(product);
  return userBasket;
}

async function getBasketInfoPromise(userName) {
  const userBasket = users.filter((user) => user.name === userName)[0].basket;
  return userBasket;
}

async function buyProductsPromise(userName) {
  let userBasket = users.filter((user) => user.name === userName)[0].basket;
  return userBasket;
}

console.log(
  getUserInfoPromise('Ross')
    .then((data) => console.log(data))
    .catch((err) => console.log(err)),
);
// console.log(getUserInfoPromise('Andrii').then(data => console.log(data)).catch(err => console.log(err)))
console.log(
  addProductPromise('Ross', products[0]).then((data) => console.log(data)),
);

console.log(
  addProductPromise('Ross', products[1]).then((data) => console.log(data)),
);

console.log(
  getBasketInfoPromise('Ross').then((basket) => {
    const productList = [];
    const info = { list: '', totalPrice: 0 };
    basket.forEach((product, i) => {
      productList.push(`#${i}: ${product.name}`);
      info.totalPrice += product.price;
    });
    info.list = productList.join(' | ');
    console.log(info);
  }),
);

console.log(
  buyProductsPromise('Ross').then((basket) => {
    console.log('thank you for purchase');
    basket.length = 0;
  }),
);

console.log(getBasketInfoPromise('Ross').then((basket) => console.log(basket)));
