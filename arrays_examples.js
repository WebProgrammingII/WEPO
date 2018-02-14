/**
    Array examples
*/

/* Basic methods */

    // 1. Join an array with -
    const joinString = [1, 2, 3, 4].join('-');

    // 2. Reverse an array
    [1, 2, 3, 4].reverse();

    // 3. Sort an array
    [4, 2, 3, 1].sort();

    // 4. Sort an array with a reverse sort function
    [1, 4, 2, 3].sort((a, b) => a < b);

    // 5. Use concat with empty array and three params
    [].concat([1, 2], [3, 4], [5, 6]);

    // 6. Use concat with array and then comma-separated params
    [].concat(1, 2, [3, 4, 5, 6]);

/* More advanced methods */

    // 1. Map a square function
    [1, 2, 3, 4].map(e => e * e);

    // 2. Map a function which takes an array of lowercase brands and makes all uppercase
    ['nike', 'adidas', 'puma'].map(m => m.toUpperCase());

    // 3. Filter a function for valid SSN with the correct length
    ['1111902319', '1011892319', 'NONVALIDSSN'].filter(m => /[0-9]{10}/g.test(m));

    // 4. Filter all odd numbers which are larger than 5
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(e => e % 2 !== 0 && e > 5);

    // 5. Evaluate if every element are a typeof function (should pass)
    [() => {}, () => {}].every(e => typeof e === 'function');

    // 6. Evaluate if every element is larger than 10
    [1, 2, 3, 4, 20].every(e => e > 10);

    // 7. Evaluate if some elements are squared equal to 4
    [1, 2, 3, 4].some(e => e * e === 4);

    // 8. Reduce all elements and calculate the average
    const averageArray = [1, 2, 3, 4];
    const average = averageArray.reduce((total, elem) => total + elem) / averageArray.length;

    // 9. Reduce a reversed string
    ['o', 'l', 'l', 'e', 'H'].reduceRight((total, elem) => total + elem);

    // 10. Use indexOf to find a specific element within an array

    // 10.1. integer
    [1, 2, 3, 4].indexOf(3);

    // 10.2. object
    const elem = { a: 1, b: 2};
    const array = [elem];

    array.lastIndexOf(elem);
