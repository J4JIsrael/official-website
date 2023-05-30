import React from 'react';

interface LinkIconProps {
  linkSrc: string;
  icon: React.ReactNode;
}

export const LinkIcon = ({ linkSrc, icon }: LinkIconProps) => {
  return (
    <a href={linkSrc} target="_blank">
      {icon}
    </a>
  );
};
