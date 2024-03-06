import "./page.module.css";
import { MediaDashboard } from "../components/MediaDashboard";

export default function Home() {
    return (
        <div>
            <MediaDashboard audioPath="/audio/pagina1.mp3" />
        </div>
    );
}
