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
        priority
        quality={100}
      />
    </div>
  );
};

export default Card;
