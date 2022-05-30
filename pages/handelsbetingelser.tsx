import { getMenuItems } from "../lib/menuItems";

export default function FAQ() {
  return (
    <main>
      <div className="container">
        <h1 className="pageheader">Handelsbetingelser</h1>
        <section id="bestilling">
          <h2 className="sectionheader">Bestilling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            tempora sequi veniam reprehenderit quam vel distinctio perspiciatis
            non esse facilis fugit commodi ex, saepe eum. Nemo, voluptatum
            magni? Impedit, sapiente.
          </p>
        </section>

        <section id="betaling">
          <h2 className="sectionheader">Betaling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            tempora sequi veniam reprehenderit quam vel distinctio perspiciatis
            non esse facilis fugit commodi ex, saepe eum. Nemo, voluptatum
            magni? Impedit, sapiente.
          </p>
        </section>

        <section id="fragt">
          <h2 className="sectionheader">Fragt</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            tempora sequi veniam reprehenderit quam vel distinctio perspiciatis
            non esse facilis fugit commodi ex, saepe eum. Nemo, voluptatum
            magni? Impedit, sapiente.
          </p>
        </section>

        <section id="returnering">
          <h2 className="sectionheader">Returnering</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            tempora sequi veniam reprehenderit quam vel distinctio perspiciatis
            non esse facilis fugit commodi ex, saepe eum. Nemo, voluptatum
            magni? Impedit, sapiente.
          </p>
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
  };
}
