import { getWinnerFigure, getMatchesWinners, calcPercentage, getLargestStreak } from '../index';
import { matchesMock1, matchesMock2, matchesMock3, matchesMock4, winnersHashMock1, winnersHashMock2 } from './mockData'

describe('getWinnerFigure', () => {
    it('returns correct figure', () => {
        expect(getWinnerFigure('rock', 'scissor')).toEqual("rock");
        expect(getWinnerFigure('paper', 'scissor')).toEqual("scissor");
        expect(getWinnerFigure('rock', 'paper')).toEqual("paper");
    });

    it('returns null for draw', () => {
        expect(getWinnerFigure('rock', 'rock')).toBeNull();
        expect(getWinnerFigure('paper', 'paper')).toBeNull();
        expect(getWinnerFigure('scissor', 'scissor')).toBeNull();
    });
}
)

describe('getMatchesWinners', () => {
    it('returns correct winners hash', () => {
        expect(getMatchesWinners(matchesMock1)).toEqual(winnersHashMock1);
    });

    it('returns zeros for empty input', () => {
        expect(getMatchesWinners([])).toEqual(winnersHashMock2);
    });
}
)

describe('calcPercentage', () => {
    it('returns correct percentage', () => {
        expect(calcPercentage(56, 250)).toEqual(22.4);
        expect(calcPercentage(996, 250)).toEqual(398.4);

    });

    it('returns zero for zero as input', () => {
        expect(calcPercentage(0, 250)).toEqual(0);
    });
}
)

describe('getLargestStreak', () => {
    it('returns correct streak', () => {
        expect(getLargestStreak(matchesMock2)).toEqual({ winners: ['scissor'], count: 3 });
    });

    it('returns no data for empty input', () => {
        expect(getLargestStreak([])).toEqual({ winners: [''], count: 0 });
    });

    it('returns zero count and no winner for all draw', () => {
        expect(getLargestStreak(matchesMock3)).toEqual({ winners: [''], count: 0 });
    });

    it('returns all winners if they have the same count', () => {
        expect(getLargestStreak(matchesMock4)).toEqual({ winners: ['scissor', 'rock'], count: 3 });
    });
}
)