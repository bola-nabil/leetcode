class NestedIterator {
    constructor(nestedList) {
        this.tempList = [];
        this.index = 0;
        this.flattenList(nestedList);
    }

    next() {
        return this.tempList[this.index++];
    }

    hasNext() {
        return this.index < this.tempList.length;
    }

    flattenList(nestedList) {
        for (const ni of nestedList) {
            if (ni.isInteger()) {
                this.tempList.push(ni.getInteger());
            } else {
                this.flattenList(ni.getList());
            }
        }
    }
}