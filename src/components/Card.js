import React from 'react'

const Card = ({ id, name, email }) => {
    return (
      // tc = text center
      // bg-light-green = background colour
      // dib = display inline block
      // br3 = border radius
      // pa3 = padding
      // ma2 = margin
      // grow = animation
      // bw2 = border width
      // shadow-5 = shadow
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;