"use client";
import Image from 'next/image'


export default function Home() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-purple-400">

          <div className="container-sm">
            <a className="navbar-brand" href="#">Menu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Music</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div>
        <h1 className="text-color-purple">Olivia Rodrigo</h1>
        <Image
          src="/concertphoto.jpg"
          width={1290}
          height={750}
          alt="Picture of Olivia Rodrigo on a concert"
        />
        <h2 className='text-color-purple'>Most popular Songs</h2>
        </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card border-secondary mb-3 h-100 maxWidth-25">
                <div className="card-header text-color-darkred">Deja Vu</div>
                  <div className="card-body">
                  <Image src="/Dejavu3.jpg" width={365} height={315} alt="Picture of Olivia Rodrigo" />
                </div>
                <p className="card-text">
                  Deja Vu is an energetic indie-pop–influenced track with dreamy synths, playful details, and a bright, experimental production. It shows Rodrigo’s creative side, blending soft verses with a sharp, catchy chorus.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-secondary mb-3 h-100 maxWidth-25">
                <div className="card-header text-color-darkred">Drivers License</div>
                <div className="card-body">
                  <Image src="/DriversLicense.jpg" width={350} height={300} alt="Picture of Olivia Rodrigo" />
                </div>
                <p className="card-text">
                Drivers License is a soft, emotional pop ballad built around gentle piano and atmospheric production. The song slowly grows in intensity, highlighting Olivia Rodrigo’s expressive vocals and cinematic style. It became her breakout hit and introduced her signature sound.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-secondary mb-3 h-100 maxWidth-25">
              <div className="card-header text-color-darkred">Vampire</div>
              <div className="card-body">
                <Image src="/vampire3.jpg" width={350} height={350} alt="Picture of Olivia Rodrigo" />
              </div>
              <p className="card-text">
                Vampire is a dramatic pop song that mixes delicate piano notes with powerful, rock-inspired bursts. The track creates tension through its dynamic shifts and showcases a darker, more mature sound from Olivia Rodrigo.</p>
            </div>
          </div>
        </div>

        <h2 className='text-color-purple'>History</h2>

        <div className="history">

          <div className="col-md-4">
          <div className="card text-white mb-3 maxWidth-30">
            <div className="card-body">
              <h4 className="card-title">Acting Career</h4>
              <p className="card-text">Olivia Rodrigo appeared in the Disney Channel series “Bizaardvark,” where she gained her first major acting experience, and later starred in “High School Musical: The Musical: The Series” on Disney+, which significantly boosted her visibility. These roles helped her build a strong fan base, showcased her performance skills, and ultimately played a key role in launching her successful music career by placing her in the spotlight.</p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="mb-3 h-100 maxWidth-25">
                <Image src="/highschoolmusical1.jpg" width={750} height={450} alt="Picture of Olivia Rodrigo" />
              </div>
            </div>
          </div>
        </div>
        

        
    </div>
  );
}