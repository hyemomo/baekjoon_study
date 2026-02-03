function isAvailableToOrder(menus, orders) {
  menus.sort();
  for (const order of orders) {
    if (!isExistTargetNumberBinary(order, menus)) {
      return false;
    }
  }

  return true;
}

function isExistTargetNumberBinary(target, array) {
  let currentMin = 0;
  let currentMax = array.length - 1;
  let currentGuess = Math.floor((currentMin + currentMax) / 2);

  let findCount = 0;

  while (currentMin <= currentMax) {
    findCount += 1;
    if (array[currentGuess] === target) {
      return true;
    } else if (array[currentGuess] < target) {
      currentMin = currentGuess + 1;
    } else {
      currentMax = currentGuess - 1;
    }
    currentGuess = Math.floor((currentMin + currentMax) / 2);
  }

  return false;
}

const shopMenus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"];
const shopOrders = ["오뎅", "콜라", "만두"];

const result = isAvailableToOrder(shopMenus, shopOrders);
console.log(result);
