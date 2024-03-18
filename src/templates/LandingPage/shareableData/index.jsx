import React from 'react';
import Input from '../../../components/input';
import { LinkContainer, TextContainer, UrlContainer } from './container';

export default function ShareableData() {
  return (
    <div
      id="shareableData"
      className="w-full md:max-w-[350px] md:min-w-[350px] h-fit"
    >
      <div className="w-full">
        <span className="uppercase text-sm font-bold block">
          Shareable data
        </span>
        <p className="text-sm mt-[10px] text-gray-600">
          Add data {"you'd"} like to share in this section. Note that fields
          differ by social media
        </p>
        <div className="flex items-center gap-8 flex-col mt-8">
          <LinkContainer />
          <TextContainer
            id="text"
            name="text"
            placeholder="Checkout this resource at example"
          />
          <UrlContainer />
        </div>
      </div>
    </div>
  );
}
