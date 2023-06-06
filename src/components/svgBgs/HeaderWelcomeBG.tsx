import { type SvgBGProps } from '@/types';
import Image from 'next/image';

export const HeaderWelcomeBG = ({ className }: SvgBGProps) => (
  <div className={className}>
    <Image
      src="/assets/svgBgs/HeaderWelcome.svg"
      alt="header welcome BG"
      fill
      className="object-cover"
    />
  </div>
);
