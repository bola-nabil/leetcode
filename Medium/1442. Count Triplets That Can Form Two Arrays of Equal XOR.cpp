class Solution {
public:
    static int countTriplets(vector<int>& arr) {
        int n=arr.size();
        if (n==1) return 0;
        vector<int> xor_sum(n, arr[n-1]);
        int ans=0;
        for(int i=n-2; i>=0; i--){
            xor_sum[i]=xor_sum[i+1]^arr[i];
            if (xor_sum[i]==0)
                ans+=(n-1-i);
        }
        for(int i=0; i<n-1; i++){  
            for(int k0=n-1; k0>i+1; k0--){
                xor_sum[i]^=arr[k0];
                if (xor_sum[i]==0) ans+=(k0-1-i);
            }

        }
        return ans;
    }
};
