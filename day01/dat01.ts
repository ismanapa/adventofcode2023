import day1 from './input.txt';

function sanitize(input: string): string {
    return input
        .replaceAll('eightwo', 'eighttwo')
        .replaceAll('twone', 'twoone')
        .replaceAll('nineight', 'nineeight')
        .replaceAll('threeight', 'threeeight')
        .replaceAll('sevenine', 'sevennine')
        .replaceAll('oneight', 'oneeight')
        .replaceAll('fiveight', 'fiveeight')
}

const digits =  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const regex = new RegExp(digits.map((digit, index) => `${digit}|${index}`).join('|'), 'g');

const mapping = day1.split('\n').map((line: string, index) => {
    const matches = sanitize(line).match(regex)!;
    let first = matches.at(0) ?? '0';
    let last = matches.at(-1) ?? first;
    let firstDigit = parseInt(first) || digits.indexOf(first);
    let lastDigit = parseInt(last) || digits.indexOf(last);
    return `${firstDigit}${lastDigit}`;
});

const answer = mapping.reduce((acc: number, curr: string) => {
    return acc + parseInt(curr);
}, 0);

console.info(answer);