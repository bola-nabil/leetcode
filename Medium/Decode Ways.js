var numDecodings = function(s) {
    if(!s) return 0;
    let dp = [];
    dp[s.length] = 1
    for(let i=s.length-1;i>-1;i--){
        if(s[i]!='0'){
            dp[i] = dp[i+1];
            if(i<s.length-1 && (s[i]=='1' || (s[i]=='2' && s[i+1]<'7'))) dp[i] += dp[i+2];
        }else{
            dp[i]=0;
        }
    }
    return dp[0]||0;
};