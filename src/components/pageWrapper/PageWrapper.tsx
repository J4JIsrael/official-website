// import { HeaderWelcomeBG } from '@/components/svgBgs';
import { ActivityBG } from '@/components/svgBgs';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto flex max-w-[1200px] flex-col justify-evenly gap-20 xs:p-6">
      <ActivityBG className="absolute left-0 top-0 h-[1000px] w-full" />
      {children}
    </div>
  );
};
