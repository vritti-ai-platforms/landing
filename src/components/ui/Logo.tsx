import Image from 'next/image';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/vritti-full-logo.png"
      alt="Vritti AI"
      width={120}
      height={36}
      className={className}
      priority
    />
  );
}
