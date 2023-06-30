import Card from "./Card";
import "./MyWorks.css";
import im1 from "../../assets/im1.png";
import im2 from "../../assets/im2.png";
import im3 from "../../assets/im3.png";
import im4 from "../../assets/im4.png";
import { BsArrowRight } from "react-icons/bs";
import MoveToPage from "../MovmentManager";

const data = [
  {
    name: "Brand Journey Improvements",
    client: "Organc",
    work: ["Branding","Logo design"],
    image: im1,
  },
  {
    name: "Brand Grouping",
    client: "FR",
    work: ["Branding","Logo design"],
    image: im2,
  },
  {
    name: "NFT Glimps",
    client: "Rumanda",
    work: ["NFT Design"],
    image: im3,
  },
  {
    name: "Brand Suggestions",
    client: "T3d",
    work: ["NFT logo"],
    image: im4,
  },
];
const MyWorks = () => {
  return (
    <div className="MyWorks">
      <div className="title">My Projects Highlight</div>
      <div className="Explore"><div onClick={()=>MoveToPage(500)} className="Button">EXPLORE MORE<BsArrowRight/></div></div>
      <div className="CardContainer">

      {data.map((i)=><Card client={i.client} image={i.image} name={i.name} work={i.work}/>)}
      </div>
    </div>
  );
};

export default MyWorks;
