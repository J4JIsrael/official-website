import { formatClassesObject } from '@/utils/helpers';

const useStyles = () => {
  const classes = {
    root: {
      layout: 'flex flex-row justify-evenly items-center',
      spaces: 'gap-2',
    },
  };
  return formatClassesObject(classes);
};

export default useStyles;
