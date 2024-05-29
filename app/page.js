import Image from "next/image";
import classes from "./page.module.css";
import bgTriangle from "@/public/bg-triangle.svg";
import GameHeader from "@/Components/GameHeader/game-header";

import paperIcon from "@/public/icon-paper.svg";
import scissorsIcon from "@/public/icon-scissors.svg";
import rockIcon from "@/public/icon-rock.svg";

export default function Home() {
  return (
    <main className={classes.main}>
      <GameHeader />
      <div className={classes.gameTriangle}>
        <div className={classes.gameTriangleBackgroundWraper}>
          <Image className={classes.gameTriangleBackground} src={bgTriangle} alt="Background Triangle Image" height={200} width={200}/>
        </div>
        <div className={classes.gameTriangleButtonsWraper}>
          <div className={classes.gameButtonTopRow}>
            <button className={classes.paperButton}><Image src={paperIcon} alt="Paper Icon" height={50} width={50}/></button>
            <button className={classes.scissorsButton}><Image src={scissorsIcon} alt="Scissors Icon" height={50} width={50}/></button>
          </div>
          <div className={classes.gameButtonBottomRow}>
            <button className={classes.rockButton}><Image src={rockIcon} alt="Rock Icon" height={50} width={50}/></button>
          </div>
        </div>
      </div>
    </main>
  );
}
