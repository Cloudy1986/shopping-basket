const Candy = require('./candy');

describe('Candy class', () => {
  it('gets name', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars');
  });
  
  it('get price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99);
  });
});
