'use client';
import classes from "./pick-body.module.css";
import Image from "next/image";
import { useState } from "react";

import PlayerPickColumn from "../PlayerPickColumn/player-pick-column";
import PickResultColumn from "../PickResultColumn/pick-result-column";


export default function PickBody({playerPick, housePick, winner, restartGame}) {

    return(
        <div className={classes.pickBodyWraper}>
            <PlayerPickColumn 
                text="YOU PICKED"
                playerPick={playerPick}
                playerName="Player"
                winner={winner}
            />
            {winner ? <PickResultColumn winner={winner} restartGame={restartGame}/> : null}
            <PlayerPickColumn 
                text="THE HOUSE PICKED"
                playerPick={housePick}
                playerName="House"
                winner={winner}
            />
        </div>
    );
}