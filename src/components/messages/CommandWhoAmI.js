import "./Help.css";



const ContentWhoAmI = () => {
  return (
    <div>
       <br />
        todo
        <br/>
        <br/>
        <div className="card-rating">
            {/* <br/>
            LinkedIn: <a className="card-main-title" href={"https://www.linkedin.com/in/laz-ioannidis"}>{"https://www.linkedin.com/in/laz-ioannidis"}</a>
            <br/>
            Twitter: <a className="card-main-title" href={"https://x.com/lazioannidis"}>{"https://x.com/lazioannidis"}</a>
            <br/>
            Github: <a className="card-main-title" href={"https://github.com/bearloop"}>{"https://github.com/bearloop"}</a> */}
            
        </div>
        
      
      <br />
      {/* <br />
      <div>Get to know me:</div>
      <div>------------------------------</div>
      <div>
        <br />
        My name is Lazaros Ioannidis and I grew up and live in Greece.

        I have studied finance and have experience in financial markets and macro-economic research. I am also a CFA® charterholder.
        <br />
        <br />
        A few years ago, I moved to a data analyst role where I had the opportunity to develop my programming skills and interest in data engineering.

        I enjoy trying to figure out how to solve a problem through code and looking to deepen my understanding of computer science and software engineering.
        <br />
        <br /> */}


    </div>
  );
};



const ComWhoAmI = () => {
  return (
    <div>
      <br></br>
      <div className="command-valid">user@home ~ % whoami</div>
      <ContentWhoAmI />
    </div>
  );
};

export default ComWhoAmI;
