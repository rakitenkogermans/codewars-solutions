// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.items = collection;
    this.perPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.items.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.items.length / this.perPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
        return -1;
    }
    return this.items.slice(pageIndex * this.perPage, pageIndex * this.perPage + this.perPage).length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this.items.length - 1 || itemIndex < 0) {
        return -1
    }
    return Math.ceil((itemIndex + 1) / this.perPage) - 1;
}

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log('===============');
// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1
