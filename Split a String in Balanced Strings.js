var balancedStringSplit = function(s) {
    var bal=0,ans=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='L')                
            bal++;
        else
            bal--;
        if(bal==0)                
            ans++;
    }
    return ans;
};