var firstPalindrome = function(words) {
    let strWords = words.join(" ");
    let newArray = [];

    for(let i=strWords.length - 1; i>=0; i--) {
        newArray.push(strWords[i]);
    }

    let str = newArray.join("");
    let arr1 = strWords.split(" ");
    let arr2 = str.split(" ").reverse();

    let el;

    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] == arr2[i]) {
            el = arr1[i];
            break;
        } else {
            el = "";
        }
    }

    return el;
};