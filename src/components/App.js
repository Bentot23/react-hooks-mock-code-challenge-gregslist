import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [lists, setLists] = useState([])  
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      setLists(data)
    })
  }, [setLists])

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => {
      console.log(lists)
      const updatedLists = lists.filter((list) => list.id !== id);
      setLists(updatedLists);
    })
  }
  // const handleDeleteList = (deletedList) => {
  //   const updatedLists = lists.filter((list) => list.id !== deletedList.id);
  //   setLists(updatedLists);
  // }
  const onSearch = (someSearch) => {
    console.log(someSearch);
    setSearch(someSearch);
  };

  const filteredListsFromSearch = lists.filter((list) => {
    return list.description.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filteredListsFromSearch);

  return (
    <div className="app">
      <Header 
        onSearch={onSearch}
      />
      <ListingsContainer 
        filteredLists={filteredListsFromSearch}
        onDelete={handleDeleteClick}
      />
    </div>
  );
}

export default App;
