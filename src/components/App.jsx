import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrelloList from "./TrelloList.jsx";
import { useListsState } from "../context/index.jsx";
import TrelloActionButton from "./TrelloActionButton.jsx";

const App = () => {
  const state = useListsState();
  return (
    <>
      <div style={styles.listsContainer}>
        {state.lists.map((list) => (
          <TrelloList
            key={list.id}
            listId={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
        <TrelloActionButton list />
      </div>
    </>
  );
};

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

export default App;
