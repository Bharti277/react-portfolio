import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  console.log(process.env);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_API_SERVICE_ID,
        process.env.REACT_APP_API_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_API_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_container">
      <div className="contact_form">
        <form ref={form} onSubmit={sendEmail} className="form">
          <p className="msg">Leave your message here!</p>

          <div className="contact_info">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="contact_info">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="contact_info">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <div className="contact_info">
            <input className="submit" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
