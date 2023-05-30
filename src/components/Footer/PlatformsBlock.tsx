import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { YoutubeIcon } from '@/components/icons/YoutubeIcon';
import { LinkIcon } from './LinkIcon';

export const PlatformsBlock = () => {
  const icons = [
    {
      icon: <FacebookIcon />,
      linkSrc: 'https://www.facebook.com/groups/5915476325238538',
    },
    {
      icon: <DiscordIcon />,
      linkSrc: 'https://www.linkedin.com/groups/9305833/',
    },
    {
      icon: <LinkedinIcon />,
      linkSrc: 'https://www.youtube.com/channel/UCSezD9Ad0PNbwI0I9a3mztA',
    },
    {
      icon: <WhatsappIcon />,
      linkSrc: 'https://chat.whatsapp.com/G7c35OuBRtgC6g4ytOI1te',
    },
    {
      icon: <YoutubeIcon />,
      linkSrc: 'https://discord.gg/4VJu5cWKv9',
    },
  ];

  return (
    <div className="flex flex-row items-center justify-evenly gap-2">
      {icons.map((linkIcon, index) => {
        const { icon, linkSrc } = linkIcon;
        return <LinkIcon key={index} linkSrc={linkSrc} icon={icon} />;
      })}
    </div>
  );
};
