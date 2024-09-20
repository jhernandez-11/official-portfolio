import React from "react";
import "./Contact.css";
import ContactForm from "../../components/Contact-Form/ContactForm";
import ContactIcons from "../../components/Contact-Icon/Contact-Icon";

const Contact = () => {
  return (
    <div className="contact-cont relative w-full grid sm:grid-flow-col items-center sm:justify-center sm:flex-row">
      <div className="grid items-center w-full sm:w-60 sm:place-content-center text-5xl mb-6 sm:text-7xl font-bold font-sans uppercase">
        <p className="heading-text sm:rotate-[-90deg] w-max">Contact Me</p>
      </div>
      <div className="grid place-items-center place-content-evenly h-full sm:pr-6">
        <p className="font-mono text-lg">
          Let's connect!
          <br /> I'm always excited to collaborate and explore new
          opportunities—drop me a message!
        </p>
        <ContactForm />
      </div>
      <ContactIcons />
    </div>
  );
};

export default Contact;
