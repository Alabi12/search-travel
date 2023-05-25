import React, { useState } from "react";
import SearchComponent from "../components/SearchComponent";
import ListingCard from "../components/ListingCard";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic here
    // Update searchResults based on the search query
    // You can use APIs, filter data, or any other search mechanism

    // For example, let's filter the listings array based on the search query
    const filteredResults = listings.filter((listing) =>
      listing.details.toLowerCase().includes(query.toLowerCase())
    );

    // Update the search results state
    setSearchResults(filteredResults);
  };

  // Replace with your actual API response or data
  const listings = [
    {
      id: 1,
      image: "listing1.jpg",
      location: "New York City",
      nightlyRate: 150,
      details: "Cozy apartment in the heart of NYC",
    },
    {
      id: 2,
      image: "listing2.jpg",
      location: "San Francisco",
      nightlyRate: 120,
      details: "Modern loft with stunning city views",
    },
    {
      id: 3,
      image: "listing3.jpg",
      location: "Paris",
      nightlyRate: 200,
      details: "Charming studio near the Eiffel Tower",
    },
  ];

  return (
    <div className="index-page">
      <nav className="simple-nav">
        <div className="simple-nav__left">
          <img
            src="hostshare-logo.png"
            alt="Hostshare Logo"
            className="simple-nav__logo"
          />
        </div>
        <div className="simple-nav__middle">
          <SearchComponent
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />
        </div>
        <div className="simple-nav__right">
          <img
            src="avatar-placeholder.png"
            alt="User Avatar"
            className="simple-nav__avatar"
          />
          <div className="simple-nav__menu">{/* Menu content goes here */}</div>
        </div>
      </nav>
      <div className="listings-grid">
        {searchResults.length > 0
          ? searchResults.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))
          : listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
