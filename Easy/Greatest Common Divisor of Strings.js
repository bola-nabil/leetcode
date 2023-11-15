var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1) return '';
 
    let isValidate = (w,str) =>{
        if(str.length == 0) return true;
        if(!str.startsWith(w)) return false;
        return isValidate(w,str.slice(w.length))
    }

    let res = ''

    for(let i = 1; i<=str1.length; i++){
        let curV = str1.slice(0,i)
        if(isValidate(curV,str2) && isValidate(curV,str1)) res = curV;
    }

    return res;
};