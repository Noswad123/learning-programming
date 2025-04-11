/** Write a program that, given a word, computes the scrabble score for that word.
 * Letter                           Value
 * A, E, I, O, U, L, N, R, S, T       1
 * D, G                               2
 * B, C, M, P                         3
 * F, H, V, W, Y                      4
 * K                                  5
 * J, X                               8
 * Q, Z                               10
**/

const onePointer = new Set<string>();
const twoPointer = new Set<string>();
const threePointer = new Set<string>();
const fourPointer = new Set<string>();
const fivePointer = new Set<string>();
const eightPointer = new Set<string>();
const tenPointer = new Set<string>();

['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].forEach((letter) => onePointer.add(letter));
['D', 'G'].forEach((letter) => twoPointer.add(letter));
['B', 'C', 'M', 'P'].forEach((letter) => threePointer.add(letter));
['F', 'H', 'V', 'W', 'Y'].forEach((letter) => fourPointer.add(letter));
['K'].forEach((letter) => fivePointer.add(letter));
['J', 'X'].forEach((letter) => eightPointer.add(letter));
['Q', 'X'].forEach((letter) => tenPointer.add(letter));


function getValue(letter: string): number {
   const pointArray = [
       {
           letterSet: onePointer,
           value: 1
       }, 
       {
           letterSet: twoPointer,
           value: 2,
       },
       {
           letterSet: threePointer,
           value: 3
       },
       {
           letterSet: fourPointer,
           value: 4
       },
       {
           letterSet: fivePointer,
           value: 5
       },
       {
           letterSet: eightPointer,
           value: 8
       },
       {
           letterSet: tenPointer,
            value: 10
       }
    ];
   const index = pointArray.findIndex((pa) => pa.letterSet.has(letter))
   return pointArray[index].value;
}

export function makeItHappen(word: string): number {
    const pointsArray = word.split('').map((letter) => getValue(letter.toUpperCase()));
    const wordTotal = pointsArray.reduce((preValue, value) => preValue + value);
    return wordTotal;
}