import { formatClassesObject } from '@/utils/helpers';

const useStyles = () => {
  const classes = {
    root: {
      layout: 'flex flex-row justify-between items-center',
      colors: 'bg-gray-100 text-gray-700',
      sizes: 'h-20 w-full',
      spaces: 'p-20',
    },
  };

  return formatClassesObject(classes);
};

export default useStyles;
