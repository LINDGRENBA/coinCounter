export class Money{
  constructor(amount){
    this.amount = amount;
  }


  getChange = (amount, changeType, coins) => {
    if(isNaN(amount)) {
      return;
  }
    if (coins.length === 0) {
      return amount;
  }
  
  //
  let roundedAmount = amount.toFixed(2);
  let newChangeTypeArray = changeType.shift();
  console.log('amount of money : $' + amount.toFixed(2));
    console.log(newChangeTypeArray + " : " +  Math.floor(roundedAmount/coins[0]));
  let remainder = roundedAmount%coins[0];
  let newArray = coins.shift();
  return getChange(remainder, changeType, coins);
  }

}
