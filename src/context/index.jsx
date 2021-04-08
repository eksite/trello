import React, { useReducer, useContext, createContext } from "react";

const ListsStateContext = createContext();
const ListsDispatchContext = createContext();

let listId = 2;
let cardId = 4;
const initialState = {
  lists: [
    {
      title: "Last Episode",
      id: 0,
      cards: [
        { id: 0, text: "smth" },
        { id: 1, text: "smth1" },
      ],
    },
    {
      title: "This Episode",
      id: 1,
      cards: [
        { id: 0, text: "this one" },
        { id: 1, text: "this second" },
        { id: 2, text: "this third" },
      ],
    },
  ],
};

const listsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD": {
      const newCard = {
        id: cardId,
        text: action.payload.text,
      };
      cardId += 1;
      const newLists = state.lists.map((list) => {
        if (list.id === action.payload.listId) {
          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });
      console.log(newLists)
      return { ...state, lists: newLists };
    }
    case "ADD_LIST": {
      const newList = {
        title: action.payload,
        id: listId,
        cards: [],
      };

      listId += 1;
      return { ...state, lists: [...state.lists, newList] };
    }
    default:
      return state;
  }
};

const ListsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listsReducer, initialState);

  const addList = (title) => dispatch({ type: "ADD_LIST", payload: title });
  const addCard = (text, listId) => {
    dispatch({ type: "ADD_CARD", payload: { text, listId } });
  };

  return (
    <ListsStateContext.Provider value={state}>
      <ListsDispatchContext.Provider value={{ dispatch, addList, addCard }}>
        {children}
      </ListsDispatchContext.Provider>
    </ListsStateContext.Provider>
  );
};

const useListsDispatch = () => {
  const context = useContext(ListsDispatchContext);
  if (context === undefined) {
    throw new Error("useParamsDispatch must be used within a ParamsProvider");
  }
  return context;
};

const useListsState = () => {
  const context = useContext(ListsStateContext);
  if (context === undefined) {
    throw new Error("useParamsState must be used within a ParamsProvider");
  }
  return context;
};

export { ListsProvider, useListsState, useListsDispatch };
