'use client';
import classes from "./pick-body.module.css";
import Image from "next/image";
import { useState } from "react";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function PickBody({playerPick, housePick, winner, restartGame}) {

    return(
        <div className={classes.pickBodyWraper}>
            <div className={classes.pickColumn}>
                <p>YOU PICKED</p>
                <button className={playerPick === "paper" ? classes.paperButton : playerPick === "scissors" ? classes.scissorsButton : playerPick === "rock" ? classes.rockButton : null} >
                    <Image 
                    src={playerPick === "paper" ? paperIcon : playerPick === "scissors" ? scissorsIcon : playerPick === "rock" ? rockIcon : null} 
                    alt={playerPick + " Icon"} 
                    className={classes.buttonIcon}/>
                </button>
                <div className={winner==="Player" ? classes.circleWave : classes.noWave}></div>
                <div className={winner==="Player" ? classes.circleWave2 : classes.noWave}></div>
                <div className={winner==="Player" ? classes.circleWave3 : classes.noWave}></div>
            </div>
            {winner ? 
                <div className={classes.pickResultColumn}>
                    <h1>{winner==="Player" ? "YOU WIN" : winner==="House" ? "YOU LOSE" : "DRAW"}</h1>
                    <button onClick={() => {restartGame()}}>PLAY AGAIN</button>
                </div> 
                : null}

            <div className={classes.pickColumn}>
                <p>THE HOUSE PICKED</p>
                {housePick ? 
                    <button className={housePick === "paper" ? classes.paperButton : housePick === "scissors" ? classes.scissorsButton : housePick === "rock" ? classes.rockButton : null} >
                        <Image 
                            src={housePick === "paper" ? paperIcon : housePick === "scissors" ? scissorsIcon : housePick === "rock" ? rockIcon : null} 
                            alt={housePick + " Icon"} 
                            className={classes.buttonIcon}/>
                    </button>
                : <div className={classes.pickLoaderContainer}><div className={classes.pickLoader}></div></div>}
                <div className={winner==="House" ? classes.circleWave : classes.noWave}></div>
                <div className={winner==="House" ? classes.circleWave2 : classes.noWave}></div>
                <div className={winner==="House" ? classes.circleWave3 : classes.noWave}></div>
            </div>
        </div>
    );
}