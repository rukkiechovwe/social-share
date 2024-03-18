'use client';
import React, { useState } from 'react';
import Input from '../../../components/input';
import Textarea from '../../../components/textarea';
import Icons from '../../../assets/icons';

const availableLinks = {
  link: [
    { id: 'twitter', icon: Icons.ic_twitter, color: 'text-primary-1' },
    { id: 'linkedin', icon: Icons.ic_linkedin, color: 'text-primary-2' },
    { id: 'pinterest', icon: Icons.ic_pinterest, color: 'text-primary-4' },
  ],
  text: [
    { id: 'twitter', icon: Icons.ic_twitter, color: 'text-primary-1' },
    { id: 'linkedin', icon: Icons.ic_linkedin, color: 'text-primary-2' },
    { id: 'whatsapp', icon: Icons.ic_whatsapp, color: 'text-primary-3' },
    { id: 'pinterest', icon: Icons.ic_pinterest, color: 'text-primary-4' },
  ],
  image: [
    { id: 'pinterest', icon: Icons.ic_pinterest, color: 'text-primary-4' },
  ],
};

const Available = ({ id, icon, color }) => (
  <a href={`#${id}`} className={color}>
    {icon}
  </a>
);

export function LinkContainer() {
  const [input, setInput] = useState('');
  return (
    <div id="link-container" className="flex flex-col w-full gap-1">
      <Input
        title=" Link to share"
        id="link"
        placeholder="https://example.com"
        type="link"
        name="link"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="flex items-center gap-[10px] flex-row mt-0.5 text-gray-600 text-xs">
        <span className="font-medium">Available for:</span>
        {availableLinks.link.map(item => (
          <Available
            key={item.id}
            id={item.id}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export function TextContainer() {
  const [input, setInput] = useState('');

  return (
    <div id="text-container" className="flex flex-col w-full gap-1">
      <Textarea
        title="Text to share"
        id="text"
        name="text"
        placeholder="Checkout this resource at example"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="flex items-center gap-[10px] flex-row mt-0.5 text-gray-600 text-xs">
        <span className="font-medium">Available for:</span>
        {availableLinks.text.map(item => (
          <Available
            key={item.id}
            id={item.id}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export function UrlContainer() {
  const [input, setInput] = useState('');

  return (
    <div id="url-container" className="flex flex-col w-full gap-1">
      <Input
        title="Image url to share"
        id="url"
        placeholder="https://example.com/image.png"
        type="url"
        name="url"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="flex items-center gap-10px flex-row mt-0.5 text-gray-600 text-xs">
        <span className="font-medium">Available for:</span>
        {availableLinks.image.map(item => (
          <Available
            key={item.id}
            id={item.id}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
