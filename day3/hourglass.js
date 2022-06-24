
  let row = 6;
  let col = 6;
  function sum(array){
    debugger
    let maxSum = 0;
    for (let i = 0; i < row - 3; i++)
    {
      for (let j = 0; j < col - 3; j++)
      {
        let sum = (array[i][j] + array[i][j + 1] +
        array[i][j + 2]) + (array[i + 1][j + 1]) +
        (array[i + 2][j] + array[i + 2][j + 1] +
                  array[i + 2][j + 2]);
        maxSum = sum

      }
    }
    return maxSum;
  }
  let array =
      [[1, 1, 1, 0, 0,0],
      [0, 0, 0, 0, 0,0],
      [2, 1, 1, 0, 0,0],
      [0, 0, 0, 0, 0,0],
      [1, 1, 0, 1, 0,0]];
  let answer = sum(array);
  document.write("Maximum sum = " + answer);


console.log(array[2][0]+array[0][0])
