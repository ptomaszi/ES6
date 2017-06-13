// Example 1
function selectEntries(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;

    console.log(start);
    console.log(end);
    console.log(step);
}

selectEntries({
    start: 10,
    end: 20
});

// Example 2
function selectEntries1({start=0, end=-1, step=-1}) {    
    console.log(start);
    console.log(end);
    console.log(step);
}

selectEntries1({
    start: 10,
    end: 20
});

// Example 3
function selectEntries2(options) {
    options = options || {};
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;    
    console.log(start);
    console.log(end);
    console.log(step);
}

function selectEntries2({ start=0, end=-1, step=1 } = {}) {
    console.log(start);
    console.log(end);
    console.log(step);
}

selectEntries2();