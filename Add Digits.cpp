class Solution {
public:
    
    int addDigits(int num) {

	long sum = 0, m;

	while (num > 0) {
		m = num % 10;
		sum += m;
		num /= 10;
	}
	if (sum < 10) return sum;
	else
		return addDigits(sum);
}

};