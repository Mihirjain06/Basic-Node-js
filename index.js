// const data = require("./data.json");
// console.log(data);
// console.log(data.name);
// console.log(data.address);
// console.log(data.address.city);

// //watch mode in terminal
// // node --watch filename

//For pizza shop file
const Pizzashop = require("./Pizza_shop");
const DrinkMachine = require("./drinkmachine");


const pizzashop = new Pizzashop();
const drinkmachine = new DrinkMachine();


pizzashop.on("order", (size,topping) => {
    console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
    drinkmachine.serveDrink(size);
});

pizzashop.order("large","mushrooms");
pizzashop.displayordernumber();

