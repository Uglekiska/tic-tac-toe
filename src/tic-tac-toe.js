class TicTacToe {
    constructor() {
        this.CurrentPlayerSymbol = 'x';
        this.matrixField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() { //works
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) { //works
        if (this.matrixField[rowIndex][columnIndex]) {
            return;
        }
        this.matrixField[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
        this.CurrentPlayerSymbol = this.CurrentPlayerSymbol === 'x' ? 'o' : 'x';
    }

    isFinished() { //works
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() { //nu vrode works kekW
        if (this.matrixField[0][0] === this.matrixField[0][1] && this.matrixField[0][1] === this.matrixField[0][2]) {
            return this.matrixField[0][0];
        } else if(this.matrixField[1][0] === this.matrixField[1][1] && this.matrixField[1][1] === this.matrixField[1][2]) {
            return this.matrixField[1][0];
        } else if(this.matrixField[2][0] === this.matrixField[2][1] && this.matrixField[2][1] === this.matrixField[2][2]) {
            return this.matrixField[2][0];
        }else if(this.matrixField[0][0] === this.matrixField[1][0] && this.matrixField[1][0] === this.matrixField[2][0]) {
            return this.matrixField[0][0];
        }else if(this.matrixField[0][1] === this.matrixField[1][1] && this.matrixField[1][1] === this.matrixField[2][1]) {
            return this.matrixField[0][1];
        }else if(this.matrixField[0][2] === this.matrixField[1][2] && this.matrixField[1][2] === this.matrixField[2][2]) {
            return this.matrixField[0][2];
        }else if(this.matrixField[0][2] === this.matrixField[1][1] && this.matrixField[1][1] === this.matrixField[2][0]) {
            return this.matrixField[0][2];
        }else if(this.matrixField[0][0] === this.matrixField[1][1] && this.matrixField[1][1] === this.matrixField[2][2]) {
            return this.matrixField[0][0];
        } else {
            return null;
        }
    }

    noMoreTurns() { //works
        return this.matrixField.every(row => row.every(col => col));
    }

    isDraw() { //works
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) { //works
        return this.matrixField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;