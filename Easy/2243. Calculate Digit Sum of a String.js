var digitSum = function(s, k) {
    while(s.length > k){
        let temp='';
        for(let i=0;i<s.length;i+=k)
            temp+=eval(s.substring(i,i+k).split('').join('+'));
        s=temp;
    }
    return s;
};