import LinkIcon from '@/components/Footer/components/PlatformsBlock/LinkIcon';
import useStyles from '@/components/Footer/components/PlatformsBlock/PlatformsBlock.useStyles';
import { ICONS } from '@/utils/constants';

const PlatformsBlock = () => {
  const classes = useStyles();
  const iconSize = 44;

  const icons = [
    {
      iconSrc: ICONS.FACEBOOK,
      size: iconSize,
      alt: 'Facebook',
      linkSrc: 'https://www.facebook.com/groups/5915476325238538',
    },
    {
      iconSrc: ICONS.LINKEDIN,
      size: iconSize,
      alt: 'LinkedIn',
      linkSrc: 'https://www.linkedin.com/groups/9305833/',
    },
    {
      iconSrc: ICONS.YOUTUBE,
      size: iconSize,
      alt: 'YouTube',
      linkSrc: 'https://www.youtube.com/channel/UCSezD9Ad0PNbwI0I9a3mztA',
    },
    {
      iconSrc: ICONS.WHATSAPP,
      size: iconSize,
      alt: 'WhatsApp',
      linkSrc: 'https://chat.whatsapp.com/G7c35OuBRtgC6g4ytOI1te',
    },
    {
      iconSrc: ICONS.DISCORD,
      size: iconSize,
      alt: 'Discord',
      linkSrc: 'https://discord.gg/4VJu5cWKv9',
    },
  ];

  return (
    <div className={classes.root}>
      {icons.map(icon => {
        const { iconSrc, size, alt, linkSrc } = icon;
        return (
          <LinkIcon
            key={alt}
            iconSrc={iconSrc}
            size={size}
            alt={alt}
            linkSrc={linkSrc}
          />
        );
      })}
    </div>
  );
};

export default PlatformsBlock;
