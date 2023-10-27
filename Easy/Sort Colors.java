class Solution {
       public static void sortColors(int[] nums) {
        int size=nums.length;
        Arrays.sort(nums);
        for(int i=0;i<size;i++){
            System.out.println(nums[i]);
        }
    }
}