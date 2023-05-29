import { CenterBlock } from './CenterBlock';
import { LogoBlock } from './LogoBlock';
import { PlatformsBlock } from './PlatformsBlock';

export const Footer = () => {
  return (
    <footer
      className="bg-gray-100 text-gray-700 flex h-20 w-full flex-row items-center justify-between p-20"
      // TODO: move to global theme and write styles in the classes object

      style={{
        background:
          'linear-gradient(324.86deg, rgba(0, 255, 157, 0.1) -107.86%, rgba(213, 93, 255, 0.2) 176.56%)',
        opacity: '0.7',
      }}
    >
      <LogoBlock />
      <CenterBlock />
      <PlatformsBlock />
    </footer>
  );
};
