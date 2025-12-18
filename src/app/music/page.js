import Image from 'next/image'
import Link from "next/link";
import Vinal from "@/app/Vinal";
import Header from '.././Header.js';
import Footer from '.././Footer';


import highshool from ".././sourAlbum.jpeg";
import guts from ".././gutsAlbum.jpg";
import sour from ".././HighshoolMusical.jpeg";




export default function Music() {
  return (
    <div>
      <Header />
        <div>
          <h1 className='text-color-purple '>Albums</h1>

          <div className="row album ">
            <Vinal image={sour} titel="First Album"/>
            <Vinal image={guts} titel="Latest Album"/>
            <Vinal image={highshool} titel="Hight School Musical"/>
                    
            <h2 className='text-color-purple'>Most Popular Song</h2>
              </div>
                <div className="ratio ratio-16x9 mt-4">
                  <iframe src="https://www.youtube.com/embed/cii6ruuycQA" title="YouTube video" allowFullScreen></iframe>
                </div>

        </div>
          <Footer />
        

    </div>
  );
}
