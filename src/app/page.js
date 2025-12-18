"use client";
import Image from "next/image";
import Album from "@/app/Album";
import cover1 from "./Dejavu3.jpg";
import cover2 from "./DriversLicense.jpg";
import cover3 from "./vampire3.jpg";
import Header from "./Header.js";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-color-purple">Olivia Rodrigo</h1>
        <Image
          src="/concertphoto.jpg"
          width={1290}
          height={750}
          alt="Picture of Olivia Rodrigo on a concert"
        />
        <h2 className="text-color-purple">Most popular Songs</h2>
      </div>

      <div className="row">
        <Album
          image={cover1}
          titel="Deja Vu"
          text="Deja Vu is a dreamy, slightly experimental indie-pop track built around shimmering synths, layered production, and off-kilter rhythms. The song shifts between calm, almost spoken verses and a striking, contrast-heavy chorus. Rodrigo’s vocals blend irony and vulnerability as she reflects on repeated patterns in a past relationship, giving the song a cinematic and subtly surreal atmosphere."
        />
        <Album
          image={cover2}
          titel="Drivers Licsense"
          text="Drivers License is a soft, emotional pop ballad built around gentle piano and atmospheric production. The song slowly grows in intensity, highlighting Olivia Rodrigo’s expressive vocals and cinematic style. It became her breakout hit and introduced her signature sound."
        />
        <Album
          image={cover3}
          titel="Vampire"
          text="Vampire is a dramatic pop song that mixes delicate piano notes with powerful, rock-inspired bursts. The track creates tension through its dynamic shifts and showcases a darker, more mature sound from Olivia Rodrigo."
        />
      </div>

      <h2 className="text-color-purple">History</h2>

      <div className="row history">
        <div className="col-md-4">
          <div className="card text-white mb-3 maxWidth-35">
            <div className="card-body">
              <h4 className="card-title">Acting Career</h4>
              <p className="card-text">
                Olivia Rodrigo began her acting career with the Disney Channel
                series “Bizaardvark”, where she played Paige Olvera and gained
                her first major exposure. Her breakthrough came with her role
                as Nini Salazar-Roberts in “High School Musical: The Musical:
                The Series” on Disney+, where she showcased both her acting and
                musical talent. Through these roles, she developed confidence,
                creativity, and a growing fan base, which ultimately helped
                launch her successful career as a music artist.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="mb-3 h-100">
            <Image
              src="/highschoolmusical1.jpg"
              width={750}
              height={400}
              alt="Picture of Olivia Rodrigo"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}