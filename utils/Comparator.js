export default class Comparator {
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction
    }

    // a, b are string or int and return int
    static defaultCompareFunction(a, b) {
        if(a === b) return 0
        return a < b ? -1 : 1
    }

    // return bool
    equal(a, b) {
        return this.compare(a, b === 0)
    }
}