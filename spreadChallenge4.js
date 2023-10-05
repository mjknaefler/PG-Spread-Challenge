let array1 = [1,200,7,4,5];

function largestNumber(a){
    let number = undefined;
    for (i=0;i<a.length;i++){
        if(number === undefined){
            number = a[i];
        } else if(number < a[i]){
            number = a[i];
        }
    }
    if (number === undefined){
        console.log('Array is empty');
    }else {
        console.log(`${number} is the largest number in the array`);
    }
}

largestNumber(array1);