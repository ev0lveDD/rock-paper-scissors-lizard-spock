import classes from "./pick-result-column.module.css";

export default function PickResultColumn({winner, restartGame}) {
    return(
        <div className={classes.pickResultColumn}>
            <h1>{winner==="Player" ? "YOU WIN" : winner==="House" ? "YOU LOSE" : "DRAW"}</h1>
            <button onClick={() => {restartGame()}}>PLAY AGAIN</button>
        </div> 
    );
}