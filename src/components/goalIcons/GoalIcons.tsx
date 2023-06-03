import { MailIcon, PeopleIcon, StudiesIcon } from '../icons';
import { GoalIcon } from './GoalIcon';

export const GoalIcons = () => {
  return (
    <div className="flex w-full items-center justify-around xs:mb-10 xs:flex-col xs:gap-16 sm:mb-10 sm:flex-col sm:gap-16 md:mb-10 md:flex-col md:gap-16 lg:flex-row">
      <GoalIcon svgIcon={<MailIcon />} />
      <GoalIcon svgIcon={<PeopleIcon />} />
      <GoalIcon svgIcon={<StudiesIcon />} />
    </div>
  );
};
