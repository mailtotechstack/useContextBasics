import { useTicTacToe } from "../context/ticTacToe";
export default function Button({ idx, winCol = "white" }) {
  const { board, makeMove, winner } = useTicTacToe();
  return (
    <button
        style={{backgroundColor:winCol}}
      className="h-15 w-15 rounded-lg outline-2 active:outline-amber-300 disabled:bg-amber-700"
      idx={idx}
      disabled = {winner !== "Not decided..." || board[idx] !== null}
      onClick={() => {
        makeMove(idx);
        console.log("Click")
      }}
    >
      {board[idx]}
    </button>
  );
}
