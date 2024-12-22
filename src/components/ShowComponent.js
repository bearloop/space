import "./ShowComponent.css";

const ShowComponent = (props) => {

  return (
    <div className="container">
      {props.items.map((mesg) => (
        <div className="message">
          <p className="p_message">{mesg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowComponent;
