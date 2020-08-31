export class Money{
  constructor(amount){
    this.amount = amount;
  }


  // take amount, divide by 0.25
  // get how many times it went into the amount
  // get the remainder to continue to use
  //let remainder;
  calculateChange() {
    this.quarters = Math.floor(this.amount / 0.25);
    // let quartersRemainder = this.amount % 0.25;
    // let dimes = Math.floor(quartersRemainder / 0.10);
    // let dimesRemainder = quartersRemainder % 0.10;
    // let nickels = Math.floor(dimesRemainder / 0.05);
    // let nickelsRemainder = dimesRemainder % 0.05;
    // let pennies = Math.floor(nickelsRemainder / 0.01);
    // const answer = [quarters, dimes, nickels, pennies];
    return this.quarters;
  }
}