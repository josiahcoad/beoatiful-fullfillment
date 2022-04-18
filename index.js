// BACKEND FUNCTIONS
var orders = [
  {
    name: "Mary Jane",
    orderDate: "Apr 22",
    ingredients: ["granola", "apples", "cherrys", "pecans"],
    phone: "2088192625",
    orderId: "jashddflikuyds8676",
  },
];

function getOrders() {
  return orders;
}

function getTodoOrders() {
  return getOrders().filter((order) => !order.isComplete);
}

function printLabel(orderId) {
  console.log("printed");
  return true;
}

function markCompleted(orderId) {
  console.log("Marked Completed!");
  orders.forEach((order) => {
    if (order.orderId == orderId) {
        console.log(order)
      order.isCompleted = true;
    }
  });

  // We have to reload the frontend with the newly updated data
  document.getElementById("ordersContainer").innerHTML = getTodoOrders()
    .map(makeOrderCard)
    .join("");
}

// DOM EDITING FUNCTIONS
const makeOrderCard = (order) =>
  `<div id="orderCard">
        <h2>${order.name}</h2>
        <h5>${order.orderDate}</h5>
        <ul>
            ${order.ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
        </ul>
        <button onclick="printLabel()">
            Print Label
        </button>
        <button onclick="markCompleted('${order.orderId}')">
            Mark Completed
        </button>
    </div>`;

document.getElementById("ordersContainer").innerHTML = getTodoOrders()
  .map(makeOrderCard)
  .join("");
