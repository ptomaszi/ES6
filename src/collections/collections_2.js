// Example 1 - Array.prototype.find
const find = [6, -5, 8].find(x => x < 0)
console.log(find);

// Example 2 - Array.prototype.findIndex
const index = [6, -5, 8].findIndex(x => x < 0)
console.log(index);

// Example 3 - Array.prototype.fill
console.log([1, 2, 3].fill(4));
console.log([1, 2, 3].fill(4, 1));
console.log([1, 2, 3].fill(4, 1, 2));

// Example 4 - Array.prototype.filter
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query) {
    return fruits.filter((el) =>
     el.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
}

console.log(filterItems('ap'));
console.log(filterItems('an'));