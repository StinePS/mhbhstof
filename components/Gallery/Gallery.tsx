import Image from "next/image";

import sewing from "/public/images/symaskine.jpg";
import bra from "/public/images/bh.jpg";
import fabric from "/public/images/orange.jpg";
import measure from "/public/images/measure.jpg";
import leaves from "/public/images/blade.jpg";
import sygrej from "/public/images/sygrej.jpg";
import shopping from "/public/images/shopping.jpg";
import { generateSizes } from "../../styles/screens";

export default function Gallery() {
  return (
    <div className="grid h-[45vw] grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
      <div className="relative row-span-3 hidden md:inline-block">
        <Image
          layout="fill"
          objectFit="cover"
          src={sewing}
          alt="Symaskine syr lynlås i"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
      <div className="relative row-span-2 hidden md:inline-block">
        <Image
          layout="fill"
          objectFit="cover"
          src={sygrej}
          alt="Saks, nål og tråd"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
      <div className="relative hidden md:inline-block">
        <Image
          layout="fill"
          objectFit="cover"
          src={leaves}
          alt="Lycra med blade til badetøj"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
      <div className="relative row-span-2 ">
        <Image
          layout="fill"
          objectFit="cover"
          src={fabric}
          alt="Orange jerseystof"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
      <div className="relative row-span-2 ">
        <Image
          layout="fill"
          objectFit="cover"
          src={measure}
          alt="Målebånd i flere farver"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
      <div className="relative hidden md:inline-block">
        <Image
          layout="fill"
          objectFit="cover"
          src={bra}
          alt="Turkis bh syet på kursus"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
      <div className="relative hidden md:inline-block">
        <Image
          layout="fill"
          objectFit="cover"
          src={shopping}
          alt="Indkøb fra MH bhshop"
          sizes={generateSizes({ md: "400px" })}
        />
      </div>
    </div>
  );
}
