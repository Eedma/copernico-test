"use client";

import useStore from "../../store/store";

export default function Header() {
    const page = useStore((state) => state.page);
    return (
        <div className="lg:flex lg:items-center lg:justify-between bg-amber-800 text-white">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
                    Titolo corso
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 bg-amber-500">
                    <div className="mt-2 flex items-center text-sm">
                        Titolo lezione
                    </div>
                </div>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 bg-amber-800  justify-center">
                    <div className="mt-2 flex items-center text-sm">
                        Titolo pagina
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="sm:ml-3">{page}/3</span>
            </div>
        </div>
    );
}
