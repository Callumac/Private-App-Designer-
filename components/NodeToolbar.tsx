'use client';

import { memo } from 'react';

function NodeToolbar() {
  return (
    <div className="w-full bg-white shadow px-4 py-2 border-b flex justify-between items-center z-10">
      <h2 className="text-lg font-semibold">App Designer Toolbar</h2>
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        onClick={() => alert('Exporting logic will go here')}
      >
        Export Prototype
      </button>
    </div>
  );
}

export default memo(NodeToolbar);
