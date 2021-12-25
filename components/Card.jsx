import React from "react";

import Image from "next/image";

const Card = ({ image, title, w, h }) => {
  return (
    <div
      style={{
        paddingTop: "10px,",
      }}
    >
      <Image
        src={image}
        alt={title}
        /* layout="responsive"  */ width={w}
        height={h}
        priority
      />
    </div>
  );
};

export default Card;
