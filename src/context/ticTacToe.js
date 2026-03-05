import { createContext, useContext } from "react";

export const ticTacToeContext = createContext({
    board: Array(9).fill(null),
    isNext: true,
    makeMove: ()=>{},
    checkWinner:()=>{},
    winner : "",
    winningPattern: []
});

export const TicTacToeProvider = ticTacToeContext.Provider;

export const useTicTacToe = ()=>{
    const context = useContext(ticTacToeContext);
    if(!context){
        throw new Error ("useTicTacToe must be used within a TicTacToeProvider")
    }
    return context;
};