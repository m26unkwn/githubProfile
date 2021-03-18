import React from "react";
import "./card.css";
class Card extends React.Component {
  render() {
    return (
      <div className='github-profile'>
        <img src='https://placehold.it/75' alt='profile_image_user' />
        <div className='info'>
          <div className='name'> Name here </div>
          <div className='company'>Compnay Here</div>
        </div>
      </div>
    );
  }
}

export default Card;
