// HOW TO SUM ELEMENTS IN ARRAY 

const notas = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];



function veryBigsum (arr){
  let sum = 0
  for (let i = 0; i < notas.length; i++ ){
    sum += arr[i]
  }
  return sum
}

const result = veryBigsum(notas)

console.log(result)