import { type SvgBGProps } from '@/types';
import Image from 'next/image';

export const BottomBG = ({ className }: SvgBGProps) => (
  <div className={className}>
    <Image
      src="/assets/svgBgs/Bottom.svg"
      alt="Bottom BG"
      fill
      className="object-cover"
    />
  </div>
);
