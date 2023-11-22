var thousandSeparator = function(n) {
    let numString = String(n).split("");

    let length = numString.length;
    if(length > 3){
        for(let i=length, k=0; i>=1;i--,k++){
        if(k%3===0 && k!==0){
            numString.splice(i,0,".");
        }
        }
    }

    return numString.join("");
};