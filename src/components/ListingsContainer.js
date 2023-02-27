import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onHandleClick, favorite, search}) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(listings => setListings(listings))
  }, [])

  function handleDeletedItem(deletedListing) {
    const updatedListing = listings.filter(listing => listing.id !== deletedListing.id)
    setListings(updatedListing)
  }

  const searchedListings = listings.filter(listing => listing.description.includes(search))


  const displayedListings = searchedListings.map(listings => <ListingCard key={listings.id} id={listings.id} location={listings.location} description={listings.description} image={listings.image}
  onDeletedItem={handleDeletedItem} onHandleClick={onHandleClick} favorite={favorite} />)

  return (
    <main>
      <ul className="cards">
        {displayedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
