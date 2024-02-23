import { ArrowBackOutlined } from '@mui/icons-material';
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://res.cloudinary.com/praveenbhat315/video/upload/v1708717814/video/Kehna_Galat_Galat___Ye_Jo_Halka_Halka_Suroor___Madhur_Sharma___Swapnil_Tare_PearlRecords_dx24xg.mp4"
            />
        </div>
    );
}
