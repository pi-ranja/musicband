import Image from "next/image";

export default function Vinal({ image, titel }) {
  return (
    <>
      <div className="col-md-4 text-center">
        <h2 className="text-white bg-red-400">{titel}</h2>
        <Image
          src={image}
          width={400}
          height={400}
          alt={titel}
          className="img-fluid border border-4 border-dark rounded"
        />
      </div>
    </>
  );
}