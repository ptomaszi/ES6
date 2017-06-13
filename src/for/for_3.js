const arrayLike = { length: 2, 0: 'a', 1: 'b' };

for (const x of arrayLike) {
    console.log(x);
}

for (const x of Array.from(arrayLike)) {
    console.log(x);
}