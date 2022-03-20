class Vector {

    constructor(vectorArr) {
        this.vector = vectorArr;
    }

    add(v) {
        if (!this.isSameLength(v)) {
            throw Error('Vectors with different length!');
        }
        return new Vector(Array(v.vector.length).fill(0).map((_, i) => this.vector[i] + v.vector[i]));
    }

    subtract(v) {
        if (!this.isSameLength(v)){
            throw Error('Vectors with different length!');
        }
        return new Vector(Array(v.vector.length).fill(0).map((_, i) => this.vector[i] - v.vector[i]));
    }

    dot(v) {
        if (!this.isSameLength(v)){
            throw Error('Vectors with different length!');
        }
        return this.vector.reduce((acc, val, i) => (acc += (val*v.vector[i]), acc), 0);
    }

    norm() {
        return Math.sqrt(this.vector.reduce((acc, val, i) => (acc += (val**2), acc), 0));
    }

    isSameLength(v) {
        if (v.vector.length === this.vector.length)
            return true;
        return false;
    }

    equals(b) {
        if ( this.vector.length !== b.vector.length ) {
            return false;
        }

        for ( let i = 0, length = this.vector.length; i < length; i++ ) {
            if ( this.vector[ i ] !== b.vector[ i ] ) {
                return false;
            }
        }

        return true;
    };

    toString() {
        return '(' + this.vector.join(',') + ')';
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c));      // throws an error
