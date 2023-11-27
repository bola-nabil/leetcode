var countSegments = function(s) {
    let res = s.match(/\w?\S+/g);

    if(res === null) return 0;
    else return res.length; 
};