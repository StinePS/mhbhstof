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
        className="flex max-w-max items-center text-sm font-normal text-white no-underline hover:text-white hover:underline hover:underline-offset-2"
        {...props}
      />
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="text-sm">
      <div className="my-auto flex w-full flex-row justify-evenly bg-purple p-4">
        <FooterLink href="https://www.facebook.com/groups/144910305933685">
          <IconFB className="h-5 w-5" />
          Mh bh kurser
        </FooterLink>

        <FooterLink href="https://www.facebook.com/MH-bhstof-og-tilbeh%C3%B8r-170868753394480">
          <IconFB className="h-5 w-5" />
          Mh bhstof og -tilbehør
        </FooterLink>
      </div>

      <div className="w-full bg-darkpurple pb-4 lg:flex lg:justify-evenly">
        <ul>
          <li className="pl-4 pt-4 lg:pl-0">
            <FooterLink href="/handelsbetingelser/#fragt">Fragt</FooterLink>
          </li>
          <li className="pl-4 pt-4 lg:pl-0">
            <FooterLink href="/handelsbetingelser/#retur">Retur</FooterLink>
          </li>
        </ul>
        <ul>
          <li className="pl-4 pt-4 lg:pl-0">
            <FooterLink href="/handelsbetingelser/#bestilling">
              Bestilling
            </FooterLink>
          </li>

          <li className="pl-4 pt-4 lg:pl-0">
            <FooterLink href="/handelsbetingelser/#betaling">
              Betaling
            </FooterLink>
          </li>
        </ul>
        <ul>
          <li className="pl-4 pt-4 lg:pl-0">
            <FooterLink href="/om">Om os</FooterLink>
          </li>
          <li className="pl-4 pt-4 lg:pl-0">
            <FooterLink href="/om#kontakt">Kontakt</FooterLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
