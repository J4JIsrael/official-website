import { GoalsBG } from '@/components/svgBgs/GoalsBG';
import { MailIcon, PeopleIcon, StudiesIcon } from '../icons';
import { GoalIcon } from './GoalIcon';

export const GoalIcons = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-12">
      <GoalsBG className="absolute left-0 top-20 h-[calc(140%)] w-full translate-y-[-10%] overflow-visible " />
      <h2 className="text-[64px] font-bold">מטרות הקהילה</h2>
      <div className="flex w-full items-center justify-around overflow-visible xs:mb-10 xs:flex-col xs:gap-16 sm:mb-10 sm:flex-col sm:gap-16 md:mb-10 md:flex-col md:gap-16 lg:flex-row">
        <GoalIcon svgIcon={<MailIcon />} />
        <GoalIcon svgIcon={<PeopleIcon />} />
        <GoalIcon svgIcon={<StudiesIcon />} />
      </div>
    </div>
  );
};
