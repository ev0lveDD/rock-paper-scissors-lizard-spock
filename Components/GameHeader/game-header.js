import Image from "next/image";
import classes from "./game-header.module.css";
import logo from "@/public/logo.svg"

export default function GameHeader () {
    return(
        <div className={classes.gameHeader}>
            <Image className={classes.gameLogo} src={logo} alt="Game Logo" height={70} width={100}/>
            <div className={classes.gameHeaderResultWrapper}>
                <p>SCORE</p>
                <h1>12</h1>
            </div>
        </div>
    );
}