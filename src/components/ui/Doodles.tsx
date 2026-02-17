export function DoodleSparkle({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0C12 0 14 8 16 10C18 12 24 12 24 12C24 12 18 12 16 14C14 16 12 24 12 24C12 24 10 16 8 14C6 12 0 12 0 12C0 12 6 12 8 10C10 8 12 0 12 0Z" />
    </svg>
  );
}

export function DoodleArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 32C12 16 24 8 40 12" />
      <path d="M34 6L40 12L34 18" />
    </svg>
  );
}

export function DoodleUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 8C30 2 50 10 80 6C110 2 130 10 160 6C175 4 190 8 198 6" />
    </svg>
  );
}
