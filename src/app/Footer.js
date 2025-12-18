"use client";
import { useState } from "react";

export default function Footer() {
  const [sent, setSent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    setShowModal(true);
    form.reset();
  };

  return (
    <footer className="bg-black-text-white">
            {sent && (
        <div className="alert alert-success" role="status">
          Nachricht wurde gesendet
        </div>
      )}



      <div className="bg-black-text-white centered-text">
        <form onSubmit={handleSubmit} className="container">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="Your E-mail"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-control"
              required
            />
          </div>

          <div>
            <button className="btn bg-purple-400 w-100" type="submit">
              Senden
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
        </div>
      )}
            <h2>Follow Us</h2>
      <a
        className="me-3 bg-black-text-white"
        href="https://www.instagram.com/oliviarodrigo?igsh=MTd4OWY3ZmcycjgwOA=="
      >
        Instagram
      </a>
      <a
        className="me-3 bg-black-text-white"
        href="https://open.spotify.com/intl-de/artist/1McMsnEElThX1knmY4oliG?si=1OgIzrVvSsSeEwr0dblrXg&nd=1&dlsi=04fd0bbbecb14d83"
      >
        Spotify
      </a>
      <a
        className="me-3 bg-black-text-white"
        href="https://www.youtube.com/channel/UCy3zgWom-5AGypGX_FVTKpg"
      >
        YouTube
      </a>

    </footer>
  );
}