import classes from "./player-pick-column.module.css";
import Image from "next/image";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function PlayerPickColumn({text, playerPick, playerName, winner}) {
    return(
        <div className={classes.pickColumn}>
            <p>{text}</p>
            {playerPick ? 
                <button className={playerPick === "paper" ? classes.paperButton : playerPick === "scissors" ? classes.scissorsButton : playerPick === "rock" ? classes.rockButton : null} >
                    <Image 
                        src={playerPick === "paper" ? paperIcon : playerPick === "scissors" ? scissorsIcon : playerPick === "rock" ? rockIcon : null} 
                        alt={playerPick + " Icon"} 
                        className={classes.buttonIcon}/>
                </button>
            : <div className={classes.pickLoaderContainer}><div className={classes.pickLoader}></div></div>}
            <div className={winner==playerName ? classes.circleWave : classes.noWave}></div>
            <div className={winner==playerName ? classes.circleWave2 : classes.noWave}></div>
            <div className={winner==playerName ? classes.circleWave3 : classes.noWave}></div>
        </div>
    );
}