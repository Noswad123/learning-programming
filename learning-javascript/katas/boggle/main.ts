/*  Boggle Rules
    Boggle is a game that consists of a 4x4 grid of letters. The purpose of the game is to find words within this 4x4 square.
    Words should be created by using adjoining letters – the letters must touch each other – and must be able to connect to
    each other in the proper sequence to spell the word correctly. The letters may join in any direction – horizontally,
    vertically, or diagonally. This means that the letters can be above or below, side by side, or touching corners.
    Words can be spelled in any direction, including backwards. You may not use a letter cube multiple times in a single word.
*/

/* Question
    Ignoring a dictionary, write a function that given a boggle board and a word returns true if the word is in the board, and false if it is not.
*/

// Example Board
/*
    [H] [P] [G] [E]
    [O] [O] [A] [R]
    [I] [T] [P] [U]
    [S] [Y] [H] [N]
*/


type Boggle = string[][];
export const boggle = [
    ['H', 'P', 'G', 'E'],
    ['O', 'O', 'A', 'R'],
    ['I', 'T', 'P', 'U'],
    ['S', 'Y', 'H', 'N'],
];

const sizeOfBoggle = 4;
export function isWordInBoggle(word: string, boggle: Boggle) {
    if (word[0] === undefined) {
        return false;
    }

    const usedSquares = Array.from(Array(sizeOfBoggle), () => Array(sizeOfBoggle).fill(false));

    for(let x = 0; x < sizeOfBoggle; ++x) {
        for(let y = 0; y < sizeOfBoggle; ++y) {
            if (boggle[x][y] === word[0]) {
                usedSquares[x][y] = true;
                if (recurseInBoggle(x, y, word,1, boggle, usedSquares)) {
                    return true;
                }
                usedSquares[x][y] = false;
            }
        }
    }
  return false;   
}

function recurseInBoggle(x: number, y: number, word: string, index: number, boggle: Boggle, usedSquares: boolean[][]) {
    if (word[index] === undefined) {
        return true;
    }

    for(let adjX = x-1; adjX <= x+1; adjX++) {
        for(let adjY = y-1; adjY <= y+1; adjY++) {
            if(
                adjX >= 0 && adjX < sizeOfBoggle && //Check for out of bounds
                adjY >= 0 && adjY < sizeOfBoggle && 
                usedSquares[adjX][adjY] === false && //Check to avoid using a square twice
                boggle[adjX][adjY] === word[index] //Check if we find a matching letter
            )  {
                    usedSquares[adjX][adjY] = true;
                    if (recurseInBoggle(adjX,adjY,word,index+1, boggle,usedSquares)) {
                        return true;
                    }
                    usedSquares[adjX][adjY] = false;
                }
        }
    }
    return false;

}