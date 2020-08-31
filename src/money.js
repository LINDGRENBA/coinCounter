export class Money{
  constructor(amount){
    this.amount = amount;
  }


  calculateChange() {
    this.quarters = Math.floor(this.amount / 0.25);
    let quartersRemainder = this.amount % 0.25;
    this.dimes = Math.floor(quartersRemainder / 0.10);
    let dimesRemainder = quartersRemainder % 0.10;
    this.nickels = Math.floor(dimesRemainder / 0.05);
    let nickelsRemainder = dimesRemainder % 0.05;
    this.pennies = Math.floor(nickelsRemainder / 0.01);
  }

  const calculateChange = (amount) => {
    if(amount = NaN) {
      return;
    }
    if(amount = 0) {
      return amount;
    } else {
      return calculateChange()
    }
  }
}