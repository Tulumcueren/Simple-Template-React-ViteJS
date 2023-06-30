import './Testimonial.css'
import virgolette from '../../assets/virgolette.png';
const Testimonial = () => {
  return (
    <div className="Testimonial">
      
      <div className="row">
        <div className="Title">Testimonial</div> <img src={virgolette} width={10} alt="" />
      </div>
      <div className="Description">“Aaronn was fantastic to work with from start to finish. We were looking for a<br/> simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”</div>
      <div className="Credit">-Martin lee</div>
      
    </div>
  )
}

export default Testimonial
