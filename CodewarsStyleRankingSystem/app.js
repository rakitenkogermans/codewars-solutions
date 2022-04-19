class User {

    constructor() {
        this.rank = -8;
        this.progress = 0;
        this.rankUpProgress = 100;
        this.highestRank = 8;
    }

    incProgress(kata) {
        if (kata === 0 || kata > this.highestRank || kata < -this.highestRank)
            throw new RangeError('Out of range');
        if (this.rank === this.highestRank)
            return;

        let rankDiff = (kata > 0 && this.rank < 0) || (kata < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(kata) : kata - this.rank;
        if (kata > 0 && this.rank < 0)
            rankDiff--;
        if (kata < 0 && this.rank > 0)
            rankDiff = -rankDiff;
        if (rankDiff > 0)
            this.progress += 10 * rankDiff * rankDiff;
        if (rankDiff === 0)
            this.progress += 3;
        if (rankDiff < -1)
            this.progress += 1;

        if (this.progress > this.rankUpProgress && this.rank < this.highestRank){
            this.rank += Math.trunc(this.progress / this.rankUpProgress);
            if (this.rank === 0)
                this.rank++;
            this.progress %= this.rankUpProgress;
        }

        if (this.rank === this.highestRank)
            this.progress = 0;
    }
}

const user = new  User();
console.log('progress',user.progress);
console.log('rank',user.rank);
console.log(user.incProgress(-1));
console.log('progress',user.progress);
console.log('rank',user.rank);
