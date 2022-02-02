const maxProfit = function (prices) {
  //buy variable
  // profit
  // max profit
  // iterate over array
  // if element in array is less than buy variable - set buy variable to that element
  // if element is greater than buy variable, find the difference between the two
  // set profit equal to the difference

  // if profit is greater than max_profit, set max_profit equal to profit
  // else continue to iterate

  let buy = prices[0];
  let profit = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }

    if (prices[i] > buy) {
      profit = prices[i] - buy;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
