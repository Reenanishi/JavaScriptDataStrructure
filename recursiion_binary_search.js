function recursiveBinarySearch(arr, target){
    return search(arr,target, 0 , arr.length-1)
}
    function search(arr,target, leftIndex, rightIndex){
        if (leftIndex > rightIndex){
            return -1;
        }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        return search(arr,target, leftIndex, middleIndex-1)
    }else{
        return search(arr,target, leftIndex, middleIndex ) 
    }
}
console.log(recursiveBinarySearch([3,5,9,11,14,12],9));
console.log(recursiveBinarySearch([-5,5,9,13,20,27],13));  
    