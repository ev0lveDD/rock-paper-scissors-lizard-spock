import classes from "./pick-body.module.css";
import Image from "next/image";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function PickBody() {
    return(
        <div className={classes.pickBodyWraper}>
            <div className={classes.pickColumn}>
                <p>YOU PICKED</p>
                <button className={classes.paperButton}><Image src={paperIcon} alt="Paper Icon" height={75} width={75}/></button>
            </div>
            <div className={classes.pickResultColumn}>
                <h1>YOU WIN</h1>
                <button>PLAY AGAIN</button>
            </div>
            <div className={classes.pickColumn}>
                <p>THE HOUSE PICKED</p>
                <button className={classes.rockButton}><Image src={rockIcon} alt="Rock Icon" height={75} width={75}/></button>
            </div>
        </div>
    );
}