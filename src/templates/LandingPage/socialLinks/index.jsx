import React from 'react';
import SocialLinkCard from './card';
import Icons from '../../../assets/icons';

const links = [
  {
    title: 'twitter',
    icon: Icons.ic_twitter,
    link: 'https://twitter.com/intent/tweet',
    bgColor: 'bg-secondary-1',
    color: 'text-primary-1',
    buttonColor: 'bg-primary-1',
    targetColor: 'target:ring-primary-1',
  },
  {
    title: 'linkedin',
    icon: Icons.ic_linkedin,
    link: 'http://www.linkedin.com/shareArticle?mini=true',
    bgColor: 'bg-secondary-2',
    color: 'text-primary-2',
    buttonColor: 'bg-primary-2',
    targetColor: 'target:ring-primary-2',
  },
  {
    title: 'whatsapp',
    icon: Icons.ic_whatsapp,
    link: 'https://wa.me/',
    bgColor: 'bg-secondary-3',
    color: 'text-primary-3',
    buttonColor: 'bg-primary-3',
    targetColor: 'target:ring-primary-3',
  },
  {
    title: 'pinterest',
    icon: Icons.ic_pinterest,
    link: 'http://pinterest.com/pin/create/button',
    bgColor: 'bg-secondary-4',
    color: 'text-primary-4',
    buttonColor: 'bg-primary-4',
    targetColor: 'target:ring-primary-4',
  },
];

export default function SocialLinks() {
  return (
    <div id="socialLinks" className="w-full md:max-w-[500px]">
      <span className="uppercase text-sm font-bold block">Social Links</span>
      <div className="flex items-center gap-8 flex-col mt-[21px]">
        {links.map(link => (
          <SocialLinkCard
            key={link.title}
            title={link.title}
            icon={link.icon}
            link={link.link}
            bgColor={link.bgColor}
            color={link.color}
            buttonColor={link.buttonColor}
            targetColor={link.targetColor}
          />
        ))}
      </div>
    </div>
  );
}
