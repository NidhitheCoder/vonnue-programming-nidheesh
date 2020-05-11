let arr =[1,92,8,2,4,3,4,6,7]

findSubArray = (arr,val) => {
    for (let i=0; i<arr.length;i++) {
        let sum=0, result=[];
        for (let j=i;j< arr.length;j++) {
            sum+=arr[j]
            result.push(arr[j])
            if(sum === val) {
                return result
            }
        }
    }
    return " there is no subarray with sum of "+val
}

console.log(findSubArray(arr,21))