import Image from "next/image";
import classes from "./game-body.module.css";

import bgTriangle from "@/public/bg-triangle.svg";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function GameBody({setPlayerPick, getHousePick}) {
    return(
        <div className={classes.gameBody}>
            <div className={classes.gameBodyBackgroundWraper}>
                <Image className={classes.gameBodyBackground} src={bgTriangle} alt="Background Triangle Image" height={200} width={200}/>
            </div>
            <div className={classes.gameBodyButtonsWraper}>
                <div className={classes.gameButtonTopRow}>
                    <button className={classes.paperButton} onClick={()=>{setPlayerPick("paper");getHousePick()}}>
                        <Image src={paperIcon} alt="Paper Icon" height={50} width={50}/>
                    </button>
                    <button className={classes.scissorsButton} onClick={()=>{setPlayerPick("scissors");getHousePick()}}>
                        <Image src={scissorsIcon} alt="Scissors Icon" height={50} width={50}/>
                    </button>
                </div>
                <div className={classes.gameButtonBottomRow}>
                    <button className={classes.rockButton} onClick={()=>{setPlayerPick("rock");getHousePick()}}>
                        <Image src={rockIcon} alt="Rock Icon" height={50} width={50}/>
                    </button>
                </div>
            </div>
        </div>
    );
}