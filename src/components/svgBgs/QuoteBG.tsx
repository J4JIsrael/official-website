import { type SvgBGProps } from '@/types';
import Image from 'next/image';

export const QuoteBG = ({ className }: SvgBGProps) => (
  <div className={className}>
    <Image
      src="/assets/svgBgs/Quote.svg"
      alt="quote"
      fill
      className="object-cover"
    />
  </div>
);
