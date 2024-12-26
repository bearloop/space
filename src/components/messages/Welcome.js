// ▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀
//                     ,--.   ,--.       ,--.
//                     |  |   |  | ,---. |  | ,---. ,---. ,--,--,--. ,---.
//                     |  |.'.|  || .-. :|  || .--'| .-. ||        || .-. :
//                     |   ,'.   |\\  -- .|  |\\ .--.' '-' '|  |  |  |\\  -- .
//                     '--'   '--' '----''--' '---' '---' '--'--'--' '----'
// ▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀▀▄▀
// 


import "./Welcome.css";
import Help from "./Help";

const Welcome = () => {
  const welcome_msg = "Welcome Visitor.";

  return (
    <div>
      <div className="welcome">{welcome_msg}</div>
      <div className="intro">
        This is the personal website of L. Ioannidis. {<br></br>}{" "}
        Write appropriate commands to interact with the page.
      </div>
      <div className="guidance">
        Type <Help /> for a list of valid commands.
      </div>
    </div>
  );
};

export default Welcome;