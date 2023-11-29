const removeStars = ( s, r = [] ) => 
    s.split``.forEach( c => c == `*` ? r.pop() : r.push(c) ) || r.join``