class Solution {
public:
        int distributeCoins(TreeNode* r, TreeNode* p = nullptr) {
            if (r == nullptr) return 0;
            int res = distributeCoins(r->left, r) + distributeCoins(r->right, r);
            if (p != nullptr) p->val += r->val - 1;
            return res + abs(r->val - 1);
        }
}
