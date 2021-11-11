import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai";
import profile from './resources/profile.jpeg';

export default function(){
    return(
        <div className="feed">
            <div className="feedForm">
               <img src={profile} />
               <input type="text" placeholder="No que você esta pensando?"/>
            </div>
            <div className="feedIcons">
              <div className="iconSingle">
                <AiFillVideoCamera />
                <span>Video ao Vivo</span>
              </div>
              <div className="iconSingle img">
                <AiOutlineFileImage />
                <span>Foto/Video</span>
              </div>
              <div className="iconSingle emoji">
                <AiOutlineMeh  />
                <span>Video ao Vivo</span>
              </div>
            </div>
        </div>
    );
}