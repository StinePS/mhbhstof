import Image from "next/image";
import { useState } from "react";
import woman from "/public/images/woman.png";

// Form submission from https://nextjs.org/docs/guides/building-forms#part-6-form-submission-with-javascript-enabled
export default function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  // Handles the submit event on form submit.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      firstname: event.currentTarget.firstname.value,
      lastname: event.currentTarget.lastname.value,
      email: event.currentTarget.email.value,
      topic: event.currentTarget.topic.value,
      message: event.currentTarget.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (response.ok) {
      setSubmitted(true);
      if (error) setError(undefined);
    } else {
      setError(result.message);
    }
  };
  return (
    <section className="grid gap-4 rounded-md bg-orange p-4 lg:grid-cols-2">
      <div>
        <h2 className="sectionheader">Kontakt os</h2>
        <p>
          Hvis du har spørgsmål om åbningstider, kurser eller noget helt tredje,
          så send os endelig en besked!
        </p>
        <div className="px-8 pt-4 lg:px-16">
          <Image src={woman} alt="Clipart af kvinde ved skrivebord" />
        </div>
      </div>

      {submitted ? (
        <div>
          <h2 className="sectionheader">Tak for din besked!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset className="grid gap-4 lg:grid-cols-2">
            <div className="lg:mb-4">
              <label htmlFor="firstname">Fornavn</label>
              <input
                className="w-full"
                id="firstname"
                type="text"
                placeholder="Anne"
                required
                name="firstname"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname">Efternavn</label>
              <input
                className="w-full"
                id="lastname"
                type="text"
                placeholder="Andersen"
                required
                name="lastname"
              />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                className="w-full"
                id="email"
                type="email"
                placeholder="mail@gmail.com"
                required
                name="email"
              />
              <span className="hint">Skriv venligst din emailadresse</span>
            </div>

            <div className="mb-4">
              <label htmlFor="topic">Emne</label>
              <input
                className="w-full"
                id="topic"
                type="text"
                placeholder="Åbningstider"
                name="topic"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message">Din besked</label>
              <textarea
                className="w-full"
                id="message"
                placeholder="Hej, hvad er jeres åbningstider i næste uge?"
                required
                rows={4}
                name="message"
              />
            </div>

            <button className="btn " type="submit">
              Send
            </button>
          </fieldset>
          {error ? (
            <div>
              <h2 className="sectionheader mt-4">
                Der er sket en fejl - Prøv igen!
              </h2>
            </div>
          ) : null}
        </form>
      )}
    </section>
  );
}
