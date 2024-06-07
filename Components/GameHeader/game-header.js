import Image from "next/image";
import classes from "./game-header.module.css";
import logo from "@/public/logo-bonus.svg"

export default function GameHeader ({score}) {
    return(
        <div className={classes.gameHeader}>
            <Image className={classes.gameLogo} src={logo} alt="Game Logo" height={75} width={75}/>
            <div className={classes.gameHeaderResultWrapper}>
                <p>SCORE</p>
                <h1>{score}</h1>
            </div>
        </div>
    );
}