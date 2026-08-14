import Image from "next/image";

export function PotMark() {
  return (
    <span className="pot-mark-icon" aria-label="Sugo mark">
      <Image
        src="/brand/sugo-mark-simple-transparent.png"
        alt=""
        width={20}
        height={21}
        className="dot"
      />
      <span className="text">sugo</span>
    </span>
  );
}
