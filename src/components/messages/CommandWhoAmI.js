import "./Help.css";
import { ContentWhoAmI } from "./Content";

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
