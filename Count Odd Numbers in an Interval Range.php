class Solution {

    /**
     * @param Integer $low
     * @param Integer $high
     * @return Integer
     */
    function countOdds($low, $high) {
         if($low%2==0)
				$low+=1;
        if($high%2==0)
				$high-=1;
        
        return ($high-$low)/2+1;
    }
}