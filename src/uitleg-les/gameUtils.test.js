import {getRank, addScores, hasWon, getHighScore} from './gameUtils';


test('Geef noob terug met score 0', () => {
    const result = getRank(0);
    expect(result).toBe('Noob')
})

test('Geef pro terug met score 55', () => {
    const result = getRank(55);
    expect(result).toBe('Pro')
})

test("tel twee scores bij elkaar op", () => {
    const result = addScores(20, 30);
    expect(result).toBe(50)
})