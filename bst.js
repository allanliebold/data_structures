// Recursion example
function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

factorial(4); 

/*
4 * factorial(3)
3 * factorial(2)
2 * factorial(1)
return 1 
2 * 1 = 2
3 * 2 = 6
4 * 6 = 24
return 24 

*/
