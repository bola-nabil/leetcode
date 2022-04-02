class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isMonotonic($nums) {
        $arr1=$arr2=$nums;
        sort($arr1);
        rsort($arr2);
        return $nums==$arr1 || $nums==$arr2 ? true : false;
            
    }
}