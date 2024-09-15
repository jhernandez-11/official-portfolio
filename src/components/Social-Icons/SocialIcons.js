import React, { useState } from 'react';
import "./SocialIcons.css";

const Footer = () => {
  const [emailIconName, setEmailIconName] = useState("mail-outline");

  // Function to copy the email to the clipboard
  const copyContent = async () => {
    const text = 'jhernandez11@protonmail.com';
    try {
      await navigator.clipboard.writeText(text);
      console.log('Email copied to clipboard');
      
      // Change the email icon to "checkmark-done-outline"
      setEmailIconName("checkmark-done-outline");

      // Show the "Email copied!" text
      document.getElementById('copiedText').removeAttribute("style");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="icons bg-black mix-blend-difference text-white">
      <a
        href="http://www.linkedin.com/in/jhernandez-11"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon size="large" name="logo-linkedin"></ion-icon>
      </a>

      <div className="relative flex flex-col items-center">
        <p id="copiedText" style={{ display: "none" }}>
          Email copied!
        </p>
        <button onClick={copyContent} className="email">
          <ion-icon size="large" id="emailIcon" name={emailIconName}></ion-icon>
        </button>
      </div>

      <ion-icon size="large" name="logo-behance"></ion-icon>
    </div>
  );
};

export default Footer;
