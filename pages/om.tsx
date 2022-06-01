import Image from "next/image";
import Link from "next/link";
import IconFB from "../components/icons/IconFB";
import map from "../public/images/map.jpg";
import { getMenuItems } from "../lib/menuItems";
import Contact from "../components/Contact/Contact";

export default function About() {
  return (
    <main>
      <div className="container">
        <h1 className="pageheader">Om os</h1>
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-md bg-orange p-4">
            <h2 className="sectionheader">Hvem er vi?</h2>
            <p>
              MH bhshop ejes og drives af Merete, som har mange års erfaring som
              underviser, grundet sit virke som folkeskolelærer, og med syning
              af bh'er, trusser, badetøj, underkjoler m.m.
            </p>
            <p>
              Merete underviser rundt om i Danmark året rundt, og kender på den
              måde mange af sine søde kunder indgående.
            </p>
            <p className="mb-4">
              På grund af den stigende popularitet er der blevet ansat 2
              hjælpere, som giver en hånd med pakning af ordrer fra webshoppen
              samt ekspedition i butikken.
            </p>
          </div>
          <div className="rounded-md bg-orange p-4">
            <h2 className="sectionheader">Hvor er vi?</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-4">Du finder os på adressen</p>
                <address className="not-italic">
                  Kidnakken 11F <br /> 4930 Maribo
                </address>
                <p className="mt-4">
                  Vi har ikke faste åbningstider, så kontakt os venligst via
                  formularen nedenfor forud for dit besøg, hvis du vil undgå at
                  gå forgæves!
                </p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.3662788825904!2d11.480389688200086!3d54.771790598762834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0d045eaf1f4c187!2zNTTCsDQ2JzE4LjUiTiAxMcKwMjgnNTEuNCJF!5e0!3m2!1sda!2sdk!4v1653983289073!5m2!1sda!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="rounded-md bg-orange p-4">
            <h2 className="sectionheader">Vores butik</h2>
            <p>
              Vores fysiske butik i Maribo rummer alt hvad hjertet begærer til
              syning af undertøj, badetøj m.v.
            </p>
            <p>
              Alle vores blonder er farvesorteret, og vi står klar til at
              vejlede dig om dit næste projekt.
            </p>
            <p>
              Meretes landsdækkende kurser bevirker, at vi ikke har faste
              åbningstider, men du er velkommen til at sende os en besked via
              formularen nedenfor eller kontakte os via Facebook.
            </p>
            <Link href="https://www.facebook.com/MH-bhstof-og-tilbeh%C3%B8r-170868753394480/">
              <a className="btn my-4 lg:mt-8">
                <IconFB className="h-5 w-5 hover:fill-green" /> Facebook
              </a>
            </Link>
          </div>
          <div className="rounded-md bg-orange p-4">
            <h2 className="sectionheader">Vores kurser</h2>
            <p>
              Merete afholder kurser i hele landet året rundt, både gennem
              aftenskoler og private.
            </p>
            <p>
              Holdene er små, så der er tid til alle - Max. 8 kursister pr.
              hold.
            </p>
            <p>
              Kurser bookes direkte hos udbyderen, og altså ikke her på siden,
              men brug endelig kursusplanen til at finde et kursus i nærheden af
              dig!
            </p>
            <Link href="/kurser">
              <a className="btn my-4 lg:mt-14">Se kurser</a>
            </Link>
          </div>
        </section>
        <Contact />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
  };
}
