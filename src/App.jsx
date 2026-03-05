import { useEffect, useState } from "react";
import TicTacToe from "./component/TicTacToe";
import { TicTacToeProvider, useTicTacToe } from "./context/ticTacToe";
export default function App(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState("Not decided...");
  const [winningPattern, setWinningPattern] = useState([]);
  
  const makeMove = (idx)=>{
    if(board[idx] || winner !== "Not decided...") return;
    const newBoard = [...board];
    newBoard[idx]= isNext? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };

  const checkWinner = (board)=>{
    const pattern= [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let i = 0; i<pattern.length; i++){
      const [a,b,c] = pattern[i];
      if(board[a] && board[a] === board[b] && board[b] === board[c]){
        setWinningPattern([a,b,c]);
        return board[a];
      }
    }
    setWinner("Not decided...");
    return null;
  }

  useEffect(() => {
  const result = checkWinner(board); // यहाँ board की लेटेस्ट वैल्यू मिलेगी
  if (result) {
    setWinner(result);
  } else if (!board.includes(null)) {
    setWinner("Draw");
  }
}, [board]);

  const handleReset =()=>{
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner("Not decided...");
    setWinningPattern([]);
  };

  return(<TicTacToeProvider value={{board, winningPattern, setBoard, makeMove, checkWinner , winner}}>
   <div className="flex justify-center flex-col items-center">
     <p ><span className="font-bold text-xl" >Winner is : </span>{winner}</p>
    <TicTacToe />
    <button onClick={handleReset} className=" font-bold m-5 px-5 py-2 rounded-md active:outline-2 outline-red-400 bg-blue-300">Reset</button>
  
   </div>
  </TicTacToeProvider>);
}