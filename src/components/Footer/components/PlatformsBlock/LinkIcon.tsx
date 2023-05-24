import Image from 'next/image';

interface LinkIconProps {
  iconSrc: string;
  size: number;
  alt: string;
  linkSrc: string;
}

const LinkIcon = ({ iconSrc, size, alt, linkSrc }: LinkIconProps) => {
  return (
    <a href={linkSrc} target="_blank">
      <Image src={iconSrc} width={size} height={size} alt={alt} />
    </a>
  );
};

export default LinkIcon;
