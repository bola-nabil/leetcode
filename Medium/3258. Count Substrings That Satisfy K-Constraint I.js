let n = s.length;
    let count = 0;
    
    function countValidSubstrings(maxCount) {
        let left = 0;
        let zeros = 0, ones = 0;
        
        for (let right = 0; right < n; right++) {
            if (s[right] === '0') zeros++;
            else ones++;
            
            while (zeros > maxCount && ones > maxCount) {
                if (s[left] === '0') zeros--;
                else ones--;
                left++;
            }
            
            count += (right - left + 1);
        }
    }
    
    // Count for the constraint with k zeros or k ones
    countValidSubstrings(k);
    
    return count;
};
