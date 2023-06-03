import { CenterBlock } from './CenterBlock';
import { LogoBlock } from './LogoBlock';
import { PlatformsBlock } from './PlatformsBlock';

export const Footer = () => {
  // TODO: add backgorund from Tailwind theme
  // TODO: write only max-lg once

  return (
    <footer
      className="z-10 mt-36 p-20 opacity-70 sm:mt-20 sm:p-10"
      style={{
        background:
          'linear-gradient(324.86deg, rgba(0, 255, 157, 0.1) -107.86%, rgba(213, 93, 255, 0.2) 176.56%)',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-row items-center justify-between max-lg:w-full max-lg:flex-col max-lg:gap-6">
        <LogoBlock />
        <CenterBlock />
        <PlatformsBlock />
      </div>
    </footer>
  );
};
