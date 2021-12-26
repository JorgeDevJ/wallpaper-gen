import React from "react";

import Image from "next/image";

const Card = ({ image, title, w, h }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
      }}
    >
      <Image
        src={image}
        alt={title}
        width={w}
        height={h}
        quality="90"
        priority
        placeholder="blur"
        blurDataURL
      />
    </div>
  );
};

export default Card;
