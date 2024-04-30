function binarySearch(arr,target) {
    let left = 0;
    let right = arr.length -1;

    while(left <=right){
        const mid  = Math.floor((left + right) / 2);


        if (arr[mid] ===target){
            return mid;
        }else if (arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;

        }
      }
    return -1;
    }
    const myArray = [10, 4, 7, 2, 8, 5];
    const targetValue =7;
    // const targetValue =12;
    const result = binarySearch(myArray, targetValue);
    
    
    //console.log(`Found ${targetValue} at index ${result}`);
    
    if(result  !== -1){
        console.log(`Found ${targetValue} at index ${result}`);
    } else {
     console.log(`${targetValue} not found in the array.`);
    }
















