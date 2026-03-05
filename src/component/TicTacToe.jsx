import Button from "./Button";
import { useTicTacToe} from "../context/ticTacToe";

export default function TicTacToe(){
    const {board, winningPattern}= useTicTacToe();
    return(<div className="grid grid-cols-3 gap-2 mt-5 w-50">
       
        {board.map((_, idx)=>{
            return (
                winningPattern.includes(idx)? <Button key={idx} idx={idx} winCol="green" />:<Button key={idx} idx={idx}/>
            )
        })}
    </div>);
}