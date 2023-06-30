import MoveToPage from "../MovmentManager";
import "./Presentation.css";
import { BsArrowRight } from "react-icons/bs";

const Presentation= () => {
  return (
    <div  className="Presentation">
      <div className="AlignCenterDescript">
        <div className="Description">Adaptive Logo Design for Your Brand</div>
      </div>
      <div className="ExploreButtonCentered">
        <div onClick={()=>MoveToPage(2100)} className="ExploreButton">
          Explore works<BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
