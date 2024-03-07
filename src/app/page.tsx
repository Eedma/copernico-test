"use client";

import "./page.module.css";
import useStore from "../../store/store";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const updateAudio = useStore((state) => state.updateAudio);

    useEffect(() => {
        updateAudio("/audio/pagina1.mp3");
    }, [updateAudio]);

    return (
        <div
            className="h-full grow"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
        >
            <div>
                <Image
                    src="/images/target.png"
                    alt="target"
                    height={500}
                    width={500}
                />
            </div>

            <div>
                <ul className="list-disc">
                    <li>
                        flusso generale dell&apos;applicazione &apos;prova
                        candidati 2024&apos;
                    </li>
                    <li>procedure per gestire la prova pratica al meglio</li>
                </ul>
                <h2>vedremo nel dettaglio</h2>
                <ul className="list-disc">
                    <li>finalità della procedura di pubblicazione</li>
                    <li>ruoli, competenze e profili</li>
                    <li>operazioni nel sistema</li>
                </ul>
            </div>
        </div>
    );
}
