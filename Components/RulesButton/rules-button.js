import classes from "./rules-button.module.css";
import Link from "next/link";

export default function RulesButton() {
    return(
    <Link href="?modal=true">
        <button className={classes.rulesButton}>RULES</button>
    </Link>
    );
}