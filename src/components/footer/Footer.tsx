import { BottomBG } from '@/components/svgBgs';
import { CenterBlock } from './CenterBlock';
import { LogoBlock } from './LogoBlock';
import { PlatformsBlock } from './PlatformsBlock';

export const Footer = () => {
  return (
    <footer
      className="relative z-0 mt-36 px-6 py-10 opacity-70 sm:mt-20"
      style={{
        background:
          'linear-gradient(324.86deg, rgba(0, 255, 157, 0.1) -107.86%, rgba(213, 93, 255, 0.2) 176.56%)',
      }}
    >
      <BottomBG className="absolute left-0 top-0 z-0 h-full w-full" />
      <div className="z-20 mx-auto flex w-full max-w-[1200px] flex-row items-center justify-between max-lg:w-full max-lg:flex-col max-lg:gap-6">
        <LogoBlock />
        <CenterBlock />
        <PlatformsBlock />
      </div>
    </footer>
  );
};
