"use client";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import useStore from "../../store/store";
import Link from "next/link";

export function MediaDashboard() {
    /* const audio = new Audio(audioPath);
    const audioRef = useRef(audio); */
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [toggleButtonLabel, setToggleButtonLabel] = useState("play");
    const audioPath = useStore((state) => state.audio);

    useEffect(() => {
        setAudio(new Audio(audioPath));
    }, [audioPath]);

    const audioToggler = () => {
        if (audio?.paused) {
            audio?.play();
            setToggleButtonLabel("pausa");
        } else if (audio?.played) {
            audio?.pause();
            setToggleButtonLabel("play");
        }
    };

    return (
        <div className="flex justify-end">
            <Button label="ripeti" isDisabled />
            <Button onClick={audioToggler} label={toggleButtonLabel} />
            <Button label="indietro" />
            <Link href={"/2"}>
                <Button label="avanti" />
            </Link>
        </div>
    );
}
