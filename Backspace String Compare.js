var backspaceCompare = function(s, t) {
    let str1 = check(s)
    let str2 = check(t)

    return str1 === str2

    function check(str){
        let arr = []

        for(let i =0; i < str.length; i++){
            if( str[i] == "#") 
                arr.pop()
            else 
                arr.push(str[i])
            
        }

        return arr.join("")
    }
};