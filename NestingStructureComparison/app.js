Array.prototype.sameStructureAs = function (other) {
    if (this.length !== other.length) {
        return false;
    }
    for (const [i, val] of this.entries()) {
        if (Array.isArray(this[i]) && Array.isArray(other[i])) {
            if (!this[i].sameStructureAs(other[i])) {
                return false;
            }
        } else if (!Array.isArray(this[i]) && Array.isArray(other[i])) {
            return false;
        } else if (Array.isArray(this[i]) && !Array.isArray(other[i])) {
            return false;
        }
    }
    return true
};

console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));
console.log([1,[1,1]].sameStructureAs( [[2,2],2] ));
