function largestSubarraySum(arr){
    let largestSum = 0
    let currentSum = 0
    let negatives = 0
    let i = 0
    
   
    while(i < arr.length){
        
        while(arr[i]<0){
            i++
        }

        currentSum += arr[i]
        i++
        while(arr[i] && arr[i] > 0){
            currentSum += arr[i]
            i++
        }
       
        if(arr[i] < 0 || i === arr.length){
            largestSum = Math.max(largestSum, currentSum)
        }
        
        while(arr[i] < 0){
            negatives += arr[i]
            i++
        }
       
        if(Math.abs(negatives) >= currentSum){
            currentSum = 0
            negatives = 0
        } else {
            currentSum = currentSum + negatives
            negatives = 0
        }
    }
    return largestSum
}