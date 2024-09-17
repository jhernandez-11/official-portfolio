import React from "react";
import "./Contact-Icon.css";

const ContactIcons = () => {

  return (
    <div id="ci-cont" className="absolute rounded border-red-500 border-l-4 border-t-4 border-solid sm:w-2/6 bottom-0 right-0">
      <p className="font-mono p-1">Find me here too!</p>
      <ion-icon size="large" name="return-down-forward-outline"></ion-icon>
    </div>
  );
};

export default ContactIcons;
