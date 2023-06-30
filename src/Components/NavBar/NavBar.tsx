import "./NavBar.css";
import MoveToPage from "../MovmentManager";

const NavBar= () => {

  
  return (
    <nav>
      <div className="Logo">AAR<div className="SpecialO">O</div>NN <div className="special"><div></div></div></div>
      <div className="Navigations">
        <div onClick={()=>MoveToPage(200)} className="Section" >
          HOME
        </div>
        <div onClick={()=>MoveToPage(1100)}  className="Section">
          ABOUT ME
        </div>
        <div onClick={()=>MoveToPage(2100)}  className="Section">
          MY WORKS
        </div>
        <div onClick={()=>MoveToPage(6000)}  className="SectionEnd">
          CONTACT
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
