import React from 'react';
import Icons from '../../../assets/icons';

export default function SocialLinkCard({
  icon,
  title,
  link,
  bgColor,
  color,
  buttonColor,
  targetColor,
}) {
  return (
    <div
      id={title}
      className={`rounded-2xl px-5 py-4 w-full ${bgColor} ${color} ${targetColor} target:ring-1 target:ring-offset-4`}
    >
      <p className="flex items-center font-bold gap-2 capitalize">
        {icon}
        {title}
      </p>
      <a
        href={link}
        target="_blank"
        className="mt-3 text-sm underline break-all block"
      >
        {link}
      </a>
      <a target="_blank" href={link}>
        <button
          className={`flex items-center gap-[6px] cursor-pointer text-white rounded-lg px-3 py-2 text-xs mt-[30px] ${buttonColor}`}
        >
          Go to link
          {Icons.ic_goto}
        </button>
      </a>
    </div>
  );
}
