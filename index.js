// Add your functions here
function map(array, callback) {
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(sourceArray, cb, startingPoint){
    let runningTotal
    let i
    if(startingPoint){
        runningTotal = startingPoint
        i = 0
    } else {
        runningTotal = sourceArray[0]
        i = 1
    }

    for( i; i < sourceArray.length; i++){
        runningTotal = cb(sourceArray[i], runningTotal)
    }
    return runningTotal
} 
