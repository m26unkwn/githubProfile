import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img
          src={profile.avatar_url}
          alt='profile_image_user'
          style={{ width: "75px", height: "75px" }}
        />
        <div className='info'>
          <div
            className='name'
            style={{ fontSize: "2rem", fontWeight: "large" }}>
            Name: {profile.name}{" "}
          </div>
          <div className='company'>Company: {profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
