'use client';
import classes from "./pick-body.module.css";
import Image from "next/image";
import { useState } from "react";

import PlayerPickColumn from "../PlayerPickColumn/player-pick-column";
import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function PickBody({playerPick, housePick, winner, restartGame}) {

    return(
        <div className={classes.pickBodyWraper}>
            <PlayerPickColumn 
                text="YOU PICKED"
                playerPick={playerPick}
                playerName="Player"
                winner={winner}
            />
            {winner ? 
                <div className={classes.pickResultColumn}>
                    <h1>{winner==="Player" ? "YOU WIN" : winner==="House" ? "YOU LOSE" : "DRAW"}</h1>
                    <button onClick={() => {restartGame()}}>PLAY AGAIN</button>
                </div> 
                : null}
            <PlayerPickColumn 
                text="THE HOUSE PICKED"
                playerPick={housePick}
                playerName="House"
                winner={winner}
            />
        </div>
    );
}