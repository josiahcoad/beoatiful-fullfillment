// BACKEND FUNCTIONS
var orders = [
  {
    name: "Mary Jane",
    orderDate: "Apr 22",
    ingredients: ["granola", "apples", "cherrys", "pecans"],
    phone: "2088192625",
    orderId: "jashddflikuyds8676",
  },
  {
    name: "Josiah Coad",
    orderDate: "Apr 15",
    ingredients: ["oats", "chocolate", "bananas", "chia seeds"],
    phone: "2089796599",
    orderId: "iadjdjd6f3dnddd09d",
  },
];

function getOrders() {
  return orders;
}

function getTodoOrders() {
  return getOrders()
            .filter((order) => !order.isCompleted)
            .sort(order => order.orderDate)
            .reverse();
}

function printLabel(orderId) {
  console.log("printed");
  return true;
}

function markCompleted(orderId) {
  console.log("Marked Completed!");
  const idx = orders.findIndex(order => order.orderId == orderId);
  orders[idx].isCompleted = true;

  // We have to reload the frontend with the newly updated data
  document.getElementById("ordersContainer").innerHTML = getTodoOrders()
    .map(makeOrderCard)
    .join("");
}

// DOM EDITING FUNCTIONS
const makeOrderCard = (order) =>
  `<div id="orderCard">
        <h2>${order.name}</h2>
        <h5>Order Date: ${order.orderDate}</br>Order ID: ${order.orderId}</h5>
        <ul>
            ${order.ingredients
              .map((ingredient) => `<li><input type="checkbox">${ingredient}</li>`)
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
