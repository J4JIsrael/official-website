import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { YoutubeIcon } from '@/components/icons/YoutubeIcon';

export const PlatformsBlock = () => {
  return (
    <div className="z-50 flex flex-row items-center justify-evenly gap-2">
      <a
        href="https://www.facebook.com/groups/5915476325238538"
        target="_blank"
      >
        <FacebookIcon />
      </a>
      <a href="https://www.linkedin.com/groups/9305833/" target="_blank">
        <LinkedinIcon />
      </a>
      <a
        href="https://chat.whatsapp.com/G7c35OuBRtgC6g4ytOI1te"
        target="_blank"
      >
        <WhatsappIcon />
      </a>
      <a href="https://discord.gg/4VJu5cWKv9" target="_blank">
        <DiscordIcon />
      </a>
      <a
        href="https://www.youtube.com/channel/UCSezD9Ad0PNbwI0I9a3mztA"
        target="_blank"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
};
