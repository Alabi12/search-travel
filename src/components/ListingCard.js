import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <h3>{listing.details}</h3>
      {/* Render other listing card details */}
    </div>
  );
};

export default ListingCard;
