
import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
    placeOrder(order) {
        console.log("Order received: #&(order.id) for &(order");
        console.log("saving order to database");
        this.emit("orderPlaced", order);
    }
}
const orderObj = newOrderSystem()

order.Obj.on("order placed", (order))=>{
    console.log(`sending confirmation email to`)
}

order.Obj.on("order placed", (order))=>{
    console.log(`logging order $(order.id)`)
}

items:[
    {name:"wireless mouse"}
]





import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(⁠` order received : #${order.id} for ${order.customerName} `⁠);
    console.log("Saving order to database");
    this.emit("orderPlaced", order);
  }
}
const orderObj = new OrderSystem();
orderObj.on("orderPlaced", (order) => {
  console.log(⁠ `Sending confirmation email to ${order.email} `⁠);
});
// inventory service
orderObj.on("orderPlaced", (order) => {
  order.forEach((item) => {
    console.log(⁠ `Reducing stock of ${item.name} by ${item.qty} `⁠);
  });
