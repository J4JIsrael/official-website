import { CenterBlock } from './CenterBlock';
import { LogoBlock } from './LogoBlock';
import { PlatformsBlock } from './PlatformsBlock';

export const Footer = () => {
  const baseStyles =
    'bg-gray-100 text-gray-700 flex h-20 w-full flex-row items-center justify-between p-20';

  // TODO: add backgorund from Tailwind theme
  
  return (
    <footer className={`${baseStyles} opacity-70`}>
      <LogoBlock />
      <CenterBlock />
      <PlatformsBlock />
    </footer>
  );
};
