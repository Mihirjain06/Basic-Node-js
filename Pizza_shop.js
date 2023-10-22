const EventEmitter = require("node:events");
 
class Pizzashop extends EventEmitter{
    constructor(){
        super();
        this.ordernumber = 0;
    }
    order() {
        this.ordernumber++;
        this.emit("order", size, topping);
    }
    displayordernumber() {
        console.log(`Current Order Number is :- ${this.ordernumber}`)
    }
}
module.exports = Pizzashop;