import Image from 'next/image';

export default function BrandLink({ name, href, logo, mark, brand, className = '' }: { name: string; href: string; logo?: string; mark?: string; brand: string; className?: string }) {
  return <a className={`brand-link brand-${brand} ${className}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`}><span className="brand-icon" aria-hidden="true">{logo ? <Image src={logo} alt="" width={24} height={24} unoptimized/> : <span className="brand-monogram">{mark}</span>}<span className="brand-external">↗</span></span><span>{name}</span></a>;
}
