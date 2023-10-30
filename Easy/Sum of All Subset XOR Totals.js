var subsetXORSum = function(nums) {
    let sum=0;
    dfs(0, 0); return sum;
    
    function dfs(value, i){
        if(i<nums.length){
            dfs(value^nums[i], i+1);  
            dfs(value, i+1);
        }
        if(i==nums.length) sum+=value;
    }
}