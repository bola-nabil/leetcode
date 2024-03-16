class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> count;
        count[0] = -1;
        int maxlen = 0, sum = 0;
        
        for (int i = 0; i < nums.size(); ++i) {
            sum += (nums[i] == 0 ? -1 : 1);
            if (count.find(sum) != count.end())
                maxlen = max(maxlen, i - count[sum]);
            else
                count[sum] = i;
        }
        
        return maxlen;
    }
};
