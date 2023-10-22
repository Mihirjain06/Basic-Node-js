const EvenEmiiter = require("node:events");
//EventEmiiter instance 
const emitter = new EvenEmiiter();

//event methon with listner and arguments
emitter.on("Order-Pizza", (size, topping) => {
  console.log(`Order received!Baking a ${size} pizza with ${topping}`);
});

emitter.on("Order-Pizza", (size) => {
  if (size === "large") {
    console.log("Serving complimentary drink");
  } else {
    console.log("Serving only pizza");
  }
});
/*Emit method:- accepts the event name followed by arguments that 
need to be passed on to the listners */
emitter.emit("Order-Pizza", "large", "mushroom");
