var data = require('../products.json');

// Exercise 1

var count = 0;
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].kind === 'shopping#product') {
    count++;
  }
}
console.log(count);

// Exercise 2

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability === 'backorder') {
    console.log(data.items[i].product.title);
  }
}

// // Exercise 3

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title);
  }
}

// // Exercise 4

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon') {
    console.log(data.items[i].product.title);
  }
}

// // Exercise 5

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon' &&
   data.items[i].product.author.name === 'eBay') {
    console.log(data.items[i].product.title);
  }
}

// // Exercise 6

for (var j = 0; j < data.items.length; j++) {
  console.log(data.items[j].product.title
   + ' ' + data.items[j].product.brand + ' '
   + data.items[j].product.inventories[0].price
     + ' ' + data.items[j].product.images[0].link + '\n');
}
