import { create } from "zustand";

type State = {
    page: number;
    audio: string;
};

type Action = {
    updatePage: (page: State["page"]) => void;
    updateAudio: (audio: State["audio"]) => void;
};

const useStore = create<State & Action>((set) => ({
    page: 1,
    audio: "",
    updatePage: (page) => set(() => ({ page: page })),
    updateAudio: (audio) => set(() => ({ audio: audio })),
}));

export default useStore;
