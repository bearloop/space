import Help from "./Help";
import "./Help.css";

const Error = () => {
  return (
    <div className="sys-out">
      sys: Command not found. Type <Help /> for the list of valid commands.
    </div>
  );
};

export default Error;
