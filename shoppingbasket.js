class ShoppingBasket {
  constructor() {
    this.items = [];
  }
  addItem(candy) {
    return this.items.push(candy);
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item)=> {
      totalPrice += item.getPrice();
    });
    return totalPrice
  }
}

module.exports = ShoppingBasket;