import React from 'react';
import * as LucideIcons from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = 'w-5 h-5', size }) => {
  if (name === 'Github' || name === 'github') return <GithubIcon className={className} />;
  if (name === 'Linkedin' || name === 'linkedin') return <LinkedinIcon className={className} />;
  if (name === 'Twitter' || name === 'twitter') return <TwitterIcon className={className} />;

  const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[name] || LucideIcons.Terminal;
  return <IconComponent className={className} size={size} />;
};
