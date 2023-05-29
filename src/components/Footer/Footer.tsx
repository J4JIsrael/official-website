import { CenterBlock } from './CenterBlock';
import { LogoBlock } from './LogoBlock';
import { PlatformsBlock } from './PlatformsBlock';

export const Footer = () => {
  // TODO: add backgorund from Tailwind theme
  // TODO: write only max-lg once

  return (
    <footer
      className="bg-footer-gradient flex w-full flex-row items-center justify-between p-20 opacity-70 max-lg:flex-col max-lg:gap-6 max-lg:p-6"
      style={{
        background:
          'linear-gradient(324.86deg, rgba(0, 255, 157, 0.1) -107.86%, rgba(213, 93, 255, 0.2) 176.56%)',
      }}
    >
      <LogoBlock />
      <CenterBlock />
      <PlatformsBlock />
    </footer>
  );
};
