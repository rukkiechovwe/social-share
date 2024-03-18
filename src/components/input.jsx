import React from 'react';

export default function Input({ title, ...props }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <label className="text-sm text-gray.700 font-semibold" htmlFor="url">
          {title}
        </label>
      </div>
      <input
        className="text-sm border border-gray-300 rounded-md h-9 py-4 px-2 outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
    </>
  );
}
