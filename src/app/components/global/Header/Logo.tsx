import React from "react";
import LOGO from "../../../../../public/beeboss-logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="">
      <Image src={LOGO} alt="BeeBoss" width={140} height={80} />
    </Link>
  );
};

export default Logo;
