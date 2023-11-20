var compress = function(chars) {
    let i = 0,j = 0, k = 0;
    while(j < chars.length){
        while(chars[i] === chars[j]) j++;
        chars[k++] = chars[i];
        let dif = j - i;
        if(dif  > 9){
            let u = dif + '';
            let us = u.split('');let l = 0;
            while(l < us.length){
                chars[k++] = us[l++];
            }
        } else if(j - i > 1) chars[k++] = (j - i) + '';
        i = j;
    }
    return k;
};