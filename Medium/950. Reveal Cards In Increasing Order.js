class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
        sort(begin(deck), end(deck));
        list<int> l(deck.size());
        iota(begin(l), end(l), 0);    
        vector<int> res(deck.size());
        auto lp = l.begin();
        for (int i = 0, skip = 0; !l.empty(); skip = !skip) {
            if (lp == l.end()) lp = l.begin();
            if (skip) ++lp;
            else {
                res[*lp] = deck[i++];
                l.erase(lp++);
            }
        }
        return res;
    }
};
