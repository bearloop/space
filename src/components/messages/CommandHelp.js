import "./Help.css";

const ComHelp = () => {
  return (
    <div>
      <br/>
      <div className="command-valid">user@home ~ % help</div>
      <br/>
      <div>
        <kdb>whoami</kdb> -- About me.
      </div>
      <div>
        <kdb>books</kdb> -- Book notes, quotes & ideas.
      </div>
      <div>
        <kdb>films</kdb> -- Films I consider interesting.
      </div>
      <div>
        <kdb>shots</kdb> -- Checkout my photography blogs.
      </div>
      <div>
        <kdb>links</kdb> -- Links to contact me.
      </div>
      <div>
        <kdb>clear</kdb> -- Clear command history.
      </div>
      <br/>
    </div>
  );
};

export default ComHelp;
