class Solution {
public:
       vector<string> uncommonFromSentences(string A, string B) {
        string nw = A + " " + B, str = "";
        map<string, int> mp;
        vector<string> ans;
        for(char x : nw){
            if(x==' '){
                mp[str]++;
                str="";
            }
            else str+=x;
        }
        mp[str]++;
        for(auto it : mp){
            if(it.second==1) ans.push_back(it.first);
        }
        return ans;
    }
};
