var wordPattern = function(pattern, s) {
    let p= pattern.split('')
    s=s.split(" ")
    if(s.length!=p.length) return false;
    let sobj=new Map()
    let pobj=new Map()
    for(let i=0;i<p.length;i++){
    if(sobj.has(s[i]) && sobj.get(s[i])!=p[i]){
    return false
    }
    else sobj.set( s[i],p[i])
    
    if(pobj.get(p[i]) && pobj.get(p[i])!=s[i]){
    return false
    }
    else pobj.set(p[i],s[i])
    }

    return true;
};