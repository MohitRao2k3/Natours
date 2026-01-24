import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col items-center sm:flex-row sm:items-center gap-2 z-10"
    >
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      <span className="text-base sm:text-xl font-semibold text-primary-100 text-center sm:text-left">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
