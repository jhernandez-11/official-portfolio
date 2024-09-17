import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkbdlew");
  if (state.succeeded) {
    return <p>Message sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-flow-col h-full w-full place-items-center items-center text-xl">
        <textarea className="text-lg" placeholder="Write your message here" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button id="form-button" className="transition-all" type="submit" disabled={state.submitting}>
          Send
        </button>
      </div>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
