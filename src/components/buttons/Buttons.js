import React from "react";
import { Button } from "reactstrap";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="profile-button">
      <Button outline="true" color="primary">
        Chat
      </Button>
      <Button color="primary">Follow</Button>
    </div>
  );
};

export default Buttons;
