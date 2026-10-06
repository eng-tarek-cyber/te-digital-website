import { AGENCY_LOGO_ALT, AGENCY_LOGO_URL } from '../data';

type BrandLogoProps = {
  variant?: 'header' | 'footer' | 'drawer';
  className?: string;
};

const sizeByVariant = {
  header: 'h-9 sm:h-10 w-auto max-w-[132px]',
  footer: 'h-14 sm:h-[4.5rem] w-auto max-w-[220px]',
  drawer: 'h-11 w-auto max-w-[160px]',
} as const;

export default function BrandLogo({ variant = 'header', className = '' }: BrandLogoProps) {
  return (
    <img
      src={AGENCY_LOGO_URL}
      alt={AGENCY_LOGO_ALT}
      width={220}
      height={72}
      loading={variant === 'footer' ? 'lazy' : 'eager'}
      decoding="async"
      className={`object-contain rounded-md ${sizeByVariant[variant]} ${className}`}
    />
  );
}
