import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const handleSend = () => {
    if (email.trim() === "" || subject.trim() === "" || comment.trim() === "") {
      alert("Please fill out the form!");
      return;
    }

    alert("Form sent successfully!");
    console.log(
      `Your filled data is >>>>>\n\nEmail: ${email}\nSubject: ${subject}\nComment: ${comment}`
    );
    setEmail("");
    setSubject("");
    setComment("");
  };

  return (
    <div className="contact_container">
      <div className="form_section">
        <section className="form">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Enter email"
            required
          />

          <label htmlFor="subject" className="label">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input"
            placeholder="Enter subject"
            required
          />

          <label htmlFor="comment" className="label">
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="input"
            placeholder="Enter comment"
            rows={5}
            required
          />

          <button className="sendBtn" onClick={handleSend}>
            Send
          </button>
        </section>
      </div>
    </div>
  );
}

export default Contact;
