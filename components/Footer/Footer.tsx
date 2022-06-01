import Image from "next/image";
import IconFB from "../icons/IconFB";
import Link from "next/link";

const FooterLink = ({
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) => {
  return (
    <Link href={href}>
      <a
        className="mb-2 flex max-w-max items-center text-sm font-normal text-white no-underline lg:hover:text-white lg:hover:underline lg:hover:underline-offset-2"
        {...props}
      />
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="text-sm">
      <div className="flex w-full flex-row justify-evenly bg-purple p-4">
        <FooterLink href="https://www.facebook.com/groups/144910305933685">
          <IconFB className="h-5 w-5" />
          Mh bh kurser
        </FooterLink>

        <FooterLink href="https://www.facebook.com/MH-bhstof-og-tilbeh%C3%B8r-170868753394480">
          <IconFB className="h-5 w-5" />
          Mh bhstof og -tilbehør
        </FooterLink>
      </div>

      <div className="grid w-full grid-cols-2 bg-darkpurple p-4 lg:flex lg:justify-evenly">
        <div>
          <FooterLink href="/handelsbetingelser/#fragt">Fragt</FooterLink>
          <FooterLink href="/handelsbetingelser/#retur">Retur</FooterLink>
        </div>
        <div>
          <FooterLink href="/handelsbetingelser/#bestilling">
            Bestilling
          </FooterLink>
          <FooterLink href="/handelsbetingelser/#betaling">Betaling</FooterLink>
        </div>
        <div>
          <FooterLink href="/om">Om os</FooterLink>
          <FooterLink href="/om#kontakt">Kontakt</FooterLink>
        </div>
        <div>
          <address className="not-italic text-white">
            Mh bhstof <br /> Kidnakken 11F <br /> 4930 Maribo
          </address>
        </div>
      </div>
    </footer>
  );
}
