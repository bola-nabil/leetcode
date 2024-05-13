class Solution {
public:
    void flipRow(vector<vector<int>>& A,int row,int n){
        for(int j = 0;j < n;j++){
            if(A[row][j] == 0)
                A[row][j] = 1;
            else
                A[row][j] = 0;
        }
    }
    
    void flipCol(vector<vector<int>>& A,int col,int m){
        for(int i = 0;i < m;i++){
            if(A[i][col] == 0)
                A[i][col] = 1;
            else
                A[i][col] = 0;
        }
    }
    
    
    int matrixScore(vector<vector<int>>& A) {
        int m = A.size();
        int n = A[0].size();
        vector<int> col(n,0);
        
        for(int i = 0;i < m;i++){
            if(A[i][0] == 0)
                flipRow(A,i,n);
            for(int j = 0;j < n;j++){
                if(A[i][j] == 1)
                    col[j]++;
            }
        }
        
        for(int j = 0;j < n;j++){
            if(col[j] <= m/2)
                flipCol(A,j,m);
        }
        
        int result = 0,sum;
        for(vector<int> v : A){
            sum = 0;
            for(int j = v.size()-1;j >= 0 ;j--){
                if(v[j] == 1)
                    sum += pow(2,v.size()-1-j);
            }
            result += sum;
        }
        
        return result;
    }
};
