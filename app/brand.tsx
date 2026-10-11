import Image from "next/image";

export function BrandLogo() {
  return (
    <>
      <Image
        className="brand-symbol"
        src="/icon.svg"
        width={40}
        height={40}
        alt=""
        unoptimized
      />
      <span className="brand-word">
        nst<span aria-hidden="true">✳</span>
      </span>
    </>
  );
}
