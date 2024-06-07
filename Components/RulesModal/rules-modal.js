'use client';
import Image from "next/image";
import classes from "./rules-modal.module.css";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

import closeIcon from "@/public/icon-close.svg";
import rulesImage from "@/public/image-rules-bonus.svg"

export default function RulesModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return(
        <>
            {modal &&
                <dialog className={classes.modalWraper}>
                    <div className={classes.contentWraper}>
                        <div className={classes.modalHeader}>
                            <h1>RULES</h1>
                            <Link href={"/"}>
                                <button>
                                    <Image className={classes.moduleCloseIcon} alt="Close Icon" src={closeIcon}/>
                                </button>
                            </Link>
                        </div>
                        <Image className={classes.gameRulesImage} alt="Rules Image" src={rulesImage}/>
                    </div>
                </dialog>
            }
        </>
    );
}