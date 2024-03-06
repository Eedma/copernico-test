"use client";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

interface MediaDashboardProps {
    audioPath: string;
}

export function MediaDashboard({ audioPath }: MediaDashboardProps) {
    /* const audio = new Audio(audioPath);
    const audioRef = useRef(audio); */
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [toggleButtonLabel, setToggleButtonLabel] = useState("play");

    useEffect(() => {
        setAudio(new Audio(audioPath));

        // only run once on the first render on the client
    }, []);

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
            <Button label="avanti" />
        </div>
    );
}
