import React, { useState } from "react";

function ListingCard({lists, onDeleteList}) {
  const {id, description, image, location} = lists
  const [isFav, setIsFav] = useState(false)

  const handleFav = () => {
    setIsFav(!isFav)
  }
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {/* {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )} */}
        <button onClick={handleFav} 
            className={isFav ? "emoji-button favorite active" : "emoji-button favorite"}>
            {isFav ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onDeleteList} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
