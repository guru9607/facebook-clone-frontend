import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="giftImg" />
          <span className="birthdayText">
            <b>Gotya</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img 
          src="/assets/ad.png" 
          alt="" 
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList"></ul>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
              className="rightbarProfileImg"
              src="/assets/person/3.jpeg" 
              alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Virat Kohli</span>
          </li>
      </div>
    </div>
  )
}
