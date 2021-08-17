/* PROBLEM: Difference of Squares
 
Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.
The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.
Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares of the first ten natural numbers is 3025 - 385 = 2640.
You are not expected to discover an efficient solution to this yourself from first principles; research is allowed, indeed, encouraged. Finding the best algorithm for the problem is a key skill in software engineering.
 
Input:
$ node difference-of-squares.js 10
> 2640
 */

var number = 10;
var sum1 = 0;
var sum2 = 0;

for (let index = 1; index <= number; index++) {    
  sum1 += index * index;
  sum2 += index;
}

console.log(sum2*sum2-sum1);