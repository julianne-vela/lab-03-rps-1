export function getRandomThrow(compThrow) {
    return compThrow === 1 ? 'rock'
        : compThrow === 2 ? 'paper'
            : 'scissors';
}

export function doesUserWin(player, computer) {
    const rockScissorsWin = (player === 'rock' && computer === 'scissors');
    const scissorsPaperWin = (player === 'scissors' && computer === 'paper');
    const paperRockWin = (player === 'paper' && computer === 'rock');
    const rockPaperLose = (player === 'rock' && computer === 'paper');
    const scissorsRockLose = (player === 'scissors' && computer === 'rock');
    const paperScissorsLose = (player === 'paper' && computer === 'scissors');

    if (rockScissorsWin || scissorsPaperWin || paperRockWin) {
        return 'win';
    } else if (rockPaperLose || scissorsRockLose || paperScissorsLose) {
        return 'lose';
    } return 'draw';

}