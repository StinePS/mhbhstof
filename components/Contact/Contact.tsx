import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState("");

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   if (form.current?.checkValidity()) {
  //     const data = basket.map((item) => ({
  //       name: item.name,
  //       amount: item.amount,
  //     }));
  //     const response = await fetch("https://barcode-data.herokuapp.com/order", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: { "content-type": "application/json" },
  //     });
  //     // If submit went well - push order
  //     if (response.ok) {
  //       const json = await response.json();
  //       router.push(`/thanks?id=${json.id}`);
  //     } else {
  //       // If not - show error message
  //       <div>
  //         <h2 className="center">{`Der er sket en fejl - Prøv venligst igen!`}</h2>
  //       </div>;
  //     }
  //   }
  // }
  return (
    <div
      id="kontakt"
      className="mt-4 grid gap-4 rounded-md bg-orange p-4 lg:grid-cols-2"
    >
      <div>
        <h2 className="sectionheader">Kontakt os</h2>
        <p>
          Hvis du har spørgsmål om åbningstider, kurser eller noget helt tredje,
          så send os endelig en besked!
        </p>
      </div>
      <form action="" method="post">
        <fieldset className="grid gap-4 lg:grid-cols-2">
          <div className="lg:mb-4">
            <label htmlFor="firstname">Fornavn</label>
            <input
              className="w-full"
              id="firstname"
              type="text"
              placeholder="Anne"
              required
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              name="firstname"
              value={firstname}
              onFocus={(e) => {
                setFocus(e.target.value);
              }}
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
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              name="lastname"
              value={lastname}
              onFocus={(e) => {
                setFocus(e.target.value);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              value={email}
              onFocus={(e) => {
                setFocus(e.target.value);
              }}
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
              onChange={(e) => {
                setTopic(e.target.value);
              }}
              name="topic"
              value={topic}
              onFocus={(e) => {
                setFocus(e.target.value);
              }}
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              value={message}
              onFocus={(e) => {
                setFocus(e.target.value);
              }}
            />
          </div>

          <button className="btn !place-items-end" type="submit">
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
}
