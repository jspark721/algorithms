/* write a function that, given:

1. an amount of money
2. an array of coin denominations

commutes the number of ways to make the amount of money with coins of the available denominations

example: for amount=4 (4 cents) and denominations=[1,2,3] (1c,2c, 3 cents), your program would output 4 -- the number of ways to make 4 cents with those denominations: 
1. 1c,1c,1c,1c
2. 1c,1c,2c
3. 1c,3c
4. 2c,2c

*/

//edge case - some will come out 0, if the amount is less than the value of the denominations

function makeChange(amountLeft, denominations, currentIndex = 0) {
  //base cases - if we hit the amount spot on, just return 1!
  if (amountLeft === 0) return 1;

  //we overshot the amount left (used too many coins)
  if (amountLeft < 0) return 0;

  //we're out of denominations
  if (currentIndex === denominations.length) return 0;

  console.log(
    `checking ways to make ${amountLeft} with [${denominations.slice(
      currentIndex
    )}]`
  );

  //choose a current coin
  const currentCoin = denominations[currentIndex];

  //see how many possibilities we can get for each number of times to use currentCoin
  let numberOfPossibilities = 0;
  while (amountLeft >= 0) {
    numberOfPossibilities += makeChange(
      amountLeft,
      denominations,
      currentIndex + 1
    );
    amountLeft -= currentCoin;
  }
  return numberOfPossibilities;
}

console.log(makeChange(4, [1, 2, 3]));
