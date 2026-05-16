/**
 * ChopSeal — formerly the page's repeating ornament.
 * Pared all the way down to nothing; standalone usages render empty.
 * Kept as a no-op so existing imports still work.
 */
export default function ChopSeal(_props: { size?: 'sm' | 'md' | 'lg' }) {
  return null;
}

/**
 * Section divider — simple gold gradient hairline. No centerpiece.
 */
export function ChopSealDivider({
  width = 'narrow',
  className = '',
}: { width?: 'narrow' | 'wide'; className?: string }) {
  const span = width === 'wide' ? 'w-32 sm:w-48' : 'w-24 sm:w-40';
  return (
    <div className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <span className={`h-px ${span} bg-gradient-to-r from-transparent via-gold/60 to-transparent`} />
    </div>
  );
}
