import Image from "next/image";

export default function Album({ image, titel, text }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card border-secondary mb-3 h-100 maxWidth-25">
          <div className="card-header text-color-darkred">{titel}</div>
          <div className="card-body">
            <Image src={image} width={350} height={300} alt={titel} />
          </div>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}