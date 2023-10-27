class Solution {
    public int countDigitOne(int n) {
        long base = 1, limit = 10;
        int res = 0;
        if(n <= 0) return 0;

        while(n >= base){
            res += (n / limit) * base;
            if(n % limit >= base) res += Math.min(n % limit - base + 1, base);
            base *= 10;
            limit *= 10;
        }
        
        return res;
    }
}