'use client';
import classes from "./game.module.css";
import { useState, useEffect } from "react";
import {Suspense} from "react";

import GameHeader from "@/Components/GameHeader/game-header";
import GameBody from "@/Components/GameBody/game-body";
import PickBody from "@/Components/PickBody/pick-body";
import RulesModal from "@/Components/RulesModal/rules-modal";
import RulesButton from "@/Components/RulesButton/rules-button";

export default function Game() {

    const [playerPick, setPlayerPick] = useState(null);
    const [housePick, setHousePick] = useState(null);
    const [winner, setWinner] = useState(null);
    const [score, setScore] = useState(0);

    function getHousePick() {
        setTimeout(houseRoll, 3000);
    }

    useEffect(()=>{
        setTimeout(checkWinner,2000);
    },[housePick]);

    useEffect(() => {
        if(winner==="Player"){
            setScore(previous => previous +1);
        }
    }, [winner])

    function houseRoll(){
        const roll = Math.floor(Math.random() * 3);
        if(roll===0){
            setHousePick("rock");
        } else if(roll===1) {
            setHousePick("paper")
        } else {
            setHousePick("scissors")
        }
    }

    function checkWinner() {
        if(playerPick === "rock" & housePick === "paper") {
            setWinner("House");
        } else if (playerPick === "rock" & housePick === "scissors") {
            setWinner("Player")
        } else if (playerPick === "rock" & housePick === "rock") {
            setWinner("Draw")
        } else if (playerPick === "paper" & housePick === "rock") {
            setWinner("Player")
        } else if (playerPick === "paper" & housePick === "scissors") {
            setWinner("House")
        } else if (playerPick === "paper" & housePick === "paper") {
            setWinner("Draw")
        } else if (playerPick === "scissors" & housePick === "paper") {
            setWinner("Player")
        } else if (playerPick === "scissors" & housePick === "rock") {
            setWinner("House")
        } else if (playerPick === "scissors" & housePick === "scissors") {
            setWinner("Draw")
        } else {
            null;
        }
        console.log(housePick);
        console.log(playerPick);
    }

    function restartGame() {
        setPlayerPick(null);
        setHousePick(null);
        setWinner(null);
    }

    return (
        <main className={classes.main}>
        <GameHeader score={score}/>
        {/* <GameBody /> */}

        {playerPick ? 
        <PickBody playerPick={playerPick} housePick={housePick} winner={winner} restartGame={restartGame}/>
         : 
        <GameBody setPlayerPick={setPlayerPick}  getHousePick={getHousePick}/>}
        <Suspense fallback={<>Loading...</>}>
            <RulesModal />
        </Suspense>
        <RulesButton />
        </main>
    );
}
