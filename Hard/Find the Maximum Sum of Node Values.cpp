class Solution {
public:
    long long maximumValueSum(vector<int>& nums, int k, vector<vector<int>>& edges) {

        long long sum1 = 0;
        long long sum2 = 0;
        int count = 0;
                
        for(auto i: nums) {
            if((i ^ k) > i) {
                sum1 += (i ^ k);
                count++;
            }
            else
                sum2 += i;            
        }
            
        if(count % 2 == 0)
            return sum1 + sum2;
    
        long long maxi1 = 0;
        long long maxi2 = 0;                  
        for(auto i: nums) {
            if((i ^ k) > i) 
                maxi1 = max(maxi1, sum1 - (i ^ k) + sum2 + i);    
            else
                maxi2 = max(maxi2, sum1 + (i ^ k) + sum2 - i);                
        }

        return max(maxi1, maxi2);
    }
};
