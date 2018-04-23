//bubbleSort

//[1,5,4,3,2]

//takes an array and then

function compare (a, b){
  return a > b;
}

function swap (a, b) {
  let comparator = a;
  if(compare(a, b)){
    a = b;
    b = comparator;
  }
  return [a, b];
}

function bubbleSort(arr){
  let counter = arr.length
  while(counter){
    for(let i = 0; i < counter; i++){
      let first = arr[i];
      let second = arr[i + 1];
      let numbers = swap(first, second);
      first = numbers[0];
      second = numbers[1];
    }
  }
  return arr;
}

bubbleSort([5, 67, 34, 2, 16, 12, 16, 17, 11, 5, 10, 13, 40, 19]);



//it calls compare
//while iteration counter --- loop names a,b a = arr[i], arr[i+1]
//counter--
//outer looper for how many times to loop always starts at 1st elem: //has an iteration counter;
//inner looper for looping through each element, minus 1 each iteration;


//loop through every element, and compare higher or lower
//if any element was swapped in that iteration, then iterate again
//once a whole iteration happens with no swapping then return;
//iteration counter starts at length of the array
//on each iteration counter - 1 so you don't iterate over unnecessary ..

//compare func(a,b) return arr[0] > arr[1] //this gives true of false;


//swap function(a,b)
// var elem;

//if compare is true then swap;

// elem =arr[0];
// arr[0] = arr[1];
// arr[1] = elem;


