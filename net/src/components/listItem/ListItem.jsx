import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined, } from '@mui/icons-material';
import { useState } from "react";

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://res.cloudinary.com/praveenbhat315/video/upload/v1708717814/video/Kehna_Galat_Galat___Ye_Jo_Halka_Halka_Suroor___Madhur_Sharma___Swapnil_Tare_PearlRecords_dx24xg.mp4";

    // let v = <video src="./video/1"></video>
    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://i.pinimg.com/564x/c8/b7/41/c8b7413ccd33544ab59691a09a7b4107.jpg"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>0 hour 9 mins</span>
                            <span className="limit">+16</span>
                            <span>2022</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium hic rem eveniet error possimus, neque ex doloribus.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    );
}
