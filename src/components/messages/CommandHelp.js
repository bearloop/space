import "./Help.css";

const ComHelp = () => {
  return (
    <div>
      <br/>
      <div className="command-valid">user@home ~ % help</div>
      <br/>
      <div>
        <kdb>whoami</kdb> -- Get to know me.
      </div>
      <div>
        <kdb>books</kdb> -- Checkout book notes & ideas.
      </div>
      <div>
        <kdb>films</kdb> -- Checkout film ratings.
      </div>
      <div>
        <kdb>why</kdb> -- Why study CS online.
      </div>
      <div>
        <kdb>ooo</kdb> -- Out of office hours.
      </div>
      <div>
        <kdb>clear</kdb> -- Clear command history.
      </div>
      <br/>
    </div>
  );
};

export default ComHelp;
