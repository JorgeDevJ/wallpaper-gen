import React from "react";

import Image from "next/image";

const Card = ({ image, title, w, h }) => {
  return (
    <div>
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
