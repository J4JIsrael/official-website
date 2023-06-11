import { GoalsBG } from '@/components/svgBgs/GoalsBG';
import { MailIcon, PeopleIcon, StudiesIcon } from '../icons';
import { GoalIcon } from './GoalIcon';

export const GoalIcons = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-12 xs:w-[120%] transform xs:translate-x-[10%]">
      <GoalsBG className="absolute left-0 top-4 h-[calc(140%)] w-full translate-y-[-10%] overflow-visible " />
      <h2 className="font-bold xs:text-[34px] md:text-[34px] lg:text-[64px]">
        מטרות הקהילה
      </h2>
      <div
        className="sm:gap-18 flex w-full items-center justify-around
      overflow-visible xs:mb-10 xs:flex-col
      xs:gap-20 sm:mb-10 sm:flex-col
      md:mb-10 md:flex-col md:gap-20
      lg:mb-20 lg:flex-row lg:gap-20"
      >
        <GoalIcon label="עזרה במציאת עבודה" svgIcon={<MailIcon />} />
        <GoalIcon label="יצירת שיתופי פעולה" svgIcon={<PeopleIcon />} />
        <GoalIcon label="קורסים והעשרה" svgIcon={<StudiesIcon />} />
      </div>
    </div>
  );
};
