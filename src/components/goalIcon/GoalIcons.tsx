import { GoalIcon } from './GoalIcon';
import { MailIcon } from '../icons';
import { PeopleIcon } from '../icons';
import { StudiesIcon } from '../icons';

export const GoalIcons = () => {
  return (
    <div className="flex w-full  items-center justify-around">
      <GoalIcon svgIcon={<MailIcon />} />
      <GoalIcon svgIcon={<PeopleIcon />} />
      <GoalIcon svgIcon={<StudiesIcon />} />
    </div>
  );
};
