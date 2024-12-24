import "./Help.css";

const ContentLinks = () => {

  return (
    <div>

        <br />
        You can contact me through these channels:
        <br/>
        <br/>
        <div className="card-rating">
            <br/>
            LinkedIn: <a className="card-main-title" href={"https://www.linkedin.com/in/laz-ioannidis"}>{"https://www.linkedin.com/in/laz-ioannidis"}</a>
            <br/>
            Twitter: <a className="card-main-title" href={"https://x.com/lazioannidis"}>{"https://x.com/lazioannidis"}</a>
            <br/>
            Github: <a className="card-main-title" href={"https://github.com/bearloop"}>{"https://github.com/bearloop"}</a>
            
        </div>
        
      
      <br />
    </div>
  );
};


const ComLinks = () => {
  return (
    <div>
      <br></br>
      <div className="command-valid">user@home ~ % links</div>
      <ContentLinks />
    </div>
  );
};

export default ComLinks;
