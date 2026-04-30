import Image from "next/image";

export function PotMark() {
  return (
    <span className="pot-mark-icon" aria-label="Sugo mark">
      <Image src="/sugo-logo.png" alt="Sugo logo" width={20} height={20} className="dot" />
      <span className="text">sugo</span>
    </span>
  );
}
