import Image from "next/image";
import classes from "./page.module.css";

import GameHeader from "@/Components/GameHeader/game-header";
import GameBody from "@/Components/GameBody/game-body";
import PickBody from "@/Components/PickBody/pick-body";
import RulesModal from "@/Components/RulesModal/rules-modal";
import RulesButton from "@/Components/RulesButton/rules-button";

export default function Home() {
  return (
    <main className={classes.main}>
      <GameHeader />
      {/* <GameBody /> */}
      <PickBody />
      <RulesModal />
      <RulesButton />
    </main>
  );
}
