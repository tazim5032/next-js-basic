import Image from "next/image";
import React from "react";
import img from "../../assets/img.png";

const GalleryPage = () => {
  return (
    <div className="text-center mt-24">
      <h1>Hosted Image</h1>

      <Image
        src="https://i.ibb.co.com/3YRZJmWF/tt.png"
        height={500}
        width={500}
        alt="image"
        className="mx-auto"
      />

      <h1>Local Image</h1>

      <Image
        src={img}
        height={500}
        width={500}
        alt="image"
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
