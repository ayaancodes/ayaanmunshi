import { FiGlobe } from 'react-icons/fi';

export default function City({ children }: { children: string }) {
  return <span className="life-location"><FiGlobe aria-hidden="true"/>{children}</span>;
}
