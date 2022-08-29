import { Match, Choice } from '../types'

export const getWinnerFigure = (choice1: Choice, choice2: Choice) => {
    if (choice1 === choice2) return null;
    if (choice1 === 'rock') {
        if (choice2 === 'scissor') {
            return 'rock';
        } else {
            return 'paper';
        }
    }
    if (choice1 === 'scissor') {
        if (choice2 === 'rock') {
            return 'rock';
        } else {
            return 'scissor';
        }
    }

    if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            return 'paper';
        } else {
            return 'scissor';
        }
    }
}

export const getMatchesWinners = (matches: Array<Match>) => {
    const winnerFigureMap = {
        'rock': 0,
        'paper': 0,
        'scissor': 0,
    }

    matches.forEach(({ choice1, choice2 }) => {
        const winner = getWinnerFigure(choice1, choice2);
        if (winner) winnerFigureMap[winner]++
    })

    return winnerFigureMap;
}

export const calcPercentage = (value: number, total: number) => {
    return (100 * value) / total;
}

export const getWinnersPercentages = (matches: Array<Match>) => {
    const wins = getMatchesWinners(matches);
    const totalMatches = matches.length;

    return {
        'rock': calcPercentage(wins['rock'], totalMatches),
        'paper': calcPercentage(wins['paper'], totalMatches),
        'scissor': calcPercentage(wins['scissor'], totalMatches),
    }
}

export const getLargestStreak = (matches: Array<Match>) => {
    let prevWinner = "";
    let count = 0;
    let result = { winners: [''], count: 0 };

    for (let i = 0; i < matches.length; i++) {
        const { choice1, choice2 } = matches[i]
        const winner = getWinnerFigure(choice1, choice2)

        if (!winner) {
            prevWinner = "";
            count = 0;
            continue;
        }

        if (winner === prevWinner) {
            count++;
        } else {
            count = 1
        }

        if (count > result.count) {
            result = { winners: [winner], count }
        } else if (count === result.count) {
            const newWinner = [...result.winners, winner]
            result = { winners: newWinner, count }
        }

        prevWinner = winner;
    }
    return result;
}

export const capitalizeWord = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;
