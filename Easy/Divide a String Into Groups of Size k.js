var divideString = function(s, k, fill) {
    let reg = new RegExp(`\\w{1,${k}}`, "g");
    let arr = s.match(reg);

    let lengthLastElement = arr[arr.length-1].length;
    let lastElement = arr[arr.length-1];
    let margeArr = fill.repeat(k - lengthLastElement);
    let fillArr = lastElement + margeArr;

    if(lengthLastElement === k) return(arr);
    else {
        arr.pop();
        return(arr.concat(fillArr));
    }
};