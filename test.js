// const {sum} = require('./app.js');


// test('adds 14 + 9 equal 23', () => {
//     const total = sum(14,9);
//     expect(total).toBe(23);
// });



test("One euro should be 1.07 dollars", function() {
    
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("3.745 dollars should be 586,0925", function(){

    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(3.745);
    expect(yenes).toBe(586.0925);

});

test("3.745 dollars should be 509,900475", function(){
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(586.0925);
    expect(pounds).toBe(509.900475);
});