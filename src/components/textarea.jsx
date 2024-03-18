import React from 'react';

export default function Textarea({ title, ...props }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-700 font-semibold" htmlFor="text">
          {title}
        </label>
      </div>
      <textarea
        className="text-sm border border-gray-300 rounded-md py-2 px-2 min-h-10 focus:ring-1px-solid focus:ring-blue-500"
        {...props}
      />
    </>
  );
}
