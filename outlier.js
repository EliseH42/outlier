function outlier(arr){
    let oddArr = []
    let evenArr = []

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenArr.push(arr[i])
        }else{
            oddArr.push(arr[i])
        }
    }
    if(oddArr.length===1){
        return oddArr
    }else {
        return evenArr
    }
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))