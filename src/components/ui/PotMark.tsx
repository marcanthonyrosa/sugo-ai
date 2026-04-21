interface PotMarkProps {
  large?: boolean;
}

export function PotMark({ large }: PotMarkProps) {
  return (
    <span
      className={`pot-mark-icon text-ink ${large ? "pot-mark-icon-lg" : ""}`}
      aria-label="Sugo mark"
    >
      <span style={{ fontStyle: "italic" }}>sugo</span>
    </span>
  );
}
