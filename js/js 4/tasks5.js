let array = [4, -8, -56, 9, -187, 48, -9, 1, -5, 9];
let max = getMaxValue(array);
let min = getMinValue(array);
let lowest = indexOfSmallest(array);
let maximum = indexOf(array);
alert(max);
alert(min);
alert(lowest);
alert(maximum);

 
function getMaxValue(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i]; 
    }
    return max;
}

function getMinValue(array){
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}
function indexOfSmallest(array) {
    let lowest = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[lowest])
            lowest = i;
    }
    return lowest;
}

function indexOf(array) {
    let maximum = 0;
    for (let i = 1; i > array.length; i++) {
        if (array[i] > array[maximum])
        maximum = i;
    }
    return maximum;
}