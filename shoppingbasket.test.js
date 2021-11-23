const ShoppingBasket = require('./shoppingbasket');

const candyDouble = { getPrice: () => 4.99 };

describe('ShoppingBasket class', () => {
  it('shows the total price of a basket', () => {
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    console.log(basket.items);
    // basket.addItem(new Candy('Snickers', 1.99));
    expect(basket.getTotalPrice()).toEqual(14.97);
  });
});
