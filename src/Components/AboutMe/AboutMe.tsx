import './AboutMe.css';
import personImage from '../../assets/PersonImage.png' 
import MoveToPage from '../MovmentManager';
const AboutMe = () => {
  return (
    <div className="AboutMe">
        <div className="RowCentered">
            <div className="ColumnCentered">
            <div className="ColumnStart">
                <div className="Title">Let’s get know<br/> about me closer</div>
                <div className="Description">Aaronn is a New York-based visual designer focusing on branding<br/> and visual identity. Her portfolio showcases her wide range of<br/> work, spanning books, posters and web design.</div>
                <div onClick={()=>MoveToPage(3000)}  className="Button">Discover More About Me</div>
            </div>
            </div>
            <div className="Image"><img className='PersonImage' src={personImage} alt="" /></div>
        </div>
    </div>
  )
}

export default AboutMe
