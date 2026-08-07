import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="profile" />
      <h1>{props.user},{props.age}</h1>
      <p>I am Full stack Developer.I recently learning skill</p>
      <button>Add me</button>
    </div>
  );
}

export default Card
