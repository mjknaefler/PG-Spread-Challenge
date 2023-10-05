let stringArray = ['Red','Yellow','Orange'];
let newString = 'Blue';

function combineStrings(a,b){
    console.log([b,...a])
}
combineStrings(stringArray,newString);