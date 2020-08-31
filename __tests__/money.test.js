import { Money } from './../src/money.js'; 

describe('money and coin amounts', () => {
  let userMoney;

  beforeEach(() => {
    userMoney = new Money(5.42);
  });

  test('Should correctly instantiate new Money object', () => {
    expect(userMoney.amount).toEqual(5.42);
  });

  test('Should correctly return the number of quarters needed', () => {
    userMoney.calculateChange();
    expect(userMoney.quarters).toEqual(21);
  });
  
});