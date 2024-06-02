class Solution {
public:
    int minimumChairs(string s) {
        int currentOccupancy = 0; // Current number of people in the waiting room
        int maxOccupancy = 0; // Maximum number of people in the waiting room at any time

        for (char c : s) {
            if (c == 'E') {
                // A person enters the waiting room
                currentOccupancy++;
                // Update the maximum occupancy if needed
                maxOccupancy = max(maxOccupancy, currentOccupancy);
            } else if (c == 'L') {
                // A person leaves the waiting room
                currentOccupancy--;
            }
        }

        return maxOccupancy;
    }
};
