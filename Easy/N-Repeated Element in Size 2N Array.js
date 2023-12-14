var repeatedNTimes = function(nums) {
    let res = nums.filter((el,index,self) => {
        return self.indexOf(el) !== index;
    })

    return(res[0]);  
};