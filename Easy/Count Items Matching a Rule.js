var countMatches = function(items, ruleKey, ruleValue) {
    return items.filter(item => {
        if (ruleKey === 'type') return item[0] === ruleValue
        else if (ruleKey === 'color') return item[1] === ruleValue
        else return item[2] === ruleValue
    }).length
};