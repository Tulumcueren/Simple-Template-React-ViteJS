import "./Card.css";
interface Props {
  image: string;
  name: string;
  client: string;
  work: Array<string>;
}
const Card = ({ name, client, work, image }: Props) => {
  return (
    <div className="Card">
      <img src={image} alt="" />
      <div className="DataColumn">
        <div className="Name">
          <div>{name}</div>
          <div className="yellowLine"></div>
        </div>
        <div className="Client">Client: <div className="colorWhite">{client}</div> </div>
        <div className="Work">
          Work:
          {work.map((i) => (
            <div className="colorWhite">{i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
