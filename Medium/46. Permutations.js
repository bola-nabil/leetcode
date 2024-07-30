var permute = function(nums) {
    if(nums.length === 1)
        return [nums.slice()];

    let res = [];

    for(let i=0; i<nums.length; i++) {
        let n = nums.shift();
        let perms = permute(nums.slice());

        for(var p of perms) 
            p.push(n);
        
        res.push(...perms);
        nums.push(n);
    }
    return res;
};
