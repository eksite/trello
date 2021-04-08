import { Button, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import Textarea from "react-textarea-autosize";
import { useListsDispatch } from "../context/index.jsx";

const TrelloActionButton = ({ list, listId }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [text, setText] = useState("");
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttnoTextBackground = list ? "rgba(0, 0, 0, .15)" : "inherit";
  const { addList, addCard } = useListsDispatch();

  const toggleForm = () => {
    setIsToggle(!isToggle);
    setText("");
  };

  const handleAddList = () => {
    console.log(text);
    if (text) {
      addList(text);
    }
  };

  const handleAddCard = () => {
    if (text) {
      addCard(text, listId)
    }
  };

  const renderForm = () => {
    const placeHolder = list
      ? "Enter list title"
      : "Enter a title for this card";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <Textarea
            placeholder={placeHolder}
            autoFocus
            onBlur={toggleForm}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              resize: "none",
              width: "100%",
              border: "none",
              outline: "none",
            }}
          />
        </Card>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
          <Button
            onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <CloseIcon style={{ marginLeft: 8, cursor: "pointer" }} />
        </div>
      </div>
    );
  };

  return isToggle ? (
    renderForm()
  ) : (
    <div
      onClick={toggleForm}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
        opacity: buttonTextOpacity,
        color: buttonTextColor,
        background: buttnoTextBackground,
      }}
    >
      <AddIcon />
      <p>{buttonText}</p>
    </div>
  );
};

export default TrelloActionButton;
