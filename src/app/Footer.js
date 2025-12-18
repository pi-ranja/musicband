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
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          {sent && (
            <div className="alert alert-success mb-3" role="status">
              Nachricht wurde gesendet
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your E-mail"
                required
              />
            </div>

            <div>
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                placeholder="Your Message"
                required
              />
            </div>

            <button className="btn bg-purple-400 w-100" type="submit">
              Senden
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="mb-3">
            <a
              className="text-center border border-purple-400 rounded px-3 py-2 bg-red-text-white"
              href="https://www.instagram.com/oliviarodrigo"
            >
              Instagram
            </a>
            <a
              className="text-center border border-purple-400 rounded px-3 py-2 bg-red-text-white"
              href="https://open.spotify.com"
            >
              Spotify
            </a>

            <a
              className="text-center border border-purple-400 rounded px-3 py-2 bg-red-text-white"
              href="https://www.youtube.com"
            >
              YouTube
            </a>
          </div>
        </div>
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
    </footer>
  );
}