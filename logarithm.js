const data = [];
for (let i = 0; i < 99999999; i++) {
    data.push(i)
}


function linearSearch(arr,toFind){ 
    for(item of arr){
        if(arr === toFind){
            return true;
        }
        return false;
    }
}
// console.log('linear time')
console.time('linear')
linearSearch(data,126000)
console.timeEnd('linear')



function logarithmSearch(arr,x,start,end){
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return logarithmSearch(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return logarithmSearch(arr, x, mid+1, end);
    
}

// console.log('logarithm time')
console.time('logarithm')
logarithmSearch(data,126000,0, data.length-1)
console.timeEnd('logarithm')