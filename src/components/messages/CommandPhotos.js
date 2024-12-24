import "./Help.css";

const ContentPhotos = () => {
  
  
  return (
    <div>
      
        <br />
        I own a Fuji X-E4 and enjoy street and landscape photography. So, I've created TakeThemShots to exhibit some of my shots there.
        Cookopia is a different kind of blog mostly showing photos of food I've enjoyed 🍔. Somehow food is memory and I think I can name where and who I was with in each of these photos.
        <br/>
        <br/>
        <div className="card-rating">
            <br/>
            Photography: <a className="card-main-title" href={"https://takethemshots.tumblr.com"}>{"https://takethemshots.tumblr.com"}</a>
            <br/>
            Food shots: <a className="card-main-title" href={"https://cookopia.tumblr.com"}>{"https://cookopia.tumblr.com"}</a>
            
        </div>
        
      
      <br />
    </div>
  );
};


const ComPhotos = () => {
  return (
    <div>
      <br></br>
      <div className="command-valid">user@home ~ % shots</div>
      <ContentPhotos />
    </div>
  );
};

export default ComPhotos;
