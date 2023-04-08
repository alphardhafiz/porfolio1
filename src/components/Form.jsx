import "./FormStyles.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhxzgn2",
        "template_33js8fk",
        form.current,
        "rgcvKj7Zdrp8uDAuE"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label for="name">Your Name</label>
        <input type="text" name="name" id="name" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="6"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
