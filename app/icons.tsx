export function ArrowIcon({
  direction = "up-right",
  className = "",
}: {
  direction?: "up-right" | "down" | "right";
  className?: string;
}) {
  return (
    <svg
      className={`arrow-icon ${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <g
        transform={
          direction === "down"
            ? "rotate(135 10 10)"
            : direction === "right"
              ? "rotate(45 10 10)"
              : undefined
        }
      >
        <path
          d="M4 16 16 4M4 4h12v12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
export function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M6 18 18 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
