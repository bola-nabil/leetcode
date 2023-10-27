class Solution {

    /**
     * @param Integer[] $salary
     * @return Float
     */
    function average($salary) {
        
        $mn = min($salary);
        $mx = max($salary);
        
        $ll = ($mn + $mx);
        $res = array_sum($salary);
        $c = count($salary)-2;
        
        return ($res - $ll) /$c;
        
    }
}