const testing = require('../RPS.js');
describe("whoWon", function () {

     test("returns 'TIE!' if P1 === P2", function () {
        let output = testing.whoWon('rock', 'rock');
        expect(output).toEqual("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
        let output = testing.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
        let output = testing.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = scissors & p2 = rock", function () {
        let output = testing.whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Invalid input' if !array.includes(player1) || !array.includes(player2", function () {
        let array=['rock','paper','scissors'];
        let output = testing.whoWon('something', 'rock');
        expect(output).toBe("Invalid Data.");
    });
});