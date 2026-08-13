import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
    placeOrder(order) {
        console.log(`Order received: #${order.id} for ${order.customerName}`);
        console.log("Saving order to database...");

        this.emit("orderPlaced", order);
    }
}

const orderObj = new OrderSystem();
orderObj.on("orderPlaced", (order) => {
    console.log(`Sending confirmation email to ${order.email}`);
});
orderObj.on("orderPlaced", (order) => {
    order.items.forEach((item) => {
        console.log(`Reducing stock of ${item.name} by ${item.qty}`);
    });
});
orderObj.on("orderPlaced", (order) => {
    console.log(`Logging order ${order.id}`);
});
orderObj.placeOrder({
    id: 101,
    customerName: "Rahul",
    email: "rahul@gmail.com",
    items: [
        {
            name: "Wireless Mouse",
            qty: 2,
        },
        {
            name: "Keyboard",
            qty: 1,
        },
    ],
});