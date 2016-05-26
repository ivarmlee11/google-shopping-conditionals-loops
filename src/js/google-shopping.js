var data = require('../products.json');

// Write your solutions below
// Exercise 1

// var count = 0;


for (var i = 0; i < data.items.length; i++){
  if(data.items[i].kind === "shopping#product"){
    count = count + 1;
  }
}
console.log(count);

//Exercise 2


for (var i = 0; i < data.items.length; i++){
  if(data.items[i].product.inventories[0].availability === "backorder"){
    console.log('hello');
    console.log(data.items[i].product.title);
  }
}

//Exercise 3


for (var i = 0; i < data.items.length; i++){
  if(data.items[i].product.images.length > 1){
    console.log(data.items[i].product.title);
  }
}

// Exercise 4

for (var i = 0; i < data.items.length; i++){
  if(data.items[i].product.brand === "Canon"){
    console.log(data.items[i].product.title);
  }
}

// Exercise 5

for (var i = 0; i < data.items.length; i++){
  if(data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay"){
    console.log(data.items[i].product.title);
  }
}

// Exercise 6

 // Print all the products with their brand, price, and an image link

for (var i = 0; i < data.items.length; i++){
    console.log(data.items[i].product.title + " " + data.items[i].product.brand + " " + data.items[i].product.inventories[0].price + " " + data.items[i].product.images[0].link + '\n');
}
