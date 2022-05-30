import { getMenuItems } from "../lib/menuItems";

export default function Courses() {
  return (
    <main>
      <div className="container">
        <h1 className="pageheader">Kurser</h1>
        <p>Kursusplan over MHs foreløbigt planlagte kurser. </p>
        <p>
          Bemærk, at tilmelding sker direkte hos udbyderen og ikke her på siden!
        </p>
        <h2 className="sectionheader mt-4">Forår 2022</h2>
        <ul className="list-none">
          <li className="mb-2">15.-16. januar - DOF Næstved</li>
          <li className="mb-2">
            18.-19. januar - Symaskinetorvet i Slagelse. Tilmelding på 22787551
          </li>
          <li className="mb-2">
            22.-23. januar - AOF Roskilde på Gundsømagle Gl. Skole
          </li>
          <li className="mb-2">29.-30. januar - Nr. Snede Husflidsforening</li>
          <li className="mb-2 mt-8">
            2.-3. februar - Privat kursus på Als (lukket)
          </li>
          <li className="mb-2">5.-6. februar - Broager v. Hanne Schmidt</li>
          <li className="mb-2">12.-13. februar - AOF Holbæk</li>
          <li className="mb-2">14.-15. februar - Nyborg Husflidsskole</li>
          <li className="mb-2">
            26.-27. februar - Syværkstedet i Grenå v. Jannie Johanson
          </li>
          <li className="mb-2 mt-8">3.-4. marts - Det Kreative Hus, Skive</li>
          <li className="mb-2">5.-6. marts - Susanne Axelsen, Skødstrup</li>
          <li className="mb-2">
            8.-9. marts - AOF Roskilde på Gundsømagle Gl. Skole{" "}
          </li>
          <li className="mb-2">
            12.-13. marts - AOF Roskilde på Gundsømagle Gl. Skole
          </li>
          <li className="mb-2">24.-25. marts - Sabine Bruhn, Ringkøbing</li>
          <li className="mb-2 mt-8">
            23.-24. april - Broager v. Hanne Schmidt
          </li>
          <li className="mb-2">
            26.-27. april - AOF Roskilde på Gundsømagle Gl. Skole
          </li>
          <li className="mb-2">30. april-1.maj - AOF Svendborg</li>
          <li className="mb-2 mt-8">
            3.-4. maj - Nr. Kongerslev v. Heidi Nielsen
          </li>
          <li className="mb-2">5.-6. maj - Hals v. Jette Jakobsen</li>
          <li className="mb-2">
            14.-15. maj - Horne Aftenskole v. Henriette Nielsen
          </li>
          <li className="mb-2">
            16.-17. maj - LOF Skive v/ Ann Theresa Bitsch
          </li>
          <li className="mb-2">21.-22. maj - FOF Kolding/ Vejen</li>
          <li className="mb-2">28.-29. maj - DOF Næstved Aftenskole</li>
          <li className="mb-2 mt-8">
            11.-12. juni - Nr. Snede Husflidsforening
          </li>
          <li className="mb-2">
            13.-14. juni - LOF Skive v/ Ann Theresa Bitsch
          </li>
          <li className="mb-2">
            18.-19. juni - Horne Aftenskole v. Henriette Nielsen
          </li>
          <li className="mb-2">
            25.-26. juni - Grindløse/Bogense Husflidsforening
          </li>
          <li className="mb-2 mt-8">2.-3. juli - LOF Gribskov</li>
          <li>7.-8. juli - Århus v. Jette Sloth Flohr</li>
        </ul>
      </div>
    </main>
    //Oversigt over planlagte kurser (fra FB)
  );
}

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
  };
}
