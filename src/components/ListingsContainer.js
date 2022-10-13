import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ onDelete, filteredLists }) {

  const renderLists = filteredLists.map((list) => {
        return (
          <ListingCard 
            key={list.id}
            lists={list}
            onDeleteList={onDelete}
          />
        )});

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {renderLists}
      </ul>
    </main>
  );
}

export default ListingsContainer;
