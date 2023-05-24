import CenterBlock from '@/components/Footer/components/CenterBlock';
import LogoBlock from '@/components/Footer/components/LogoBlock';
import PlatformsBlock from '@/components/Footer/components/PlatformsBlock';
import useStyles from '@/components/Footer/Footer.useStyles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer
      className={classes.root}
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

export default Footer;
