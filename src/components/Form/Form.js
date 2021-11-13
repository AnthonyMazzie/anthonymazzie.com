import React from "react";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_3vJZ0yBgECs8XeMThNaDn");

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "mazzieWebsiteID",
        "template_vgqan5m",
        e.target,
        "user_3vJZ0yBgECs8XeMThNaDn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const notify = () =>
    toast.success("Email Sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="form-content-right">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className="form" onSubmit={sendEmail}>
        <div className="form-inputs">
          <input type="hidden" name="contact_number" />

          <label className="form-label">Name</label>
          <input
            className="form-input_name_email"
            type="text"
            name="user_name"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input_name_email"
            type="email"
            name="user_email"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Message</label>
          <textarea className="form-input-text" type="text" name="message" />
        </div>

        <button
          className="form-input-btn"
          type="submit"
          value="Send"
          onClick={notify}
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default Form;
