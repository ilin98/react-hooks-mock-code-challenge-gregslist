import React, { useState } from "react";

function ListingCard({favorite, id, image, description, location, onDeletedItem, onHandleClick}) {

  function onHandleDelete(){

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then((listing) => onDeletedItem(listing))
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={onHandleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onHandleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onHandleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
