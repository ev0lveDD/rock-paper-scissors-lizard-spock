'use client';
import classes from "./pick-body.module.css";
import Image from "next/image";
import { useState } from "react";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function PickBody() {

    const [winner, setWinner] = useState("Player");

    return(
        <div className={classes.pickBodyWraper}>
            <div className={classes.pickColumn}>
                <p>YOU PICKED</p>
                <button className={classes.paperButton}><Image src={paperIcon} alt="Paper Icon" height={75} width={75}/></button>
                <div className={winner==="Player" ? classes.circleWave : classes.noWave}></div>
                <div className={winner==="Player" ? classes.circleWave2 : classes.noWave}></div>
                <div className={winner==="Player" ? classes.circleWave3 : classes.noWave}></div>
            </div>
            <div className={classes.pickResultColumn}>
                <h1>{winner==="Player" ? "YOU WIN" : "YOU LOSE"}</h1>
                <button onClick={() => {setWinner("House")}}>PLAY AGAIN</button>
            </div>
            <div className={classes.pickColumn}>
                <p>THE HOUSE PICKED</p>
                <button className={classes.rockButton}><Image src={rockIcon} alt="Rock Icon" height={75} width={75}/></button>
                <div className={winner==="House" ? classes.circleWave : classes.noWave}></div>
                <div className={winner==="House" ? classes.circleWave2 : classes.noWave}></div>
                <div className={winner==="House" ? classes.circleWave3 : classes.noWave}></div>
            </div>
        </div>
    );
}