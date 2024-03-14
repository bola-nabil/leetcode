class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        unordered_map<int, int> count;
        int sum = 0;
        int result = 0;
        
        count[0] = 1;
        
        for (int num : nums) {
            sum += num;
            result += count[sum - goal];
            count[sum]++;
        }
        
        return result;
    }
};
