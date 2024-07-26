// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//  0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// we are going to need to variables, one for positive and one for negative
// need to return a empty array if the input is empty or null
// we'll do an if statement for that
// 
function countPositivesSumNegatives(input){
    let posNum = 0;
    let negNum = 0;
    if(input === null || input.length === 0){
        return [];
    }else{
        input.forEach((num) => num > 0 ? posNum++ : negNum += num)
    }
    return [posNum, negNum];
}