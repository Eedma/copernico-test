"use client";

import { useRef } from "react";

interface AudioProps {}

export default function Audio() {
    const audioRef = useRef(null);
    return (
        <audio ref={audioRef} src="/audio/pagina1.mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    );
}
