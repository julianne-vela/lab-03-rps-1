// IMPORT MODULES under test here:
import { getRandomThrow } from '../getRandomThrow.js';

const test = QUnit.test;

test('it should return rock when given 1 as the argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return paper when given 2 as the argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return scissors when given 3 as the argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
