import React from 'react';
import ShareableData from './shareableData';
import SocialLinks from './socialLinks';

export default function LandingPage() {
  return (
    <section
      id="content"
      className="relative max-w-8xl mx-auto px-4 md:px-6 lg:px-8 flex pb-10"
    >
      <div className="mx-auto w-full max-w-[900px] flex flex-col md:flex-row justify-between gap-20">
        <ShareableData />
        <SocialLinks />
      </div>
    </section>
  );
}
