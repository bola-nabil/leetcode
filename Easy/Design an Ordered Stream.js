class OrderedStream {
constructor(n) {
    this.pointer = 0
    this.list = []
}

insert(id, value) {
    let chunk = []
    this.list[id - 1] = value
    while(this.list[this.pointer]) {
        chunk.push(this.list[this.pointer])
        this.pointer++
    }
    return chunk
}
}