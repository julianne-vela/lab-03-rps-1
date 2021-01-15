import {
    getRandomThrow,
    doesUserWin
} from '../function-utils.js';

const test = QUnit.test;

test('it should return rock when given 1, paper when given 2, and scissors when given 3 as the argument', (expect) => {
    const expected = 'rock';
    const expected2 = 'paper';
    const expected3 = 'scissors';

    const actual = getRandomThrow(1);
    const actual2 = getRandomThrow(2);
    const actual3 = getRandomThrow(3);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

// DRAW TESTS
test('Result should be draw when player and computer throws are the same', (assert) => {
    assert.strictEqual(doesUserWin('rock', 'rock'), 'draw', ['Results should be draw']);
    assert.strictEqual(doesUserWin('paper', 'paper'), 'draw', ['Results should be draw']);
    assert.strictEqual(doesUserWin('scissors', 'scissors'), 'draw', ['Results should be draw']);
});

// LOSE TESTS
test('Result should be lose when p=rock & c=paper or p=paper & c=scissors or p=scissors & c=rock', (assert) => {
    assert.strictEqual(doesUserWin('rock', 'paper'), 'lose', ['Results should be lose']);
    assert.strictEqual(doesUserWin('paper', 'scissors'), 'lose', ['Results should be lose']);
    assert.strictEqual(doesUserWin('scissors', 'rock'), 'lose', ['Results should be lose']);
});

// WIN TESTS
test('Result should be win when player throws rock, paper, and scissors while computer throws scissors, rock, and paper', (assert) => {
    assert.strictEqual(doesUserWin('rock', 'scissors'), 'win', ['Results should be win']);
    assert.strictEqual(doesUserWin('paper', 'rock'), 'win', ['Results should be win']);
    assert.strictEqual(doesUserWin('scissors', 'paper'), 'win', ['Results should be win']);
});
