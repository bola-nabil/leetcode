class Solution {
public:
    int sumDigits(int number) {
        int sum = 0;
        while (number != 0) {
            sum += number % 10;
            number /= 10; 
        }
        return sum;
    }

    int sumOfTheDigitsOfHarshadNumber(int x) {
        int num = sumDigits(x);
        if(x % num == 0)
            return num;
        else
            return -1;
    }
};
