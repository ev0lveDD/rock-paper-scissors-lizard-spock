import Image from "next/image";
import classes from "./game-body.module.css";

import bgPentagon from "@/public/bg-pentagon.svg";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";
import spockIcon from "@/public/icon-spock.svg";
import lizardIcon from "@/public/icon-lizard.svg";

export default function GameBody({setPlayerPick, getHousePick}) {
    return(
        <div className={classes.gameBody}>
            <div className={classes.gameBodyBackgroundWraper}>
                <Image className={classes.gameBodyBackground} src={bgPentagon} alt="Background Pentagon Image"/>
            </div>
            <div className={classes.gameBodyButtonsWraper}>
                <div className={classes.gameButtonTopRow}>
                    <button className={classes.scissorsButton} onClick={()=>{setPlayerPick("scissors");getHousePick()}}>
                        <Image src={scissorsIcon} alt="Scissors Icon" height={40} width={35}/>
                    </button>
                </div>
                <div className={classes.gameButtonMiddleRow}>
                    <button className={classes.spockButton} onClick={()=>{setPlayerPick("spock");getHousePick()}}>
                        <Image src={spockIcon} alt="Spock Icon" height={40} width={35}/>
                    </button>
                    <button className={classes.paperButton} onClick={()=>{setPlayerPick("paper");getHousePick()}}>
                        <Image src={paperIcon} alt="Paper Icon" height={40} width={35}/>
                    </button>
                </div>
                <div className={classes.gameButtonBottomRow}>
                    <button className={classes.lizardButton} onClick={()=>{setPlayerPick("lizard");getHousePick()}}>
                        <Image src={lizardIcon} alt="Lizard Icon" height={40} width={40}/>
                    </button>
                    <button className={classes.rockButton} onClick={()=>{setPlayerPick("rock");getHousePick()}}>
                        <Image src={rockIcon} alt="Rock Icon" height={40} width={35}/>
                    </button>
                </div>
            </div>
        </div>
    );
}